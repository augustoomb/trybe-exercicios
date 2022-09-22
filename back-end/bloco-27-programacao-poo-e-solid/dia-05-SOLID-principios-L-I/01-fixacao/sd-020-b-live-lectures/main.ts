import Celular from './src/Celular';
import SmartPhone from './src/SmartPhone';
import Tijolao from './src/Tijolao';
import UltraSmartPhone from './src/UltraSmartPhone';

const Jorge = new Tijolao('Nokia', '12345678');
const Matheus = new Tijolao('Nokia', '01234567');
const Yudi = new SmartPhone({
  marca: 'Sony',
  num: '40028922',
  tamanhoDaTela: '9 polegadas',
  camFrontal: '10MP',
  camTraseira: '24MP',
});
const Pricila = new UltraSmartPhone({
  marca: 'Xiaomi',
  num: '987654321', 
  tamanhoDaTela: '8.5 polegadas',
  camFrontal: '64MP',
  camTraseira: '128MP',
});

Jorge.arremessar('Chão');
Yudi.abrirTrybetunes();
Yudi.tirarFoto('frontal');
Yudi.acessarInternet();
Yudi.colocarVolume('100');

const chamadaEntre = (celular1: Celular, celular2: Celular): void => {
  celular1.ligarPara(celular2.numero);
}

chamadaEntre(Jorge, Matheus);
chamadaEntre(Matheus, Yudi);
chamadaEntre(Yudi, Jorge);

const ajustarVolume = (celular: SmartPhone, volume: string) => celular.colocarVolume(volume);

ajustarVolume(Yudi, '100');
console.log(ajustarVolume(Pricila, '45'));

const acessarInternet = (celular: SmartPhone) => {
  celular.acessarInternet();
}

acessarInternet(Yudi);
acessarInternet(Pricila);