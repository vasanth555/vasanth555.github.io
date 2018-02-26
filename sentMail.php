
<html>
<head>
<title>Submitted Response</title>
<!-- meta-tags -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="vasanthakumar,vasanthakumar555,vasanth,hacker" />
<meta name="description" content="hi, i am vasanth it's my personal resume website. thanks for coming" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //meta-tags -->
<link rel="icon" href="images/v.png" />
<!-- Custom-Files -->
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all" /> <!-- Style-CSS --> 
<link href="css/font-awesome.css" rel="stylesheet"> <!-- Font-Awesome-Icons-CSS -->	
<link rel="stylesheet" href="css/swipebox.css"> <!-- For-Gallery-Swipebox-CSS -->
<!-- //Custom-Files -->
<!--preloader-->
<link rel="stylesheet" href="css/preloader.css">

<!-- Web-Fonts -->
<!-- //Web-Fonts -->

</head>
<body style="font-family:times new roman;">

<?php $firstname = $_POST["fname"]; 
	  $lastname = $_POST["lname"]; 
	  $email=$_POST["email"];
	  $text= $_POST["text"];

$myfile = fopen("Message.txt", "a") or die("Unable to open file!");
$name = $firstname;
$lname=$lastname;
$emailw=$email;
$message=$text;
fwrite($myfile, "\n \n Firstname :".$name."\n lastname :".$lname."\n email: ".$email."\n Message: ".$message);
fclose($myfile);

?>
<div id="preloader"></div>
	<!-- Header -->
	<div class="banner-agile">
		<div class="myheading">
			<h1><a href="index.php">Thank You !</a></h1>
		</div>	
		<div class="container">
			<div class="banner-info-w3l">
				<h1 style="color:white;text-align:center;">Your Message Successfully delivered to Vasantha Kumar, Thanks of your valuable comments</h1>
				<h4><a href="index.php" >Go Home</a></h4>
			</div>
		</div>
	</div>
	<!-- //Navigation -->
<!-- copyright-starts-here -->
	<div class="copy-section">
		<div class="container">
			<div class="footer-top">
				<p>© 2017 Vasanth'S Resume. All rights reserved | Design by <a href="http://vasanth.16mb.com">VasanthaKumar</a></p>
			</div>
		</div>
	</div>
	<!-- copyright-ends-here -->

</body>
</html> 