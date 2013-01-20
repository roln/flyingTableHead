<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<TITLE>Flying Table Head</TITLE>
<META http-equiv=Content-Type content="text/html; charset=UTF-8">
<script language=javascript src="jquery.js"></script>
<script language=javascript src="flyingTableHead.js"></script>
<script language="javascript">
$(document).ready(function(){
	$("table").flying_table_head();
});
</script>
<link href="flyingTableHead.css" rel="stylesheet" type="text/css" media="screen" />
<style>
tr{background:#fff}
.flying_table_head{background:#F0F7FF}
</style>
</head>
<body>
<div style="clear:both;ling-height:50px;">Other Web Information In Top</div>

<div style="float:left;margin:10px;">
<table border=5 cellspacing=5>
	<tr class='flying_table_head'>
		<th rowspan=2>ID</th>
		<th>Date</th>
		<th colspan=3>Num</th>
		<th rowspan=2>Addr</th>
		<th>Mobile</th>
	</tr>
	<tr class='flying_table_head'>
		<th>Date</th>
		<th>Order</th>
		<th>Goods</th>
		<th>User</th>
		<th>Mobile</th>
	</tr>
	<?php
	for($i=1;$i<=100;$i++){
		echo "
		<tr>
			<td>$i</td>
			<td>".date("Y-m-d",time()-(100-$i)*86400)."</td>
			<td>".rand(1,100)."</td>
			<td>".rand(100,1000)."</td>
			<td>".rand(1,100)."</td>
			<td> Room 302 Unit2 Building3 </td>
			<td>".rand(13600000000,19000000000)."</td>
		</tr>
		";
	}
	?>
</table>
</div>
<div style="float:left;margin:10px;">
<table bgcolor='#82C4F6' cellspacing=1>
	<tr class='flying_table_head'>
		<th>ID</th>
		<th>Date</th>
		<th>Order</th>
		<th>Goods</th>
		<th>User</th>
		<th>Addr</th>
		<th>Mobile</th>
	</tr>
	<?php
	for($i=1;$i<=50;$i++){
		echo "
		<tr>
			<td>$i</td>
			<td>".date("Y-m-d",time()-(100-$i)*86400)."</td>
			<td>".rand(1,100)."</td>
			<td>".rand(100,1000)."</td>
			<td>".rand(1,100)."</td>
			<td> Room 302 Unit2 Building3 </td>
			<td>".rand(13600000000,19000000000)."</td>
		</tr>
		";
	}
	?>
</table>
</div>
<div style="float:left;margin:10px;">
<table bgcolor='#82C4F6' cellspacing=1>
	<tr class='flying_table_head'>
		<th>ID</th>
		<th>Date</th>
		<th>Order</th>
		<th>Goods</th>
		<th>Addr</th>
		<th>Mobile</th>
	</tr>
	<?php
	for($i=1;$i<=20;$i++){
		echo "
		<tr>
			<td>$i</td>
			<td>".date("Y-m-d",time()-(100-$i)*86400)."</td>
			<td>".rand(1,100)."</td>
			<td>".rand(1,100)."</td>
			<td> Room 302 Unit2 Building3 </td>
			<td>".rand(13600000000,19000000000)."</td>
		</tr>
		";
	}
	?>
</table>
</div>
<div style="float:left;margin:10px;">
<table bgcolor='#82C4F6' cellspacing=0 border=1>
	<tr class='flying_table_head'>
		<th>ID</th>
		<th>Date</th>
		<th>Order</th>
		<th>Goods</th>
	</tr>
	<?php
	for($i=1;$i<=30;$i++){
		echo "
		<tr>
			<td>$i</td>
			<td>".date("Y-m-d",time()-(100-$i)*86400)."</td>
			<td>".rand(1,100)."</td>
			<td>".rand(100,1000)."</td>
		</tr>
		";
	}
	?>
</table>
<table bgcolor='#82C4F6' cellspacing=0 border=1 width=2000>
	<tr class='flying_table_head'>
		<th>ID</th>
		<th>Date</th>
		<th>Order</th>
		<th>Goods</th>
	</tr>
	<?php
	for($i=1;$i<=30;$i++){
		echo "
		<tr>
			<td>$i</td>
			<td>".date("Y-m-d",time()-(100-$i)*86400)."</td>
			<td>".rand(1,100)."</td>
			<td>".rand(100,1000)."</td>
		</tr>
		";
	}
	?>
</table>
</div>
<div style="clear:both;ling-height:50px;">Other Web Information In Bottom</div>
</body>
</html>
