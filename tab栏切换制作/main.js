var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
// for循环点击事件
for (var i = 0; i < lis.length; i++) {
    // 开始给5个li 设置索引号
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        // 干掉所有,其余的li 清除class 这个类
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        // 留下我自己
        this.className = 'current';
        // 显示内容模块
        var index = this.getAttribute('index');
        console.log(index);
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }
}