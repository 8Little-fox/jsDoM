/*
    匀速动画 盒子是当前的位置+固定的值 10
    缓动动画  盒子当前位置+变化的值（目标值-现在的位置）/10
*/



var div = document.querySelector('div');
var span = document.querySelector('span');
var btn200 = document.querySelector('.btn200');
var btn400 = document.querySelector('.btn400');

// 动画函数封装  obj目标对象   target目标位置
function animate(obj, target) {
    clearInterval(obj.timer);

    // 给不同的元素指定不同的定时器
    obj.timer = setInterval(function () {
        // var step = Math.ceil((target - obj.offsetLeft) / 10); //缓动动画
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }

    }, 10);
}
animate(div, 500);
btn200.addEventListener('click', function () {
    animate(span, 200);
})
btn400.addEventListener('click', function () {
    animate(span, 400);
})