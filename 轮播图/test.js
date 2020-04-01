window.addEventListener('load', function () {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 鼠标经过/离开事件==
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(() => {
            arrow_r.click();
        }, 2000);

    })
    // 动态生成圆圈
    var ol = document.querySelector('ol');
    var ul = focus.querySelector('ul');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        console.log(li);
        ol.appendChild(li);
        li.setAttribute('index', i);
        // 圆圈设事件利用：排他思想
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }

            this.className = 'current';
            var index = this.getAttribute('index');
            console.log(index);
            // 图片和圆圈相对应
            num = index;
            circle = num;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    // 点击右侧按钮切换图片，伴随圆圈的滚动
    var num = 0;
    var circle = 0;
    var flag = true; //节流阀
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; //关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;

            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();

        }
    })
    // 点击左侧按钮切换图片，伴随圆圈的滚动
    var num = 0;
    var circle = 0;
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            // 三目运算
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();

        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(() => {
        arrow_r.click();
    }, 2000);
})