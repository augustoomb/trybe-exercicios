const emailLogin = document.getElementById('emailInput');
const senhaLogin = document.getElementById('passwordInput');
const botaoLogin = document.getElementById('buttonSubmit');
const botaoEnviar = document.getElementById('submit-btn');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const textArea = document.getElementById('textarea');
const checkboxAgreement = document.getElementById('agreement');
const formulario = document.getElementById('evaluation-form');
const radioFamily = document.getElementsByName('family');
const checkboxMaterias = document.getElementsByName('check-conteudo');
const radioRate = document.getElementsByName('rate');

function login(event) {
  event.preventDefault();
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', login);

/* requisito 18 */

function verificarStatusCheckboxAgreement(event) {
  const estadoCheckBox = event.target.checked; /* se checkbox desmarcado, variável é false; do contrário, true */
  botaoEnviar.disabled = !estadoCheckBox; /* propriedade disabled deve ser false se var acima for true */
}

checkboxAgreement.addEventListener('change', verificarStatusCheckboxAgreement);

/* requisito 20 */
const spanTotalCaracteres = document.getElementById('counter');
let caracteresRestantes = 500;
spanTotalCaracteres.innerText = caracteresRestantes;

function detectarDigitacao() {
  caracteresRestantes = 500 - textArea.value.length;
  spanTotalCaracteres.innerText = caracteresRestantes;
}

textArea.addEventListener('input', detectarDigitacao);

/* requisito 21 */
function criarTagP(texto) {
  const tagP = document.createElement('p');
  tagP.innerText = texto;
  formulario.appendChild(tagP);
}

function radioFamilyCheck() {
  let retorno = '';
  for (let i = 0; i < radioFamily.length; i += 1) {
    if (radioFamily[i].checked) {
      retorno = radioFamily[i].value;
    }
  }
  return retorno;
}

function checkboxMateriasCheck() {
  const arrayMateriasEscolhidas = [];
  for (let i = 0; i < checkboxMaterias.length; i += 1) {
    if (checkboxMaterias[i].checked) {
      // arrayMateriasEscolhidas.push(' ' + checkboxMaterias[i].value);
      arrayMateriasEscolhidas.push(` ${checkboxMaterias[i].value}`);
    }
  }
  return arrayMateriasEscolhidas;
}

function radioRateCheck() {
  let retorno = '';
  for (let i = 0; i < radioRate.length; i += 1) {
    if (radioRate[i].checked) {
      retorno = radioRate[i].value;
    }
  }
  return retorno;
}

function enviarFormulario(event) {
  event.preventDefault();
  const familiaEscolhida = radioFamilyCheck();
  const materiasEscolhidas = checkboxMateriasCheck();
  const avaliacao = radioRateCheck();
  formulario.innerHTML = '';
  criarTagP(`Nome: ${nome.value} ${sobrenome.value}`);/* adicionando nome e sobrenome */
  criarTagP(`Email: ${email.value}`);/* adicionando email */
  criarTagP(`Casa: ${casa.value}`);/* adicionando casa */
  criarTagP(`Família: ${familiaEscolhida}`);/* adicionando familia */
  criarTagP(`Matérias: ${materiasEscolhidas.toString()}`);/* adicionando matérias */
  criarTagP(`Avaliação: ${avaliacao}`);/* adicionando avaliação */
  criarTagP(`Observações: ${textArea.value}`);/* adicionando observações */
}

botaoEnviar.addEventListener('click', enviarFormulario);
