<?php
$from = $_POST['from'];
$to = $_POST['to'];
$subject = $_POST['subject'];
$message = $_POST['message'] ;
mail( $from,"Mail",$to,$_subject, $message,);
header( "okonfortunesam@gmail.com" );
?>