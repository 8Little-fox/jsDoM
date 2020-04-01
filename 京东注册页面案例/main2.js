var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
    var index = i * 44;
    lis[i].style.backgroundPosition = '0 -' + index + 'px';
}