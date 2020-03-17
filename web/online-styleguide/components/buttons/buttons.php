<!doctype html>
<html lang="de" dir="ltr" class="no-js prototype">
<?php include "../../includes/head-component.php"; ?>
<body>
<div class="prototype__component">
	<h1 class="prototype__headline">Buttons</h1>

	<p class="prototype__description">
		Buttons werden genutzt, um dem Nutzer eine mögliche Interaktion anzuzeigen.<br>
		Beim Mouseover oder Focus auf einen Button sind diese überlicherweise mit einem Effekt hinterlegt.
	</p>

	<h2 class="prototype__subline">Primär (Roter Hintergrund)</h2>
	<div class="prototype__component__view">
		<div class="container">
            <?php include "includes/primary.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/primary.php"; ?></div>

	<h2 class="prototype__subline">Primär (größer)</h2>
	<div class="prototype__component__view">
		<div class="container">
            <?php include "includes/primary-large.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/primary-large.php"; ?></div>

	<h2 class="prototype__subline">Sekundär (Roter Rahmen, weißer Hintergrund)</h2>
	<div class="prototype__component__view">
		<div class="container">
            <?php include "includes/secondary.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/secondary.php"; ?></div>

	<h2 class="prototype__subline">Sekundär (größer)</h2>
	<div class="prototype__component__view">
		<div class="container">
            <?php include "includes/secondary-large.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/secondary-large.php"; ?></div>

	<h2 class="prototype__subline">Ausgegraute Buttons</h2>
	<div class="prototype__component__view">
		<div class="container">
            <?php include "includes/ghost.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/ghost.php"; ?></div>

	<h2 class="prototype__subline">Pfeil-Links (größer)</h2>
	<div class="prototype__component__view">
		<div class="container">
            <?php include "includes/arrows.php"; ?>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/arrows.php"; ?></div>


</div>
<?php include "../../includes/footer-component.php"; ?>
</body>
</html>