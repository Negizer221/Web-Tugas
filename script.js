const spinnerWrapperEl = document.querySelector('.spinner-animation');

window.addEventListener('load', () =>{
    spinnerWrapperEl.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
});