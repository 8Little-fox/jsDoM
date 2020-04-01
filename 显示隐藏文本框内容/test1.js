var trs = document.querySelector('tbody').querySelectorAll('tr');
for (var i = 0; i < trs.length; i++) {
    trs[i].onmouseenter = function () {
        this.className = 'bg';
    }
    trs[i].onmouseout = function () {
        this.className = '';
    }
}
var text = document.getElementById('phone');
text.onfocus = function () {
    if (this.value == '手机') {
        this.value = '';
    }
    this.style.color = '#333';
}
text.onblur = function () {
    if (this.value == '') {
        this.value = '手机';
    }
    this.style.color = '#999';
}