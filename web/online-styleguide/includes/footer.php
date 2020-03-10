<noscript id="deferred-styles">
	<link rel="stylesheet" type="text/css" href="/typo3conf/ext/shelter/Resources/Public/Css/Minify/NonCritical.min.css?<?php echo time(); ?>">
</noscript>
<script>
  var loadDeferredStyles = function() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement);
    addStylesNode.parentElement.removeChild(addStylesNode);
  };
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);
</script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>
<script src="/typo3conf/ext/shelter/Resources/Public/JavaScript/index.min.js?<?php echo time(); ?>"></script>