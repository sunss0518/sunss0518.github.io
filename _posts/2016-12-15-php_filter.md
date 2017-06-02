---
layout: post
title: PHP Filters
tag: php
---
## {{ page.title }}
Validating data = 确定数据是否处于适当的形式
<br /><br />
Sanitizing data = 移除数据中所有非法的字符

### The PHP Filter扩展

PHP filters用于验证并净化（sanitize）外部输入

PHP filter扩展有许多用于检查用户输入所需的函数，它使得数据验证更简单更快速

filter_list()函数用来列举PHP filter提供的扩展：

###### Example
```
<table>
    <tr>
    	<td>Filter Name</td>
    	<td>Filter ID</td>
    </tr>
    <?php
    foreach (filter_list() as $id => $filter) {
        echo '<tr><td>' . $filter . '</td><td>' . 
        filter_id($filter) . '</td></tr>';
    }
    ?>
</table>
```
### 为什么用Filters？

许多web应用接收外部输入。外部输入/数据可以是：

* 用户输入的表单
* Cookies
* Web服务器数据
* 服务器变量
* 数据库查询结果

<div class="text">
	<strong>你应该经常验证数据！</strong>
	<p>提交的无效数据可能导致安全问题，造成网页的损坏！</p>
	<p>用filter你可以确信应用得到正确的输入！</p>
</div>

### PHP filter_var()函数

filter_var()函数可以验证且净化数据。

filter_var()函数指定一个过滤器过滤单个变量。它需要两个数据：

* 你想要检查的变量
* 用来检查的类型

###### Example
```
<?php
$str = "<h1>Hello World!</h1>";
$newstr = filter_var($str, FILTER_SANITIZE_STRING);
echo $newstr;
?>
```
### 验证整数

下面的例子用filter_var()函数检查变量$int是否是一个整数。如果$int是一个整数，则输出：“Integer is valid”。如果$int不是一个整数，则输出：“Integer is not valid”：

###### Example
```
<?php
$int = 100;

if (!filter_var($int, FILTER_VALIDATE_INT) === false) {
    
    echo("Integer is valid");
} else {
    echo("Integer is not valid");
}
?>
```
#### 小建议：filter_var()关于0的问题

在上面的例子中，如果将$int设置为0，则返回“Integer is not valid”。用下面的代码解决这个问题：

###### Example
```
<?php
$int = 0;

if (filter_var($int, FILTER_VALIDATE_INT) === 0 || 
!filter_var($int, FILTER_VALIDATE_INT) === false) {
    echo("Integer is valid");
} else {
    echo("Integer is not valid");
}
?>
```
### 验证IP地址

下面的例子用filter_var()函数检查变量$ip是否是一个有效的IP地址：

###### Example
```
<?php
$ip = "127.0.0.1";

if (!filter_var($ip, FILTER_VALIDATE_IP) === false) {
    echo("$ip is a valid IP address");
} else {
    echo("$ip is not a valid IP address");
}
?>
```
### 净化和验证Email地址：

下面的例子用filterI_var()函数首先移除变量$email中所有非法的字符，然后检查它是否为一个有效的email地址：

###### Example
```
<?php
$email = "join.doe@example.com";

// Remove all illegal characters from email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validate e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    echo("$email is a valid email address");
} else {
    echo("$email is not a valid email address");
}
?>
```
### 净化和验证URL

下面的例子用filter_var()函数首先移除URL中所有非法的字符，然后检查$url是否是一个有效的字符：

###### Example
```
<?php
$url = "http://www.w3school.com";

// Remove all illegal characters from a url
$url = filter_var($url, FILTER_SANITIZE_URL);

// Validate url
if (!filter_var($url, FILTER_VALIDATE_URL) === false) {
    echo("$url is a valid URL");
} else {
    echo("$url is not a valid URL");
}
?>
```

<hr>

## PHP Filters Advanced

### 验证范围内的整数

下面的例子用filter_var()函数检查一个变量是否是一个整数类型且在1~200范围内：

###### Example
```
<?php
$int = 122;
$min = 1;
$max = 200;

if (filter_var($int, FILTER_VALIDATE_INT, array("options" => 
array("min_range" => $min, "max_range" => $max))) === false) {
	echo("Variable value is not within the legal range");
} else {
	echo("Variable value is within the legal range");
}
?>
```
### 验证IPv6地址

下面的例子用filter_var()函数检查变量$ip是否是一个有效的IPv6地址：

###### Example
```
<?php
$ip = "2001:0db8:85d3:1319:8a2e:0370:7334";

if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) === false) {
	echo("$ip is a valid IPv6 address");
} else {
	echo("$ip is not a valid IPv6 adress");
}
?>
```
### 验证URL--必需包含查询字符串（querystring）

下面的例子用filter_var()函数检查变量$url是一个用查询字符串的URL：

###### Example
```
<?php
$url = "http://www.w3schools.com";

if (!filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED) 
=== false) {
	echo("$url is a valid URL");
} else {
	echo("$url is not a valid URL");
}
?>
```
###### 移除ASCII大于127的值的字符

下面的例子用filter_var()函数净化字符串。它将移除所有HTML标签和所有ASCII大于127的值的字符：

###### Example
```
<?php
$str = "<h1>Hello WorldÆØÅ!</h1>";

$newstr = filter_var($str, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
echo $newstr;
?>
```