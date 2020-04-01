var nav = document.querySelector('.nav');
var lis = nav.children;
var p = document.querySelector('p');
for (var i = 0; i < lis.length; i++) {

    lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
        this.children[1].className = 'active';

    }

    lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
        this.children[1].className = '';
    }
}