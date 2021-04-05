// HSLIDER - Horizontal slider.
//By: Henrique, L.;

//MAIN CODE

function prepSlides() {

	let slideSingle = document.querySelectorAll('.slide-single');
	const slide = document.querySelector('.box-slides');
	const numOfSlides = slideSingle.length;
	const slideSpeed = 600; //default: 400
	const navBullets = document.querySelector('.box-nav-spans');
	const arrowLeft = document.getElementById('navprev');
	const arrowRight = document.getElementById('navnext');
	const sliderWidth = `calc(100% * ${numOfSlides})`;

	//Preset height, width, nav bullets and hidden slides
	const prepWidthBulletsHide = () => {
		slide.parentElement.style.overflowX = 'hidden';
		slide.style.width = sliderWidth;
		slideSingle.forEach(() => navBullets.innerHTML += '<span></span>');
		slide.style.animationFillMode = "both";
	}
	prepWidthBulletsHide();

	const slidesCounter = slideSingle.length - 1;
	const span = navBullets.querySelectorAll("span");
	const allspan = span.length - 1;
	let i = 0;
	let b = 0;

	//Selected bullet - start
	span[i].classList.add('bordnav');

	//Navigation Preventing double clicking glitch
	const delay = slideSpeed * 1.1;
	let clicked = true;

	arrowLeft.addEventListener('click', () => {
		if (clicked) {
			scrollToRight();
			clicked = false;
			setTimeout(() => {
				clicked = true;
			}, delay);
		} else return;
	});

	arrowRight.addEventListener('click', () => {
		if (clicked) {
			scrollToLeft();
			clicked = false;
			setTimeout(() => {
				clicked = true;
			}, delay);
		} else return;
	});

	//Mobile swipe
	const mobileSwipe = () => {
		let x1;
		let x2;

		const defineX1 = (e) => {
			if (navigator.maxTouchPoints != 0) {
				x1 = e.changedTouches[0].pageX;
			}
			else { x1 = e.pageX; }
		}

		const defineX2 = (e) => {
			if (navigator.maxTouchPoints != 0) {
				x2 = e.changedTouches[0].pageX;
			}
			else { x2 = e.pageX; }
		}

		const initSlideSwipe = () => {
			if (x1 < x2 && (x2 - x1) >= 30) {
				if (clicked) {
					scrollToRight();
					clicked = false;
					setTimeout(() => {
						clicked = true;
					}, delay);
				} else return;

			} else if (x1 > x2 && (x1 - x2 >= 30)) {
				if (clicked) {
					scrollToLeft();
					clicked = false;
					setTimeout(() => {
						clicked = true;
					}, delay);
				}
			} else return;
		}

		slide.addEventListener('mousedown', e => defineX1(e));

		slide.addEventListener('touchstart', e => defineX1(e));

		slide.addEventListener('mouseup', e => {
			defineX2(e);
			initSlideSwipe();
		})

		slide.addEventListener('touchend', e => {
			defineX2(e);
			initSlideSwipe();
		})
	}

	mobileSwipe() //Initialization

	//Main functions
	const scrollToLeft = () => {
		if (i < slidesCounter) {
			slide.animate([{ left: `-${i * 100}%` }, { left: `-${(i + 1) * 100}%` }], slideSpeed);
			slide.style.left = `-${(i + 1) * 100}%`;
			span[i].classList.remove('bordnav');
			i++;

			//Bullets style
			if (b < allspan) {
				b++;
				span[i].classList.add('bordnav');
			}
		}
	}//End clickslide_R


	const scrollToRight = () => {
		if (i > 0) {
			slide.animate([{ left: `-${i * 100}%` }, { left: `-${(i - 1) * 100}%` }], slideSpeed);
			slide.style.left = `-${(i - 1) * 100}%`;
			span[i].classList.remove('bordnav');
			i--;

			//Bullets style
			if (b > 0) {
				b--;
				span[i].classList.add('bordnav');
			}
		}
	}//End clickslide_L

}//End - prepSlides


//---------------SLIDER 2 (optional)----------------------

function prepSlides2() {

	let slideSingle = document.querySelectorAll('.slide-single-2');
	const slide = document.querySelector('.box-slides-2');
	const numOfSlides = slideSingle.length;
	const slideSpeed = 400; //default: 400
	const navBullets = document.querySelector('.box-nav-spans-2');
	const arrowLeft = document.getElementById('navprev-2');
	const arrowRight = document.getElementById('navnext-2');
	const sliderWidth = 'calc(100% * ' + numOfSlides + ')';

	//Preset height, width, nav bullets and hidden slides
	const prepWidthBulletsHide = () => {
		slide.parentElement.style.overflowX = 'hidden';
		slide.style.width = sliderWidth;
		slideSingle.forEach(() => navBullets.innerHTML += '<span></span>');
		slide.style.animationFillMode = "both";
	}
	prepWidthBulletsHide();

	const slidesCounter = slideSingle.length - 1;
	const span = navBullets.querySelectorAll("span");
	const allspan = span.length - 1;
	let i = 0;
	let b = 0;

	//Selected bullet - start
	span[i].classList.add('bordnav-2');

	//Navigation Preventing double clicking glitch
	const delay = slideSpeed * 1.1;
	let clicked = true;

	arrowLeft.addEventListener('click', () => {
		if (clicked) {
			scrollToRight();
			clicked = false;
			setTimeout(() => {
				clicked = true;
			}, delay);
		} else return;
	});

	arrowRight.addEventListener('click', () => {
		if (clicked) {
			scrollToLeft();
			clicked = false;
			setTimeout(() => {
				clicked = true;
			}, delay);
		} else return;
	});

	//Mobile swipe
	const mobileSwipe = () => {
		let x1;
		let x2;

		const defineX1 = (e) => {
			if (navigator.maxTouchPoints != 0) {
				x1 = e.changedTouches[0].pageX;
			}
			else { x1 = e.pageX; }
		}

		const defineX2 = (e) => {
			if (navigator.maxTouchPoints != 0) {
				x2 = e.changedTouches[0].pageX;
			}
			else { x2 = e.pageX; }
		}

		const initSlideSwipe = () => {
			if (x1 < x2 && (x2 - x1) >= 30) {
				if (clicked) {
					scrollToRight();
					clicked = false;
					setTimeout(() => {
						clicked = true;
					}, delay);
				} else return;

			} else if (x1 > x2 && (x1 - x2 >= 30)) {
				if (clicked) {
					scrollToLeft();
					clicked = false;
					setTimeout(() => {
						clicked = true;
					}, delay);
				}
			} else return;
		}

		slide.addEventListener('mousedown', e => defineX1(e));

		slide.addEventListener('touchstart', e => defineX1(e));

		slide.addEventListener('mouseup', e => {
			defineX2(e);
			initSlideSwipe();
		})

		slide.addEventListener('touchend', e => {
			defineX2(e);
			initSlideSwipe();
		})
	}

	mobileSwipe() //Initialization

	//Main functions
	const scrollToLeft = () => {
		if (i < slidesCounter) {
			slide.animate([{ left: `-${i * 100}%` }, { left: `-${(i + 1) * 100}%` }], slideSpeed);
			slide.style.left = `-${(i + 1) * 100}%`;
			span[i].classList.remove('bordnav-2');
			i++;

			//Bullets style
			if (b < allspan) {
				b++;
				span[i].classList.add('bordnav-2');
			}
		}
	}//End clickslide_R


	const scrollToRight = () => {
		if (i > 0) {
			slide.animate([{ left: `-${i * 100}%` }, { left: `-${(i - 1) * 100}%` }], slideSpeed);
			slide.style.left = `-${(i - 1) * 100}%`;
			span[i].classList.remove('bordnav-2');
			i--;

			//Bullets style
			if (b > 0) {
				b--;
				span[i].classList.add('bordnav-2');
			}
		}
	}//End clickslide_L

}//End - prepSlides
prepSlides();

prepSlides2();