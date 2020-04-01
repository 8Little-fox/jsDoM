var search = document.querySelector('input');
document.addEventListener('keyup', function (e) {
    // console.log(e.keyCode);
    if (e.keyCode == 83) {
        search.focus();
    }
})