const botaoMenu = document.querySelector('.botao-menu');
const menu = document.querySelector('.menu');
const botaoTema = document.querySelector('.botao-tema');
const botaoMais = document.querySelector('#botao-mais');
const textoExtra = document.querySelector('.texto-extra');
const formulario = document.querySelector('#formulario-contato');
const mensagemFormulario = document.querySelector('#mensagem-formulario');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

menu.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'A') {
    menu.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
  }
});

botaoTema.addEventListener('click', () => {
  const escuro = document.body.classList.toggle('escuro');
  botaoTema.textContent = escuro ? '☀' : '☾';
  botaoTema.setAttribute('aria-label', escuro ? 'Ativar tema claro' : 'Ativar tema escuro');
});

botaoMais.addEventListener('click', () => {
  const visivel = !textoExtra.hidden;
  textoExtra.hidden = visivel;
  botaoMais.textContent = visivel ? 'Mostrar mais' : 'Mostrar menos';
  botaoMais.setAttribute('aria-expanded', String(!visivel));
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = formulario.nome.value.trim();
  const email = formulario.email.value.trim();
  const mensagem = formulario.mensagem.value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  mensagemFormulario.className = 'mensagem-formulario';
  if (!nome || !email || !mensagem) {
    mensagemFormulario.textContent = 'Preencha todos os campos antes de enviar.';
    mensagemFormulario.classList.add('erro');
  } else if (!emailValido) {
    mensagemFormulario.textContent = 'Informe um e-mail válido.';
    mensagemFormulario.classList.add('erro');
  } else {
    mensagemFormulario.textContent = 'Mensagem validada com sucesso!';
    mensagemFormulario.classList.add('sucesso');
    formulario.reset();
  }
});

document.querySelector('#ano-atual').textContent = new Date().getFullYear();
