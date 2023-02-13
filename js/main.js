// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//Маска для телефона

window.addEventListener("DOMContentLoaded", function() {
	[].forEach.call( document.querySelectorAll('.form__input'), function(input) {
	var keyCode;
	function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___ ____",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
							return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
			i = new_value.indexOf("_");
			if (i != -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
							return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5)  this.value = ""
	}

	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)

});

});


// Modal window---------------------


const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const close = document.querySelector('.button__icon');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
			
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		  modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	} else if (e.target == close) {
		modalOverlay.classList.remove('modal-overlay--visible');
		  modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

// Бургер меню
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;

burger?.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	burger?.classList.toggle('burger--active');
	nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop-scroll');
		burger?.classList.remove('burger--active');
		nav?.classList.remove('nav--visible');
	});
});

// Активный класс при скролле

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const about =  document.querySelector('.about__content');

	
	// console.log(header.clientHeight);

	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		let headerHeight = header.offsetHeight / 2;
		let fullHeaderHeight = header.offsetHeight;
		let aboutHeight = about.offsetHeight / 2;
		let height = fullHeaderHeight + aboutHeight; 
	
		if (scrollTop >=headerHeight && scrollTop < (height*2)) {
			about.classList.add('animation');
						
			} else {
				about.classList.remove('animation');
			}
		});
});

// добавление анимированной галочки

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	const about = document.querySelector('.about__content');
	
	
	const work = document.querySelector('.work');
	const services = document.querySelector('.services');

	let scrollTop1 = window.scrollY;
	let headerHeight1 = header.offsetHeight;
	let aboutHeight1 = about.offsetHeight;
	let workHeight =  work.offsetHeight;
	let servicesHeight = services.offsetHeight;

	// console.log('headerHeight1 ' + headerHeight1);
	// console.log('servicesHeight ' + servicesHeight);

	let height =  (headerHeight1 + aboutHeight1);

	// console.log('scrollTop1 ' + scrollTop1);
	// 	console.log('Height ' + height);

		
	const item = document.querySelectorAll('li.item');
		// console.log (item);

		if (scrollTop1 >=height && scrollTop1 < (height + servicesHeight + workHeight)) {
			for (let i=0; i<item.length; i++){
				item[i].style.opacity = 1;
			}
			
			} else {
				for (let i=0; i<item.length; i++){
				item[i].style.opacity = 0;
				}
			}
		
	});

	const item = document.querySelectorAll('li.item');
		let data =  `<span class="wrap wrapper--check">
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" 
				 stroke="red"  stroke-width="3" stroke-dasharray="100">
			<path id="check" d="M 12,22 L 22,31 L 36,13" 
						stroke-dashoffset="0">
				<animate attributeName="stroke-dashoffset" 
								 from="100" to="0" repeatCount="indefinite" dur="3s"></animate>
			</path>
		</svg>
		</span>`;
		// console.log(data);

		for (let i=0; i<item.length; ++i){
		item[i].insertAdjacentHTML('afterbegin', data);

		// console.log(item[i]);
		}
	
		//Отправка формы на почту

		

		
		