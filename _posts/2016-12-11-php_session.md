---
layout: post
title: PHP 5 Sessions
tag: php
---
## {{ page.title }}
session是一种用于跨多页面存储信息的方式。
<br /><br />
它不像cookie，信息没有存储在用户的电脑上。

### PHP Session是什么？

当你打开一个应用，操作一番，然后关闭它。这大概就是一个Session。电脑知道你是谁。它知道你什么时候打开应用，什么时候关闭。但在互联网上有一个问题：web服务器不知道你是谁，你做了什么，因为HTTP地址不保持状态（maintain state）。

Session变量通过存储跨多页面用户信息解决了这个问题。默认情况下，session变量持续到用户关闭浏览器。

所以，session变量保存一个用户的信息，可以获取到一个应用的所有页面。

```
小建议：如果需要一个永久的（permanent）存储器,你可以在一个数据库中存储数据。
```
### 开始一个PHP Session

用session_start()函数开始一个session。

用PHP的全局变量$_SESSION设置session变量。

现在，让我们创建一个叫“demo_session1.php”的新页面。在页面里，我们开始一个新的PHP session并设置一些session变量：

###### Example
```
<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Set session variables
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.";
?>

</body>
</html>
```
```
注意：session_start()函数必需在文档的最前面。任何HTML标签的前面。
```
### 获取PHP Session变量的值

接下来，我们创建另一个叫“demo_session2.php”。从这个页面，我们可以获取到在第一个页面（demo_session1.php）设置的session信息。

注意，session变量不是单独传递到每个新页面。相反，它们从页面的开始部分（session_start()）恢复session。

同时注意，所有session变量的值都被存储在全局变量$_SESSION上：

###### Example
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Echo session variable that were set on previous page
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
?>

</body>
</html>
```
另一个显示所有session变量值的方式是：

###### Example
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
print_r($_SESSION);
?>

</body>
</html>
```
```
它是怎么工作的？它怎么知道那是我？

大多数session设置一个user-key在用户电脑上，比如：765487cf34ert8dede5a562e4f3a7e12。然后，当一个session在另一个页面被打开时，它扫描电脑上的user-key。如果有匹配，则获取session，否则，开始一个新的session。
```
### 修改PHP Session变量的值

要去改变一个session变量，只需重写它：

###### Example
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// to change a session variable, just overwrite it
$_SESSION["favcolor"] = "yellow";
print_r($SESSION);
?>

</body>
</html>
```
### 破坏一个PHP Session

移除所有全局session变量并破坏它，需要用session_unset()和session_destroy()：

###### Example
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// remove all session variables
session_unset();

// destroy the session
session_destroy();
?>

</body>
</html>
```