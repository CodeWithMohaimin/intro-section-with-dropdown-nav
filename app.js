const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const navbar = document.getElementById('navbar');

menu.addEventListener("click", function () {
    cross.style.display = 'inline'
    menu.style.display = 'none';
    navbar.style.display = 'flex';
});

cross.addEventListener("click", function () {
    cross.style.display = 'none'
    menu.style.display = 'inline';
    navbar.style.display = 'none';
})