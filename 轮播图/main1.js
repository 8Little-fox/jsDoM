var items = document.querySelector('.item');
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var index = 0; //表示第几张图片在展示

var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
}
var goIndex = function () {
    clearActive();
    console.log(index);

    items[index].className = 'item active';
}
var btnRight = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}
btnRight.addEventListener('click', function () {
    btnRight();
})