var text = document.querySelector('#phone');
text.onfocus = function () {
    if (this.value == '手机') {
        this.value = '';
    }
    this.style.color = '#333';
}
text.onblur = function () {
    if (this.value == '') {
        this.value = '手机';
    }
    this.style.color = '#999';
}

var pwd = document.querySelector('.ipt');
var message = document.querySelector('.message');

pwd.onblur = function () {
    if (this.value.length < 6 || this.value.length > 16) {
        message.className = 'message wrong';
        message.innerHTML = '您输入的位数不对要求6~16位';
    } else {
        message.className = 'message right';
        message.innerHTML = '您输入的正确';
    }
}

var trs = document.querySelector('table').querySelectorAll('tr');
for (var i = 0; i < trs.length; i++) {
    trs[i].onmousemove = function () {
        this.className = 'bg';
    }
    trs[i].onmouseout = function () {
        this.className = '';
    }
}