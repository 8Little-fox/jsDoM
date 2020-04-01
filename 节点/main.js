/*

    ul.appendChild(li); 追加在后面
    ul.insertBefore(lis, ul.children[0]);    前面
    ul.removeChild(ul.children[0])    删除第一个
    ul.cloneChild(true)  全拷贝，默认为flase 只拷贝节点不拷贝内容
*/
var ol = document.querySelectorAll('ol');
console.log(ol.firstChild);
// 创建节点
var li = document.createElement('li');
// 添加节点 node父级，child 子级
var ul = document.querySelector('ul');
ul.appendChild(li);