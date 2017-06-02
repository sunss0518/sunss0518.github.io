---
layout: post
title: Object3D
tag: threejs
---
# Object3D
Object3D是three.js中大多数对象的基类，并且提供了一组用于操作3D空间中对象的属性和方法。
<br /><br />
注意，它可以通过**.add**方法将对象添加为子对象进行对象分组，但是最好使用**Group**

## 构造函数

#### Object3D()

此构造函数没有参数。

## Properties

#### .castShadow

对象是否渲染到阴影贴图中。默认值为**false**。

#### .children

数组和对象的子元素。有关手动对象分组的信息请参考**Group**。

#### .frustumCulled

设置此项时，如果对象在渲染之前位于相机的平截头体中，则它将检查每一帧。否则，每一帧都会渲染对象，即使它不可见。默认值为**true**。

#### .id

只读————此对象实例的唯一编号。

#### .isObject

用于检查此类或派生类是否为Object3D。默认值为**true**。

你不用改变它，因为它用于内部优化。

#### .layers

对象的层成员。仅当对象与正在使用的摄像机至少有一个共同图层时，该对象才可见。

#### .matrix

局部变换矩阵（The local transform matrix）。

[返回首页](/index.html)