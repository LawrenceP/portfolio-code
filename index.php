<?php include 'includes/environment.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Lawrence Phillips</title>

	<link href='https://fonts.googleapis.com/css?family=Raleway:400,200,100,300,500' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<?php if (isset($env) && $env === 'dev') { ?>
		<!-- build:css css/styles.min.css -->
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<!-- endbuild -->
	<?php } else { ?>
		<link rel="stylesheet" type="text/css" href="dist/css/styles.min.css">
	<?php } ?>
	<meta name="viewport" content="width=device-width">
	<!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> -->
	<link rel="shortcut icon" type="image/x-icon" href="http://lawrenceandrewphillips.com/favicon.ico" />
</head>
<body>

	<div class="home-img">
		<div class="layer">
			<div class="intro" id="home">
				<?php include 'includes/nav.php'; ?>

				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							
							<h1>HI! I'M LAWRENCE PHILLIPS</h1>
							<p>I'm a Front-end Web Developer who enjoys building websites and learning new skills. Feel free to have a look at the 'Work' section.</p>

							<span class="arrow arrow-down-intro glyphicon glyphicon-circle-arrow-down"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<div class="work" id="work">
			<h1>WORK</h1>
			<div class="col-sm-6 col-md-4">
				<div class="portfolio-outer">
					<a href="sites/inoubliable/" target="_blank">
						<div class="portfolio-img portfolio-inner">
							<img src="dist/images/inoubliable.png" alt="inoubliable" class="img-responsive">
							<div class="portfolio-overlay text-center">
								<h2>Inoubliable</h2>
								<p>A personal project built using angularjs, SCSS, and HTML. This quiz will determine how proficient you are in French.</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="portfolio-outer">
					<a href="http://www.hutchhouse.com/our-work/london-review-of-books/" target="_blank">
						<div class="portfolio-img portfolio-inner">
							<img src="dist/images/london-review-of-books.png" alt="london-review-of-books" class="img-responsive">
							<div class="portfolio-overlay text-center">
								<h2>London Review of Books Case Study</h2>
								<p>Built using jQuery, SCSS, and HTML</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="portfolio-outer">
					<a href="http://www.hutchhouse.com/our-work/assettradex/" target="_blank">
						<div class="portfolio-img portfolio-inner">
							<img src="dist/images/asset-tradex.png" alt="assettradex" class="img-responsive">
							<div class="portfolio-overlay text-center">
								<h2>Asset Tradex Case Study</h2>
								<p>Built using jQuery, SCSS, and HTML</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="portfolio-outer">
					<a href="http://www.pacificproduce.co.uk/" target="_blank">
						<div class="portfolio-img portfolio-inner">
							<img src="dist/images/pacific-site.png" alt="pacificproduce" class="img-responsive">
							<div class="portfolio-overlay text-center">
								<h2>Pacific Produce Website</h2>
								<p>Built using jQuery, SCSS, and HTML</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="portfolio-outer">
					<a href="sites/platformer" target="_blank">
						<div class="portfolio-img portfolio-inner">
							<img src="dist/images/platformer.png" alt="platformer" class="img-responsive">
							<div class="portfolio-overlay text-center">
								<h2>Platformer Game</h2>
								<p>A personal project built using javascript, phaser.js and photoshop.</p>
							</div>
						</div>		
					</a>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="portfolio-outer">
					<a href="https://www.speakezee.org/speaker/search" target="_blank">
						<div class="portfolio-img portfolio-inner">
							<img src="dist/images/speakezee.png" alt="speakezee" class="img-responsive">
							<div class="portfolio-overlay text-center">
								<h2>Speakezee Website</h2>
								<p>I worked on the speakers section of the Speakezee website. Built using Drupal, MySQL, SCSS and Javascript</p>
							</div>
						</div>						
					</a>
				</div>
			</div>
			<div class="arrow-container">
				<span class="arrow arrow-down-work glyphicon glyphicon-circle-arrow-down"></span>
			</div>
		</div>
	</div>

	<div class="contact" id="contact">
		<div class="container">
			<div class="row">
				<div class="col-md-12">		
					<h1>CONTACT</h1>
					<p>lawrenceandrewphillips@gmail.com</p>
					<p>07500484182</p>
					<p><a href="https://github.com/LawrenceP/">https://github.com/LawrenceP/</a></p>
					<div class="arrow-container">
						<span class="arrow arrow-up-work glyphicon glyphicon-circle-arrow-up"></span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php if (isset($env) && $env === 'dev') { ?>
		<!--build:js js/scripts.min.js -->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.hover3d.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
		<script src="js/script.js"></script>
		<!-- endbuild -->
	<?php } else { ?>
		<script src="dist/js/scripts.min.js"></script>
	<?php } ?>
</body>
</html>