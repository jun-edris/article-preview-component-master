const openBtn = document.querySelector(".open__overlay");
const overlay = document.querySelector(".overlay");
const btnSvg = document.getElementById('svgInternalID');
let screenSize = window.innerWidth;

window.addEventListener('resize', () => {
    screenSize = window.innerWidth;
});

function toggleOverlayDesktop() {
    overlay.classList.toggle("hide");
    btnSvg.classList.toggle('fill__btn');
    openBtn.classList.toggle('change__bg');
}

function toggleOverlayMobile() {
    overlay.classList.toggle("show__overlay");
    btnSvg.classList.toggle('fill__btn');
    openBtn.classList.toggle('change__bg');
}



openBtn.addEventListener('click', () => {
    
    if(screenSize >= 930) {
        toggleOverlayDesktop();
    }
    else if(screenSize < 930) {
        toggleOverlayMobile();
    } 
    else {
        overlay.classList.remove("show__overlay");
        openBtn.removeEventListener('click', toggleOverlayMobile);
        btnSvg.classList.remove('fill__btn');
        openBtn.classList.remove('change__bg');
        overlay.classList.remove("hide");
        openBtn.removeEventListener('click', toggleOverlayDesktop);
        btnSvg.classList.remove('fill__btn');
        openBtn.classList.remove('change__bg');
    }
});




// openBtn.addEventListener('click', toggleOverlayMobile);
// openBtn.addEventListener('click', toggleOverlayDesktop);




