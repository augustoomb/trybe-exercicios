function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();


  
/* ***********************************************************************
Exercicio-01
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
  Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days".
  Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

    Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

criarDias(dezDaysList);

function criarDias(array){

    let ul = document.getElementById("days")

    for(let i=0; i<array.length; i+=1){
        let li = document.createElement("li");
        li.innerText = array[i];
        li.className = "day"

        if(li.innerText == 24 || li.innerText == 25 || li.innerText == 31){
            li.className = "day holiday"
        }

        if(li.innerText == 4 || li.innerText == 11 || li.innerText == 18 || li.innerText == 25){
            li.className = "day friday"
        }

        ul.appendChild(li);
        
    }
}



/* ***********************************************************************
Exercicio-02
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

criarBotaoFeriados("Feriados");

function criarBotaoFeriados(stringFeriados){

    let paiDoBotao = document.querySelector(".buttons-container")

    let botaoFeriados = document.createElement("button");
    botaoFeriados.name = stringFeriados
    botaoFeriados.id = "btn-holiday";


    paiDoBotao.appendChild(botaoFeriados)
}


/* ***********************************************************************
Exercicio-03
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)"
*/

adicionarCorAosFeriados()

function adicionarCorAosFeriados() {
    let botaoFeriados = document.getElementById("btn-holiday");

    botaoFeriados.addEventListener("click", mudarCor);
}

function mudarCor() {
    let lisDeFeriado = document.getElementsByClassName("day holiday");
    for(let i=0; i<lisDeFeriado.length; i+=1){
        
        //operador ternário
        lisDeFeriado[i].style.backgroundColor!="purple" ? lisDeFeriado[i].style.backgroundColor = "purple" : lisDeFeriado[i].style.backgroundColor = "rgb(238,238,238)"
    }
}

/* ***********************************************************************
Exercicio-04
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

criarBotaoSextaFeira("Sexta-feira")

function criarBotaoSextaFeira(stringParam){

    let paiDoBotaoSextaFeira = document.querySelector(".buttons-container")

    let botaoSextaFeira = document.createElement("button")
    botaoSextaFeira.name = stringParam;
    botaoSextaFeira.id = "btn-friday";

    paiDoBotaoSextaFeira.appendChild(botaoSextaFeira)
}


/* ***********************************************************************
Exercicio-05
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

mudarCorDeSextaFeira()

function mudarCorDeSextaFeira() {
    let botaoSextaFeira = document.getElementById("btn-friday");

    botaoSextaFeira.addEventListener("click",mudarTexto)
}

function mudarTexto(){
    let lisQueSaoSextaFeira = document.getElementsByClassName("day friday");

    for(let i=0; i<lisQueSaoSextaFeira.length; i+=1){
        lisQueSaoSextaFeira[i].innerText = "Sextou!"
    }
}

/* ***********************************************************************
Exercicio-06
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário,
 o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
*/

criarZoom();

function criarZoom(){
    let days = document.getElementsByClassName("day");

    for(let i=0; i<days.length; i+=1){
        days[i].addEventListener("mouseover",aumentar)
        days[i].addEventListener("mouseleave",diminuir)
    }
}

function aumentar(evento){
    //console.log(evento)
    evento.target.style.fontSize = 'xx-large'
}

function diminuir(evento){
    //console.log("Diminuir!")
    evento.target.style.fontSize = 'initial'
}


/* ***********************************************************************
Exercicio-07
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro
 a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

adicionarTarefaPersonalizada("cozinhar")

function adicionarTarefaPersonalizada(nomeDaTarefa){
    let tarefa = document.createElement("span")
    tarefa.innerText = nomeDaTarefa

    let myTasks = document.querySelector(".my-tasks");
    myTasks.appendChild(tarefa)
}


/* ***********************************************************************
Exercicio-08
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

adicionarLegendaComCor("yellow")

function adicionarLegendaComCor(cor){
    let div = document.createElement("div");
    div.className = "task"
    div.style.backgroundColor = cor

    let myTasks = document.querySelector(".my-tasks");
    myTasks.appendChild(div)
}

/* ***********************************************************************
Exercicio-09
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, 
atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

atribuirClasseATarefa()

function atribuirClasseATarefa(){
    //let divTask = document.querySelector(".task");
    let divFilhaDeMyTasks = document.querySelector(".my-tasks div")

    divFilhaDeMyTasks.addEventListener("click",tratarEventos)
}

function tratarEventos(evento){      

    if(evento.target.className === "task"){
        evento.target.className = "task selected"
    }
    else if(evento.target.className === "task selected"){
        evento.target.className = "task"
    }
    
    //console.log(evento.target.className)
}


/* ***********************************************************************
Exercicio-10
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, 
atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

atribuirCorAoDiaDeAcordoComTarefa()

function atribuirCorAoDiaDeAcordoComTarefa(){
    let listaLis = document.getElementsByClassName("day")

    for(let i=0; i<listaLis.length; i+=1){
        //console.log(listaLis[i].innerText)
        listaLis[i].addEventListener("click",atribuirCor)
    }
}

function atribuirCor(evento){

    //console.log(evento.target)


    let divFilhaDeMyTasks = document.querySelector(".my-tasks div")    
    //console.log(divFilhaDeMyTasks.style.backgroundColor)
    //console.log(divFilhaDeMyTasks.className)

    if(divFilhaDeMyTasks.className === "task selected"){
        let cor = divFilhaDeMyTasks.style.backgroundColor

        evento.target.style.color = cor
    }
}
