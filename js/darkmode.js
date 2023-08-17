// find the button that has a class name "js-btn-theme"
const toggleBtn = document.querySelector('.mini-button');
if (toggleBtn) { // if the button exist we add a click listener
  toggleBtn.addEventListener('click', function() {
    // toggle the class name on the body element
    document.querySelector('.mini-main').classList.toggle('exdark');
    document.querySelector('.mini-main').classList.toggle('exwhite');
  })
}