<!doctype html>
<html lang="de" dir="ltr" class="no-js prototype">
<?php include "../../includes/head-component.php"; ?>
<body style="min-height: 2000px">
<div class="prototype__component">
	<h1 class="prototype__headline">Bild</h1>

	<p class="prototype__description">Bild-Element für den Inhaltsbereich. In den Variationen halbe und volle
		Inhaltsbreite.</p>

	<h2 class="prototype__subline">Halbe Inhaltsbreite</h2>
	<div class="prototype__component__view">
		<div class="page__content">
            <?php include "includes/small.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/small.php"; ?></div>


	<h2 class="prototype__subline">Volle Inhaltsbreite</h2>
	<div class="prototype__component__view">
		<div class="page__content">
            <?php include "includes/wide.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/wide.php"; ?></div>

</div>
<?php include "../../includes/footer-component.php"; ?>
</body>
</html>