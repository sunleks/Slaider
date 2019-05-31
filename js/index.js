var img = document.querySelectorAll('img');
var next = document.querySelector('.next-slaid');
var prew = document.querySelector('.prew-slaid');
var i = 0;


next.onclick = function () {
		img[i].classList.remove('img-show');
		i++;
		if (i > img.length - 1) {
			i = 0;
		};
		img[i].classList.add('img-show');
};

prew.onclick = function () {
		img[i].classList.remove('img-show');
		i--;
		if (i < 0) {
			i = img.length - 1;
		};
		img[i].classList.add('img-show');
};