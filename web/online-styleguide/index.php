<?php
	error_reporting(0);
	if ( $_GET['target'] ) {
		$targetContent =  $_GET['target'];
	} else {
		$targetContent = 'pages/introduction.php';
	}
?>
<!DOCTYPE html>
<html lang="de" dir="ltr" class="no-js prototype">
	<head>
		<title>Shelter Online-Styleguide</title>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/typo3conf/ext/shelter/Resources/Public/Css/Prototype.css?<?php echo time(); ?>">
	</head>

	<body class="is--navigation-open">
		<a href="javascript:void(0);" class="prototype__burger prototype__burger--fixed"></a>

		<div class="prototype__offcanvas">
			<div class="prototype__offcanvas__top">
				<h1><b>Shelter</b> Styleguide</h1>
				<a href="javascript:void(0);" class="prototype__burger"></a>
			</div>

			<nav class="prototype__navigation">
				<ul>
					<li><a href="pages/introduction.php" target="contentiframe">Einführung</a></li>
					<li>
						<span>Branding</span>
						<ul>
							<li><a href="branding/logo/logo.php" target="contentiframe">Logo</a></li>
							<li><a href="branding/colors/colors.php" target="contentiframe">Farben</a></li>
						</ul>
					</li>
					<li>
						<span>Komponenten</span>
						<ul>
							<li><a href="components/buttons/buttons.php" target="contentiframe">Buttons</a></li>
							<li><a href="components/content-image/content-image.php" target="contentiframe">Bilder</a></li>
							<li><a href="components/footer/footer.php" target="contentiframe">Footer</a></li>
							<li><a href="components/header/header.php" target="contentiframe">Header</a></li>
							<li><a href="components/headline-element/headline-element.php" target="contentiframe">Headline-Element</a></li>
							<li><a href="components/typographies/typographies.php" target="contentiframe">Typographie</a></li>
						</ul>
					</li>
					<li>
						<span>Demo-Seiten</span>
						<ul>
							<li><a href="pages/startpage.php" target="contentiframe">Startseite</a></li>
							<li><a href="pages/targetpage.php" target="contentiframe">Zielseite</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>

		<iframe src="<?php echo $targetContent ?>" id="contentiframe" name="contentiframe" class="prototype__contentiframe"></iframe>
	</body>
</html>
<script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
<script src="/online-styleguide/libs/highlights/highlight.pack.js"></script>
<script src="javascript/prototype.js"></script>
