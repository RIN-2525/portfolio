const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

menu.style.display = 'none';

// メニューを開く
menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex';
    document.body.classList.add('no-scroll');
});

// メニューを閉じる
function closeMenu() {
    menu.style.display = 'none';
    document.body.classList.remove('no-scroll');
}

menuClose.addEventListener('click', closeMenu);


// メニュー内のリンクをクリックしたら閉じる
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});