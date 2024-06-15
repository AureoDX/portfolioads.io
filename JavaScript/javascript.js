
const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const telf = document.getElementById('Telf');

btnMenu.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active'); // Certifique-se de ativar o overlay quando o menu for ativado
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('active'); // Remova a classe active para fechar o menu
    overlay.classList.remove('active'); // Remova a classe active para fechar o overlay
});


