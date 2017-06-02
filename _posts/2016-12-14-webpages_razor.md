---
layout: post
title: ASP.NET Web Pages - 添加Razor代码
tag: asp
---
## {{ page.title }}
ASP.NET Web Pages用Razor标记C#和VB代码

### Razor标记

Razor是一种将服务器代码（C#或VB）嵌入ASP.NET web pages中的简单的标记语法。

###### Example
```
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Web Pages Demo</title>
</head>
<body>
    <h1>Hello Web Pages</h1>
    <p>The time is @DateTime.Now</p>
</body>
</html>
```
上面的页面包含了寻常的HTML标记和Razor标记。

### 关于C#的Razor语法

* C#代码块用**@{...}**封装
* 行内表达式（变量或函数）用**@**开始
* 代码语句结尾用**分号**
* 变量声明用关键字**var**
* 字符串用**引号**封装
* C#代码区分大小写
* C#文件的扩展名用**.cshtml**

###### C# Example
```
<!--Single statement block -->
@{ var myMessage = "Hello  World"; }

<!-- Inline expression or variable -->
<p>The value of myMessage is: @myMessage</p>

<!-- Multi-statement block -->
@{
var greeting = "Welcome to our site!";
var weekDay = DateTime.Now.DayOfWeek;
var greetingMessage = greeting + " Today is: " + weekDay;
}
<p>The greeting is: @greetingMessage</p>
```
### 关于VB的Razor语法

* VB代码块用**@Code ... End Code**封装
* 行内表达式用**@**开始
* 变量声明用关键字**Dim**
* 字符串用**引号**封装
* VB代码不区分大小写
* VB文件的扩展名是**.vbhtml**

###### VB Example
```
<!-- Single statement block -->
@Code dim myMessage = "Hello World" End Code

<!-- Inline expression or variable -->
<p>The value of myMessage is: @myMessage</p>

<!-- Multi-statement block -->
@Code
dim greeting = "Welcome to our site!"
dim weekDay = DateTime.Now.DayOfWeek
dim greetingMessage = greeting & " Today is: " & weekDay
End Code

<p>The greeting is: @greetingMessage</p>
```
### 更多关于C#和Visual Basic

如果你想学习更多关于Razor，C#和Visual Basic程序设计语言：

Go to the Razor section of this tutorial.
