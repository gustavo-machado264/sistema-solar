document.addEventListener('DOMContentLoaded', () => {
  const botao = document.querySelector('.toggle-info');
  const tabela = document.querySelector('.info-tabela');

  botao.addEventListener('click', () => {
    tabela.classList.toggle('mostrar');
    botao.classList.toggle('active');
  });
});
