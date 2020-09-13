<?php
$conn=mysqli_connect("localhost","root","riasigtia","reg_data");

$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];


$sql = "INSERT INTO `user_data` (`S_NO`, `NAME`, `EMAIL`, `PASSWORD`, `DATE`) VALUES (NULL, '$name', '$email', '$password', current_timestamp())";
$result = mysqli_query($conn,$sql);
if($result){
    echo "Registration Successful!";}
?>