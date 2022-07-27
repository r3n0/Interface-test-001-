let openMainNabBtn = document.getElementById('open-main-nav-bar');
let closeMainNabBtn = document.getElementById('close-main-nav-bar');
let mainMenuModal = document.getElementById('main-nav-bar');
let modal = document.getElementById('modal-bg');

openMainNabBtn.addEventListener('click', addMainActive);
closeMainNabBtn.addEventListener('click', removeMainActive);

function addMainActive() {
	mainMenuModal.classList.add('main-nav-bar--active');
	modal.classList.add('modal-bg--active');
}
function removeMainActive() {
	mainMenuModal.classList.remove('main-nav-bar--active');
	modal.classList.remove('modal-bg--active');
}
