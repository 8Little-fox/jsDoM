var eye = document.getElementById('eye');
var pwd = document.getElementById('pwd');
var DL = document.getElementById('dl');
// 注册事件
var flag = 0;
eye.onclick = function () {
    //第一次点击后flag 变换
    if (flag == 0) {
        pwd.type = 'text';
        eye.src = 'images/睁眼.png';
        flag = 1; //赋值
    } else {
        pwd.type = 'password';
        eye.src = 'images/闭眼.png';
        flag = 0;
    }
}