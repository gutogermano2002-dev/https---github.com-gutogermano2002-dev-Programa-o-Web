// Seleciona o botão pelo identificador
const hamburguer = document.getElementById('menu-hamburguer');

// Seleciona o menu pela classe
const menu = document.querySelector('.menu');
// classe ativo adicionada ou removida ao clicar no botão
hamburguer.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});


