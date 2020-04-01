var slider = document.querySelector('.slider');
var banner = document.querySelector('.header');
var headerTop = header.offsetTop;
// 当侧滑栏固定定位之后应该变化的数值
var sliderTop = slider.offsetTop - headerTop;
//获得footer 主体元素
var footer = document.querySelector('.footer');
var goback = document.querySelector('.goback');
var footerTop = footer.offsetTop;
// 页面滚动事件
document.addEventListener('scroll', function () {
    // window.pageYOffset 页面被卷去的头部
    console.log(window.pageYOffset);

    if (window.pageYOffset >= headerTop) {
        slider.style.position = 'fixed';
        slider.style.Top = sliderTop + 'px';
    } else {
        slider.style.position = 'absolute';
        slider.style.Top = '300px';
    }
    // 当滚动到底部，显示goback 模块
    if (window.pageYOffset >= footerTop) {
        goback.style.display = 'block';
    } else {
        goback.style.display = 'none';
    }
})