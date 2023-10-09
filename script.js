const pancakeMenuToggle = document.querySelector('.pancake-menu-toggle');
const pancakeMenu = document.querySelector('.pancake-menu');

pancakeMenuToggle.addEventListener('click', () => {
    pancakeMenu.classList.toggle('show-pancake-menu');
});

