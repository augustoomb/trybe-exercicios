import JustValidate from 'just-validate';

const botaoEnviar = document.getElementById("botao-enviar");

botaoEnviar.addEventListener("click",function(evento){
    //evento.preventDefault()
})


const validation = new JustValidate('#form');

validation
  .addField('#nome-usuario', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 10,
    },
  ])
  