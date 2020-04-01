// 获取元素
var btn = document.querySelector('button');
var div = document.querySelector('div');

// 注册事件
btn.onclick = function () {
    div.innerHTML = getData();
}

function getData() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var day = date.getDay();
    return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day];
}
//不添加事件直接显示
var p = document.querySelector('p');
p.innerHTML = getData();

/*
    innerText   不识别html,不保留空格和换行
    innerHTML   识别html,保留空格和换行
*/