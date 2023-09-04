const video = document.querySelector('video');
const play = document.querySelector('.play');
const back = document.querySelector('.back');
const skip = document.querySelector('.skip');
const reset = document.querySelector('.reset');
const input = document.querySelector('input');


play.addEventListener('click', () => {
	video.play();
	play.classList.add('hide');
});

video.addEventListener('click', () => {
	if (video.paused) {
		play.classList.add('hide');
		video.play();
	} else {
		video.pause();
		play.classList.remove('hide');
	}
})

video.addEventListener('timeupdate', event => {
	const progress = (event.target.currentTime / event.target.duration) * 100;
	input.value = progress;
})

back.addEventListener('click', () => {
	video.currentTime -= 10;
})

skip.addEventListener('click', () => {
	video.currentTime += 10;
})

reset.addEventListener('click', () => {
	video.currentTime = 0;
	video.pause();
})

