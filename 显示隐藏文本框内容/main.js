// 获取元素
var text = document.querySelector('input');

var pwd = document.querySelector('.ipt');
var message = document.querySelector('.message');

// 注册事件 获得焦点事件 onfocus
text.onfocus = function () {
    if (this.value == '手机') {
        this.value = '';
    }
    this.style.color = '#333';
    text.className = 'bor'; //点击边框切换颜色
}
// 注册事件 失去焦点事件 onblur
text.onblur = function () {
    if (this.value == '') {
        this.value = '手机';
    }
    this.style.color = '#999';
    text.className = ' ';
}
pwd.onblur = function () {
    if (this.value.length < 6 || this.value.length > 16) {
        message.className = 'message wrong';
        message.innerHTML = '您输入的位数不对要求6~16位';
    } else {
        message.className = 'message right';
        message.innerHTML = '您输入的正确';
    }
}

/* 
    表格 隔行变色
        1，获取tbody里面的所有行
        2，for 循环绑定注册事件
        3，鼠标经过事件 onmousemove
        4，鼠标离开事件  onmouseout
    */
var trs = document.querySelector('tbody').querySelectorAll('tr');
for (var i = 0; i < trs.length; i++) {
    trs[i].onmousemove = function () {
        this.className = 'bg';
    }
    trs[i].onmouseout = function () {
        this.className = '';
    }
}