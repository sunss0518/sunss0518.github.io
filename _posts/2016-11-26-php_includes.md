---
layout: post
title: PHP 5 Include Files
---
## {{ page.title }}

include语句把指定文件里面所有存在的文本/代码/标记复制进文件里。

当你想在一个网站的多个页面包含相同的PHP、HTML或者文本时，包含文件是非常有用的。

### PHP的include语句和require语句

用include语句或者require语句可以在服务器执行之前把一个PHP文件的内容嵌入另一个PHP文件。

**include和require语句是相同的，除了在失败结果上不同：**
* require将会产生一个严重的错误（E_COMPILE_ERROR），并且停止脚本的运行
* include只产生一个警告（E_WARNING），脚本则继续运行

所以，如果你想继续执行去展示用户的输出（即使包含文件丢失了），就使用include语句。否则，在FrameWork、CMS或是一个复杂PHP应用编码的情况下，经常用require语句包含一个关键文件到执行流中。这将帮助避免你的应用的安全性和完整性受到伤害， 防止你的关键文件突然丢失。

包含文件节省了大量的工作。这意味着你可以为网站的所有网页创建一个标准的头部，脚部或者菜单文件。然后，当头部需要更新时，你可以只更新头部包含文件。

#### 语法

```
include 'filename';

or

require 'filename';
```
### PHP include Examples

#### Example 1

假设我们有一个叫做“footer.php”的标准脚部文件，如下：

```
<?php
echo "<p>Copyright &copy; 1999-" . date("Y") . "W3School.com</p>";
?>
```
包含一个脚部文件进一个页面，用include语句：

###### Example
```
<html>
<body>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>
<?php include 'footer.php';?>

</body>
</html>
```
#### Example 2

假设我们有一个叫“menu.php”的标准菜单文件：
```
<?php
echo '<a href="/default.asp">Home</a> -
<a href="/html/default.asp">HTML Tutorial</a> -
<a href="/css/default.asp">CSS Tutorial</a> -
<a href="/js/default.asp">JavaScript Tutorial</a> -
<a href="default.asp">PHP Tutorial</a>';
?>
```
网站的所有页面都应该用这个菜单文件。下面是使用例子（我们为了让菜单容易被修饰，添加一个<div>元素：

###### Example
```
<html>
<body>

<div class="menu">
<?php include 'menu.php';?>
</div>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>

</body>
</html>
```
#### Example 3
假设我们有一个叫做“vars.php”的文件，定义了一些变量：
```
<?php
$color='red';
$car='BMW';
?>
```
如果我们包含“vars.php”文件，里面的变量可以被调用文件使用：

###### Example
```
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php include 'vars.php';
echo "I have a $color $car.";
?>

</body>
</html>
```
### PHP include vs. require
require语句也被用来包含一个文件进PHP代码里。

然而，includehe和require有一个很大的不同点；当用include语句包含一个文件且PHP不能发现它时，脚本继续执行：

###### Example
```
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php include 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>
```
如果我们用require做相同的例子，echo语句将不会执行，因为require语句返回一个严重错误后脚本执行消失：

###### Example
```
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php require 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>
```
当文件对于应用是必需的时候，用require语句。

当文件对于应用不是必需的且没被发现仍然执行时，用include语句。

[Go back](/index.html)













