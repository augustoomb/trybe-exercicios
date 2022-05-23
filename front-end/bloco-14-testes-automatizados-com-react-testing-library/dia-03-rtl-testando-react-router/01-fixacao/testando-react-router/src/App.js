import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// USANDO OS COMPONENTES AQUI APENAS PARA FINS DE ESTUDO. DEVERIAM TER SEU PRÓPRIO ARQUIVO
export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

// 2º passo é usar minhas rotas e links normalmente. Aqui usei os componentes no mesmo arquivo só para fins de estudo