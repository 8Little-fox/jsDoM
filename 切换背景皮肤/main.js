var imgs = document.querySelector('.box').querySelectorAll('img');
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        // console.log(this.src);
        document.body.style.backgroundImage = 'url(' + this.src + ')';
    }
}