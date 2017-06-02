---
layout: post
title: PHP MySQL Database
tag: php
---
## {{ page.title }}
你可能需要用PHP连接和操作数据库。
<br /><br />
PHP最流行的数据库是MySQL。

### 什么是MySQL？

* MySQL是可以用于web的数据库系统
* MySQL是一个运行在服务器上的数据库系统
* MySQL可以处理大小应用
* MySQL非常快，可靠，简单。
* MySQL用标准的SQL
* MySQL是在一个数字平台上编译的。
* MySQL是免费下载和使用的
* MySQL是Oracle公司开发，发布和支持的。

MySQL中的数据被存储在表格中。表格中收集相关的数据在一起，它由行和列构成。

对于存储分类地消息，数据库是非常有用的。一个公司的数据库中可能包含以下表格：

* Employees
* Products
* Customers
* Orders

### PHP + MySQL数据库系统

* PHP可以和MySQL跨平台结合（你可以在windows开发，在unix平台服务）

### 数据库查询

查询是一个问题或是一个请求。

我们可以从数据库里查询指定的信息并返回一个记录集。

```
SELECT LastName FROM Employees
```
上面的查询选择“Employees”表中“LastName”列的所有数据。

### 下载MySQL数据库

如果你的PHP服务器没有MySQL数据库，你可以免费下载它：[http://www.mysql.com](http://www.mysql.com)

<hr>

## PHP连接到MySQL

PHP 5及以后的版本用MySQL数据库工作可以使用：

* MySQLi扩展("i"代表改进版)
* PDO (PHP Data Objects)

之前的版本用MySQL扩展。然而，这个扩展在2012年被不赞成使用。

### 我应该使用MySQLi还是PDO？

如果你需要一个简短的回答，答案将是“随你便”。

两者都有各自的优点：

PDO工作在12种不同的数据库系统，MySQLi则只工作在MySQL数据库。

所以，如果你不得不让你的项目工作在另一个数据库上，PDO可以使过程简单。你只需要改变连接字符串和一点点查询。用MySQLi则需要重写全部代码--包括查询。

两者都是面向对象的（object-oriented），但MySQLi还提供程序API。

两者都支持预准备语句（Prepared Statement）。预准备语句保护SQL注入对于web应用安全非常重要。

### MySQL例子用的MySQLi以及PDO语法

在下面的章节中，我们演示三种工作方式：

* MySQLi(object-oriented)
* MySQLi(procedural)
* PDO

### MySQLi安装

对于Linux和Windows：在大多数情况下，当php5 mysql包安装时MySQLi扩展是自动安装的。

安装细节，请转到：
[这里](http://php.net/manual/en/mysqli.installation.php)

### PDO安装

安装细节，请转到：
[这里](http://php.net/manual/en/pdo.installation.php)

### 连接MySQL

我们获取MySQL数据库中的数据之前，需要先与服务器连接在一起：

###### Example(MySQLi Object-Oriented)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connectI_error);
}
echo "Connected successfully";
?>
```
<div class="text">
	<strong>PHP是一个令人惊奇和流行的语言</strong>
	<p>注意上面关于面向对象的例子：$connect_error直到PHP 5.2.9 和 5.3.0都不能用。如果你需要确保PHP 5.2.9和5.3.0及之前版本能够兼容，用下面的代码替代：</p>
	<p>// Check connection</p>
	<p>if (mysqli_connection_error()) {
	    die("Database connection failed: " . mysqli_connect_error());
	}</p>
</div>

###### Example(MySQLi Procedural)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
```
###### Example(PDO) 
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";{

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB",
    $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}
?>
```
<div class="text">
	注意上面的PDO例子，我们指定了一个数据库（myDB）。PDO请求连接到一个有效的数据库。如果指定数据库不存在，抛出异常。
</div>
**小建议：**PDO有一个好处，它有一个异常类去处理在数据库查询中可能出现的所有问题。如果try{}代码块抛出异常，则脚本停止运行，直接执行接下来的第一个catch{}代码块。

### 关闭连接

脚本到达末尾时连接将自动关闭。关闭连接之前，用以下代码：

###### Example(MySQLi Object-Oriented)
```
$conn->close();
```

###### Example(MySQLi Procedural)
```
mysqli_close($conn);
```

###### Example(PDO)
```
$conn = null;
```

<hr>

## PHP 创建一个MySQL数据库

一个数据库由一个或多个表格构成。

你需要特殊的CREATE创建和删除一个数据库的特权。

### 用MySQLi和PDO创建一个数据库

用CREATE DATABASE语句在MySQL中创建一个数据库。

下面的例子创建一个叫做“myDB”的数据库：

###### Example(MySQLi Object-oriented)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) == TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
```
<div class="text">
	<p><strong>注意：</strong>当你创建一个新的数据库时，你必须只指定mysqli object(servername, username and password)的前三个参数。</p>
	<p><strong>小建议：</strong>如果你不得不用一个指定的端口，则需为数据库名字参数添加一个空的字符串，像这样：new mysqli("localhost", "username", "password", "", port)</p>
</div>

###### Example(MySQLi Procedural)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Create connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE myDB";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
```
**注意：**下面的PDO例子创建一个叫做“myDBPDO”的数据库：

###### Example(PDO)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
    // set the PDO error mode to exception;
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE myDBPDO";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Database created successfully<br>";
} catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```
**小建议：**上面的catch代码块，我们可以输出SQL语句、生成错误消息。

<hr>

## PHP 创建MySQL表格

一个数据库表格有唯一的名字，它由列和行构成。

### 用MySQLi和PDO创建一个MySQL表格

CREATE TABLE语句用于在MySQL中创建一个表格。

我们将创建一个叫做“MyGuests”的表格，它有五列：“id”， “firstname”， “lastname”， “email”， “reg_date”：

<div class="text">
	CREATE TABLE MyGuests (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(30) NOT NULL,
	lastname VARCHAR(30) NOT NULL,
	email VARCHAR(50),
	reg_date TIMESTAMP
	)
</div>
<p><strong>上面的表格需要注意：</strong></p>
指定的数据类型是列数据可以保存的数据类型。

数据类型之后，你可以为每列指定其它可选的属性：

* NOT NULL - 对于该列，每行必需包含一个值，不允许空值
* DEFAULT value - 当没有其它值被传递时，设置一个默认值添加给它
* UNSIGNED - 用于数字类型，将存储的数据限制为整数和零
* AUTO INCREMENT - 每添加一个新记录，MySQL自动给字段的值加1
* PRIMARY KEY - Used to uniquely identify the rows in a table. The column with PRIMARY KEY setting is often an ID number, and is often used with AUTO_INCREMENT

每个表格应该有一个主键列（本案例是“id”列）。对于表格中每个记录来说，它的值是唯一的。

下面的例子展示怎样创建表格：

###### Example(MySQLi Object-oriented)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE MyGuest (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
```
###### Example(MySQLi Procedural)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTOINCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)";

if (mysqli_query($conn, $sql)) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
```
###### Example(PDO)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // sql to create table
    $sql = "CREATE TABLE MyGuests (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP
    )";

    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Table MyGuests created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
```

<hr>

## PHP 向MySQL中插入数据

### 用MySQLi和PDO向MySQL中插入数据

创建数据库和表格后，我们可以开始为它们添加数据。

以下是一些语法规则：

* SQL查询必需加引号
* SQL查询中的字符串值必需加引号
* 数值不需加引号
* 空值不需加引号

INSERT INTO语句用来向表格中添加新的记录：

```
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)
```
在上一个章节，我们创建了一个叫做“MyGuests”的空表格，它包含5列：“id”， “firstname”， “lastname”， “email”和“reg_date”。现在，让我们把这个表格填满数据。
<div class="text">
	<strong>注意：</strong>如果一个列是AUTO_INCREMENT（像“id”列）或TIMESTAMP（像“reg_date”列），在SQL查询中它不需要指定；MySQL将自动添加它的值。
</div>

###### Example(MySQLi Object-oriented)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

#conn->close();
?>
```
###### Example(MySQLi Procedural)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
```
###### Example(PDO)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO MyGuests (firstname, lastname, email)
    VALUES ('John', 'Doe', 'john@example.com')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
```

<hr>

## PHP Get ID of Last Inserted Record

### Get ID of The Last Inserted Record

如果我们用AUTO_INCREMENT字段在一个表格上执行一个INSERT或UPDATE，我们可以立即得到最后插入/更新的记录的ID。

表格“MyGuests”中，“id”列是AUTO_INCREMENT字段：

```
CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)
```
下面的例子和上章节的例子差不多，只不过增加了一行恢复最后插入记录的ID的代码：

###### Example
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
```
###### Example(MySQLi Procedural)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($conn, $sql)) {
    $last_id = mysqli_insert_id($conn);
    echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
```
###### Example(PDO)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO MyGuests (firstname, lastname, email)
    VALUES ('John', 'Doe', 'john@example.com')";
    // use exec() because no results are returned
    $conn->exec($sql);
    $last_id = $conn->lastInsertId();
    echo "New record created successfully. Last inserted ID is: " . $last_id;
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
```

<hr>

## PHP Insert Multiple Records Into MySQL

### Insert Multiple Records Into MySQL Using MySQLi and PDO

多行SQL语句必需用mysqli_multi_query()函数执行。

下面的例子向表格“MyGuests”中增加三行新的记录：

###### Example
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firsrname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
```
<div class="text">
	注意SQL语句必需用分号分割开。
</div>

###### Example(MySQLi Procedural)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

if (mysqli_multi_query($conn, $sql)) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
```
PDO方式有一点不同：

###### Example(PDO)
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_ERRMOED_EXCEPTION);

    // begin the transaction
    $conn->beginTransaction();
    // our SQL statements
    $conn->exec("INSERT INTO MyGuests (firstname, lastname, email)
    VALUES ('John', 'Doe', 'john@example.com')");
    $conn->exec("INSERT INTO MyGuests (firstname, lastname, email)
    VALUES ('Mary', 'Moe', 'mary@example.com')");
    $conn->exec("INSERT INTO MyGuests (firstname, lastname, email)
    VALUES ('Julie', 'Dooley', 'julie@example.com')");

    // commit the transaction
    $conn->commit();
    echo "New records created successfully";
    }
catch(PDOException $e)
    {
    // roll back the transaction if something failed
    $conn->rollback();
    echo "Error: " . $e->getMessage();
    }

$conn = null;
?>
```