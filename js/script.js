const wrapperMenu = document.querySelector('.wrapper-menu');
const mobileNav = document.querySelector('.mobile-nav');
const header =  document.querySelector('.header');
const welcomeBtn = document.querySelector('.welcome-section__scroll');
const expirieceSection = document.querySelector('.expirience')
const scrollBtn = document.querySelector('.scroll-top')
const screen = window.innerHeight

wrapperMenu.addEventListener('click',() => {
	wrapperMenu.classList.toggle('open'); 
	mobileNav.classList.toggle('visible');
})

window.addEventListener('scroll', function(e) {

	let scrollPosition = window.scrollY;

	if (scrollPosition > 30) {
		header.style.background = '#5097ff'
		header.style.padding = '5px 0'
	} else {
		header.style.background = 'transparent'
		header.style.padding = '14px 0'
	}
  
});

welcomeBtn.addEventListener('click',() => {
    window.scroll({
        top: expirieceSection.getBoundingClientRect().y - 48,
        left: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', function(e) {

	let scrollPosition = window.scrollY;

	if (scrollPosition > screen) {
		scrollBtn.style.display = 'block'
	} else {
		scrollBtn.style.display = 'none'
	}

});

scrollBtn.addEventListener('click',() => {
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
})
