var thAll = document.getElementById('th'); //全选按钮
var tbs = document.getElementById('tb').getElementsByTagName('input');
thAll.onclick = function () {
    for (var i = 0; i < tbs.length; i++) {
        tbs[i].checked = this.checked;
    }
}
for (var i = 0; i < tbs.length; i++) {
    tbs[i].onclick = function () {
        // flag控制全选按钮是否选中
        var flag = true;
        for (var i = 0; i < tbs.length; i++) {
            if (!tbs[i].checked) {
                flag = false;
            }
        }
        thAll.checked = flag;
    }
}