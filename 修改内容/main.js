var bu1 = document.getElementById('page1');
var bu2 = document.getElementById('page2');
var img = document.querySelector('img');

bu1.onclick = function () {
    img.src = 'images/img1.jpg';
    img.title = '功夫熊猫';
}
bu2.onclick = function () {
    img.src = 'images/img2.png';
    img.title = '小老虎';
}