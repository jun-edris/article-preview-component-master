const openBtn = document.querySelector(".open__overlay");
const overlay = document.querySelector(".overlay");
const btnSvg = document.getElementById('svgInternalID');

function toggleOverlayMobile() {
    overlay.classList.toggle("show__overlay");
    btnSvg.classList.toggle('fill__btn');
    openBtn.classList.toggle('change__bg');

}

function toggleOverlayDesktop() {
    overlay.classList.toggle("hide");
    btnSvg.classList.toggle('fill__btn');
    openBtn.classList.toggle('change__bg');
}

const mobileScreen = window.addEventListener('resize', () => {
    const screenSize = window.innerWidth;

    if(screenSize < 930) {
        openBtn.addEventListener('click', toggleOverlayMobile);
    }
    else {
        overlay.classList.remove("show__overlay");
        openBtn.removeEventListener('click', toggleOverlayMobile);
        btnSvg.classList.remove('fill__btn');
        openBtn.classList.remove('change__bg');
        overlay.classList.remove("hide");
    }

    if(screenSize >= 930) {
        openBtn.addEventListener('click', toggleOverlayDesktop);
    }
    else {
        overlay.classList.remove("hide");
        openBtn.removeEventListener('click', toggleOverlayDesktop);
        btnSvg.classList.remove('fill__btn');
        openBtn.classList.remove('change__bg');
    }
});

const desktopScreen = window.addEventListener('resize', () => {

});





