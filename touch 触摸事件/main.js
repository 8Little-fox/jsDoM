var div = document.querySelector('div');
var startX = 0;
var startY = 0;
var x = 0;
var y = 0;
div.addEventListener("touchstart", function (e) {
    startX = e.targetTouches[0].pageX;
    startY = e.targetTouches[0].pageY;
    x = this.offsetLeft;
    y = this.offsetTop;

})
div.addEventListener('touchmove', function (e) {
    var moveX = e.targetTouches[0].pageX - startX;
    var moveY = e.targetTouches[0].pageY - startY;
    this.style.left = x + moveX + 'px';
    this.style.top = y + moveY + 'px';
    e.preventDefault();
});