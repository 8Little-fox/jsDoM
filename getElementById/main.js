var timer = document.getElementById('time');
console.log(timer);
console.log(typeof timer); // 对象类型
console.dir(timer);

// 返回元素对象集合,以伪数组形式存储
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    console.log(lis[1]);
}


// 根据类名获得某些元素集合
var boxs = document.getElementsByClassName('box');
console.log(boxs);

//querySelector  返回指定选择器的第一个元素对象  （里面加符号）
var box = document.querySelector('.box');
console.log(box);

var allbox = document.querySelectorAll('.box');
console.log(allbox);


/*
     特殊元素获取
     body
     html
*/
var body = document.body;
console.log(body);

var html = document.documentElement;
console.log(html);