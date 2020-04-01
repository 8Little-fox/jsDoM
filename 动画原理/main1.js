var slider = document.querySelector('.slider');
var con = document.querySelector('.con');
slider.addEventListener('mouseenter', function () {
    animate(con, 930, function () {
        slider.children[0].innerHTML = '->';

    });
})
// slider.addEventListener('mouseleave', function () {
//     animate(con, 0);
// })