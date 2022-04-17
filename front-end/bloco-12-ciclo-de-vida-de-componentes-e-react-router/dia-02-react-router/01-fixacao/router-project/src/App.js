import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import Login from './Login';

function App() {
  const logado = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/home" component={Home} />
        <Route path="/profile/:cidade" render={(props) => <Profile {...props} name="Augusto" />}></Route>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/">
          { logado ? <Redirect to="/home" /> : <Login /> }
        </Route>
      </Switch> 
    </BrowserRouter>    
  );
}

export default App;

//tudo foi feito no app.js nessa primeira parte do conteúdo.
/*
-instalei a dependecia do router no projeto
-importei BrowserRouter, Route
-envolvi tudo num BrowserRouter
-para cada pagina, crio um ROUTE
-ambas as sintaxes funcionam:
    <Route path="/howto" component={ HowTo } />
    <Route path="/profile"><Profile /></Route>
-Uso do 'exact':
    todos os outros paths 'contem' a string '/' também. Sem o exact, o react acha
    que todos os outros path são iguais, por também conterem o '/'
*/


//******************* */

/*
EXPLICAÇÃO:
<Route path="/profile/:cidade" render={(props) => <Profile {...props} name="Augusto" />}></Route>

-aqui é uma rota normal.
-o usuário deve digitar na url uma cidade. EX: /profile/contagem
-a diferença é que passo o parametro 'render' para passar informações para o link de destino
-no render, passo uma arrow funcion
-na arrow function, o param props é um grande obj com muitas informações sobre o proprio router
-no corpo da função o componente Profile é chamado
-nele estou passando a props do parametro
-mas não só ela. Já que quero passar a props do param + o param que foi digitado para ":cidade" , eu faço um spread operator "..."
-o ' name="Augusto" ' eu mantive para entender que também posso passar param via props da forma antiga

...continua no arquivo profile para eu entender.
*/




/* Ao declarar o switch, a rota será buscada e, então, quando for encontrada a busca será finalizada, 
já que sem esse componente todas as rotas serão processadas. */