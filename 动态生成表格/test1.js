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
    },
    {
        "name": "小美",
        "subject": "JAVA",
        "score": 100
    }
];
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (var k in datas[i]) {
        var td = document.createElement('td');
        td.innerHTML = datas[i][k]; //添加数据
        tr.appendChild(td);
    }
    // 添加删除按钮
    var td = document.createElement('td');
    td.innerHTML = '<a href="javascript:;">删除</a>'
    tr.appendChild(td);
}

var del = document.querySelectorAll('a');
for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        tbody.removeChild(this.parentNode.parentNode);
    }
}