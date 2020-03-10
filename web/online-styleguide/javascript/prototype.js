$(document)
  .ready(function () {
    $('.prototype__navigation a, .prototype__navigation span')
      .on({
        'click': function () {
          if ($(this).is('a')) {
            $('.prototype__navigation .is--active')
              .removeClass('is--active')

            $(this)
              .addClass('is--active')

            if ($(window).outerWidth() < 768) {
              $('body')
                .toggleClass('is--navigation-open')
            }

            history.pushState({}, $(this).text(), window.location.pathname + '?target=' + $(this).attr('href'))
          }

          $(this)
            .parent('li')
            .toggleClass('is--open')
        }
      })
      .each(function () {
        if ($(this).next('ul').length > 0) {
          $(this)
            .addClass('has--subtree')
        }
      })

    var target = getURLParameter('target')
    if (target) {
      $('.prototype__navigation a[href="' + target + '"]')
        .addClass('is--active')
        .parents('li')
        .addClass('is--open')
    } else {
      $('.prototype__navigation a[href="pages/introduction.php"]')
        .addClass('is--active')
    }

    $('.prototype__burger')
      .on({
        'click': function () {
          $('body')
            .toggleClass('is--navigation-open')
        }
      })

    // Syntax highlighting
    $('.prototype__component__sourcecode')
      .each(function () {
        let htmlcode = $(this).html()

        htmlcode = htmlcode.replace(/[\u00A0-\u9999<>&]/gim, function (i) {
          return '&#' + i.charCodeAt(0) + ';'
        })

        $(this)
          .html('<pre><code class="html">' + htmlcode + '</code></pre>')
      })

    hljs.initHighlightingOnLoad()
  })

function getURLParameter (param) {
  var sPageURL = window.location.search.substring(1)
  var sURLVariables = sPageURL.split('&')
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=')
    if (sParameterName[0] === param) {
      return sParameterName[1]
    }
  }
}
