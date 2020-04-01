var div = document.querySelector('div');
var span = document.querySelector('span');
var btn200 = document.querySelector('.btn200');
var btn400 = document.querySelector('.btn400');

/*
    obj 目标对象 target 目标位置
    核心算法：（目标值-现在的位置）/10  ——>作为每次移动的距离 （步长）
    停止条件：让当前的盒子位置等于目标位置就停止定时器
*/
function animate(obj, target, callback) {
    // 先清除以前的定时器，是保留当前的一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长取整
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器里
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }

    }, 30);
}
animate(div, 500); //自动
btn200.addEventListener('click', function () {
    animate(span, 200);
    span.style.backgroundColor = 'crimson';
})
btn400.addEventListener('click', function () {
    animate(span, 400, function () {
        span.style.backgroundColor = 'black';
    });
})