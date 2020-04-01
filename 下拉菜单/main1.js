var nav_list = document.querySelector('.nav_list');
var lis = nav_list.children;
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
        this.className = "";
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.className = "active";
        }
        lis[i].onmouseout = function () {
            this.className = "";
        }
    }
}