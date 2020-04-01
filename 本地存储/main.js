var input = document.querySelector('#text');
var set = document.querySelector('.set');
var get = document.querySelector('.get');
var del = document.querySelector('.del');
var delAll = document.querySelector('.delAll');

set.addEventListener('click', function () {
    var txt = input.value; //获得文本框内容
    sessionStorage.setItem('uname', txt);
    sessionStorage.setItem('age', txt);
})
get.addEventListener('click', function () {
    console.log(sessionStorage.getItem('uname'));
})
del.addEventListener('click', function () {
    sessionStorage.removeItem('uname');
})
delAll.addEventListener('click', function () {
    sessionStorage.clear();
})