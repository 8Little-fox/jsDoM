var text = document.querySelector('textarea');
var btn = document.querySelector('button');
var ul = document.querySelector('ul');
// 添加
btn.onclick = function () {
    if (text.value == '') {
        alert("您没有输入内容");
        return false;
    } else {
        var lis = document.createElement('li');
        lis.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
        // ul.appendChild(lis);    添加元素在后面 
        ul.insertBefore(lis, ul.children[0]); // 添加元素在前面
        var del = document.querySelectorAll('a');
        for (var i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                // node.removeChild(child) 删除的是 li 当前的a 所在的li this.parentNode;
                ul.removeChild(this.parentNode);
            }
        }
    }
}