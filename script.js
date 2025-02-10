// menu hamburger
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});

//on cache le footerFixed si il est par dessus le footerNormal
window.addEventListener('scroll', () => {
    const fixedFooter = document.querySelector('.fixed');
    const normalFooter = document.querySelector('.normal');

    const fixedRect = fixedFooter.getBoundingClientRect();
    const normalRect = normalFooter.getBoundingClientRect();

    if (
        fixedRect.bottom > normalRect.top &&
        fixedRect.top < normalRect.bottom
    ) {
        fixedFooter.style.display = 'none'; // Masque le footer fixe lorsqu'il est au-dessus du footer normal
    } else {
        fixedFooter.style.display = 'fixed'; // Affiche le footer fixe quand il n'est pas au-dessus (marche pas)
    }
});




