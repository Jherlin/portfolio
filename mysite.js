var mediaQuery = window.matchMedia("(max-width: 767px)");

if (mediaQuery.matches) {
    window.onload = Scrolldown;
}

function Scrolldown() {
    window.scroll(0,180); 
}
