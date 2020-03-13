<!doctype html>
<html lang="de" dir="ltr" class="no-js prototype">
<?php include "../../includes/head-component.php"; ?>
<body>
<div class="prototype__component">
	<h1 class="prototype__headline">Typographie</h1>

	<p class="prototype__description">Alle formatierten Textvarianten.</p>

	<h2 class="prototype__subline">Überschriften</h2>
	<div class="prototype__component__view">
		<div class="page__content">
			<div class="container">
                <?php include "includes/headlines.php"; ?>
			</div>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/headlines-display-classes.php"; ?></div>

	<h2 class="prototype__subline">Überschriften mit abweichender Formatierung</h2>
	<div class="prototype__component__view">
		<div class="container">
			<div class="container">
                <?php include "includes/headlines-display-classes.php"; ?>
			</div>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/headlines.php"; ?></div>

	<h2 class="prototype__subline">Fließtext</h2>
	<div class="prototype__component__view">
		<div class="page__content">
			<div class="container">
                <?php include "includes/paragraphs.php"; ?>
			</div>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/paragraphs.php"; ?></div>

	<h2 class="prototype__subline">Einführungstext</h2>
	<div class="prototype__component__view">
		<div class="page__content">
			<div class="container">
                <?php include "includes/intro_paragraphs.php"; ?>
			</div>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/intro_paragraphs.php"; ?></div>

	<h2 class="prototype__subline">Listen/ Aufzählungen</h2>
	<div class="prototype__component__view">
		<div class="page__content">
			<div class="container">
                <?php include "includes/lists.php"; ?>
			</div>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/lists.php"; ?></div>

	<h2 class="prototype__subline">Links</h2>
	<div class="prototype__component__view">
		<div class="page__content">
			<div class="container">
				<div class="text-block">
                    <?php include "includes/links.php"; ?>
				</div>
			</div>
		</div>
	</div>
	<p class="prototype__block-headline">Sourcecode</p>
	<div class="prototype__component__sourcecode"><?php include "includes/links.php"; ?></div>
</div>
<?php include "../../includes/footer-component.php"; ?>
</body>
</html>