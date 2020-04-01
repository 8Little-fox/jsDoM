var btn = document.querySelector('button');
var time = 3;
btn.addEventListener('click', function () {
    btn.disabled = true;
    var timer = setInterval(function () {
        if (time == 0) {
            clearInterval(timer);
            btn.innerHTML = '发送';
            btn.disabled = false;
            time = 3;
        } else {
            btn.innerHTML = '还剩下' + time + '秒';
            time--;
        }
    }, 1000);

})