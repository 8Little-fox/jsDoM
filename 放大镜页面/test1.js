var boxs = document.querySelector('#boxs');
var box = document.querySelector('#box');
var big = document.querySelector('#big');
boxs.addEventListener('mouseover', function () {
    box.style.display = 'block';
    big.style.display = 'block';
})
boxs.addEventListener('mouseout', function () {
    box.style.display = 'none';
    big.style.display = 'none';
})
// 鼠标移动时，让黄色盒子跟着鼠标走
boxs.addEventListener('mousemove', function (e) {
    // 计算鼠标在盒子内的坐标
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // 减去盒子的高度一般 就是黄色盒子最终的left top 值
    var boxX = x - box.offsetWidth / 2;
    var boxY = y - box.offsetHeight / 2;
    // 盒子最大移动距离
    var boxMax = boxs.offsetWidth - box.offsetWidth;
    if (boxX <= 0) {
        boxX = 0;
    } else if (boxX >= boxMax) {
        boxX = boxMax;
    }
    if (boxY <= 0) {
        boxY = 0;
    } else if (boxY >= boxMax) {
        boxY = boxMax;
    }
    box.style.left = boxX + 'px';
    box.style.top = boxY + 'px';

    var bigImg = document.querySelector('#bigimg');
    var bigMax = bigImg.offsetWidth - big.offsetWidth;
    var bigX = boxX * bigMax / boxMax;
    var bigY = boxY * bigMax / boxMax;
    bigImg.style.left = -bigX + 'px';
    bigImg.style.top = -bigY + 'px';

})