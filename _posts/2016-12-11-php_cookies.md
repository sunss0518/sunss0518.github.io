---
layout: post
title: PHP 5 Cookies
---
## {{ page.title }}

cookie通常被用来验证用户身份

### Cookie是什么？

cookie通常被用来验证用户身份。cookie是服务器上的一个小文件，嵌入 在用户的电脑上。每次同一台电脑上的浏览器请求一个页面时，也会发送cookie。用PHP，你可以创建和恢复cookie值。

### 用PHP创建Cookie

用setcookie()函数创建一个cookie

#### 语法

```
setcookie(name, value, expire, path, domain, secure, httponly);
``` 
只有name参数是必要的。其它参数都是可选的。

### PHP 创建/恢复一个Cookie

下面的例子创建一个名字为“user”，值为“John Doe”的cookie。cookie将在30天（86400 * 30）后失效。“/”意味着在全部的网站可以获取到cookie。

然后，我们恢复“user”的值（用全局变量$_COOKIE）。如果已经设置了cookie，我们可以用isset()函数去发现它。

###### Example
```
<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
```
```
注意：setcookie()函数必需出现在<html>标签之前。
```
**注意：**发送cookie时cookie的值自动编码，接收时自动解码（阻止URL编码，用setrawcookie()代替）。

### 修改Cookie值

修改一个cookie值，只需要用setcookie()函数设置（again）cookie：

###### Example
```
<?php
$cookie_name = "user";
$cookie_value = "Alex Porter";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
```
### 删除Cookie

删除cookie，用setcookie()函数设置一个过去的日期作为失效日期。

###### Example
```
<?php
// set the expiration date to one hour ago
setcookie("user", "", time() - 3600);
?>
<html>
<body>

<?php
echo "Cookie 'user' is deleted.";
?>

</body>
</html>
```
### 检查Cookie是否已经启用

下面的例子创建一个小脚本去检查cookie是否已经被启用。首先，尝试用setcookie()函数创建一个测试的cookie，然后给$_COOKIE变量计数：

###### Example
```
<?php
setcookie("test_cookie", "test", time() + 3600, "/");
?>
<html>
<body>

<?php
if(count($_COOKIE) > 0) {
    echo "Cookies are enabled.";
} else {
    echo "Cookies are disabled.";
}
?>

</body>
</html>
``` 