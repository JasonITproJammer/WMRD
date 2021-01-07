<?php
  //if "email" variable is filled out, send email
  if (isset($_REQUEST['email'])) { 
  
  //Set admin email for email to be sent to (use you own MATC email address)
	$admin_email = "deutscj2@gmatc.matc.edu"; 

  //Set PHP variable equal to information completed on the HTML form
	$subject = 'Be apart of our email list';
	$name = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$hearAbout = $_REQUEST['hear-about'];
	$hearAboutOther = 'none';
	if (isset($_REQUEST['othercomments'])){ $hearAboutOther = $_REQUEST['othercomments']; }
	$state = $_REQUEST['state'];
	$stateOther = 'none';
	if (isset($_REQUEST['stateothercomments'])){ $stateOther = $_REQUEST['stateothercomments']; }
	$comments = $_REQUEST['comments'];
	 
			
  //Start building the email body combining multiple values from HTML form    
	$body  = "From: " . $name . "\n"; 
	$body .= "Email: " . $email . "\n";
	$body .= "HearAbout: " . $hearAbout . "\n";
	$body .= "HearAboutOther: " . $hearAboutOther . "\n";
	$body .= "State: " . $state . "\n";
	$body .= "StateOther: " . $stateOther . "\n";
	$body .= "Comments: " . $comments; //Continue the email body
  
  //Create the email headers for the from and CC fields of the email     
	$headers = "From: " . $name . " <" . $email . "> \r\n"; //Create email "from"
	$headers .= "CC: " . $name . " <" . $email . ">"; //Send CC to visitor
	
  //Actually send the email from the web server using the PHP mail function
	mail($admin_email, $subject, $body, $headers); 
	
  //Display email confirmation response on the screen
	echo "Thank you for contacting us!"; 
  }
  //if "email" variable is not filled out, display an error
  else { 
	 echo "There has been an error!";
  }
  
?>