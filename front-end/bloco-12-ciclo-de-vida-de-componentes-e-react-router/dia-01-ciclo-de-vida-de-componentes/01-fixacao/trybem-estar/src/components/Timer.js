import React from 'react';

export default class Timer extends React.Component {
  constructor() {
    super();
    console.log('constructorTimer');

    this.state = {
      count: 0,
      momentoExercicio: 0,
    };
  }

  // aqui já vou disparar o timer.
  componentDidMount() {
    console.log('componentDidMountTimer');
    const tempo = 1000;

    this.interval = setInterval(() => { // interval é uma propriedade do componente. Criado apenas para receber o setInterval. Sò estou fazendo essa atribuição, pq preciso 'matar' o set interval quando o componente morrer
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, tempo);
  }

  componentWillUnmount() {
    console.log('componentWillUnmountTimer');

    // desligando o setInterval():
    clearInterval(this.interval); // clearInterval é do próprio JS
  }

  renderMomentoExercicio() {
    const { count, momentoExercicio } = this.state;
    const tiposDeMomentos = ['Inspire', 'Segure', 'Expire'];
    const tempoLimite = 6;

    if (count < tempoLimite) {
      return <h1>{ tiposDeMomentos[momentoExercicio] }</h1>;
    }

    this.setState({
      count: 0,
      momentoExercicio: tiposDeMomentos.length - 1 === momentoExercicio // condição é pra voltar no inicio do arr
        ? 0 : momentoExercicio + 1,
    });
  }

  render() {
    console.log('renderTimer');

    const { count } = this.state;

    return (
      <section>
        { this.renderMomentoExercicio() }
        <h1>{ count }</h1>
      </section>
    );
  }
}
