<?php
$conn=mysqli_connect("localhost","root","riasigtia","reg_data");


$sql = "SELECT * FROM `user_data`";
$result = mysqli_query($conn,$sql);
   
$row = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($row));
?>