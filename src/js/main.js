// let openMainNabBtn = document.getElementById('open-main-nav-bar');
// let closeMainNabBtn = document.getElementById('close-main-nav-bar');
let mainMenuModal = document.getElementById('main-nav-bar');
let modal = document.getElementById('modal-bg');

// openMainNabBtn.addEventListener('click', addMainActive);
// closeMainNabBtn.addEventListener('click', removeMainActive);

function addMainActive() {
	mainMenuModal.classList.add('main-nav-bar--active');
	modal.classList.add('modal-bg--active');
}
function removeMainActive() {
	mainMenuModal.classList.remove('main-nav-bar--active');
	modal.classList.remove('modal-bg--active');
}

// Scroll to specific values
// scrollTo is the same
window.scroll({
	top: 2500,
	left: 0,
	behavior: 'smooth',
});

//

let accordions = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < accordions.length; i++) {
	let plus = accordions[i].querySelector('span');
	plus.addEventListener('click', function () {
		this.classList.toggle('plus-active');
		console.log(this);
		for (j = 0; j < accordions.length; j++) {
			if (accordions[j] != this.parentNode) {
				accordions[j]
					.querySelector('span')
					.classList.remove('plus-active');
				accordions[j].nextElementSibling.style.maxHeight = null;
			}
		}

		let panel = this.parentNode.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}
