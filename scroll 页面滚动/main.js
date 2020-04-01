var div = document.querySelector('div');
console.log(div.scrollHeight); //内容高度
console.log(div.clientHeight); //边框的实际高度
// scroll 当我们滚动条时就会触发事件
div.addEventListener('scroll', function () {
    console.log(div.scrollTop);

})