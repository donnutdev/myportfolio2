import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

let navLinks = document.getElementById("mobile-menu")
let showBtn = document.getElementById("show")
let hideBtn = document.getElementById("hide")

const swiper = new Swiper('.swiper', {
				autoplay: {
					delay: 5000,
					disableOnInteraction: true,
				},
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})

function showMenu(){
  navLinks.classList.remove('hidden');
  showBtn.classList.add('hidden');
  hideBtn.classList.remove('hidden');
}

function hideMenu(){
  navLinks.classList.add('hidden');
  showBtn.classList.remove('hidden');
  hideBtn.classList.add('hidden');
}

