window.addEventListener('load', function () {
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
    box.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var boxX = x - boxs.osffsetWidth / 2;
        var boxY = y - boxs.offssetHeight / 2;
        // 遮挡层最大移动距离
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
        // 大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层的最大移动距离
        var bigImg = document.querySelector('#bigimg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = boxX * bigMax / boxMax;
        var bigY = boxY * bigMax / boxMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})