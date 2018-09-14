let button = document.getElementById('menu_btn');
let nav = document.getElementById('nav');
menu_btn.onclick = changeDisplay();



function changeDisplay() {
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
};
