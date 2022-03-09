const acordar = () => 'Acordando!!';
const tomarCafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (funcEscolhida) => {
    console.log(funcEscolhida());
}

doingThings(acordar);