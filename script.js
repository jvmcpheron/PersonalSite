const pancakeMenuToggle = document.querySelector('.pancake-menu-toggle');
const pancakeMenu = document.querySelector('.pancake-display-none');
const pancakeExit = document.querySelector('.pancake-menu-exit');



pancakeMenuToggle.addEventListener('click', () => {
    pancakeMenu.style.display = "flex";
    pancakeMenuToggle.style.display = "none";
    pancakeExit.style.display = "flex";
});

pancakeExit.addEventListener('click', () => {
    pancakeMenu.style.display = "none";
    pancakeMenuToggle.style.display = "flex";
    pancakeExit.style.display = "none";
});
