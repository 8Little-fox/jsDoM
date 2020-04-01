var datas = [{
        "name": "孙琳琳",
        "subject": "javascript",
        "score": 100
    },
    {
        "name": "小明",
        "subject": "Android",
        "score": 100
    },
    {
        "name": "小美",
        "subject": "JAVA",
        "score": 100
    }
];
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++) {
    // 创建tr行
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    // 创建行里面的单元格 td数量取决于每个对象里面的属性个数 data[i]
    for (var k in datas[i]) {
        var td = document.createElement('td');
        td.innerHTML = datas[i][k];
        tr.appendChild(td);

    }
    // 创建又删除2 个字的单元格
    var td = document.createElement('td');
    td.innerHTML = '<a href="javascript:;">删除</a>';
    tr.appendChild(td);
}
// 删除操作
var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        tbody.removeChild(this.parentNode.parentNode);
    }
}