import SmartPhone from './SmartPhone';

export default class UltraSmartPhone extends SmartPhone {
  public verificarNumero(numero: string): string {
    if(!numero.startsWith('9') && numero.length < 9) {
      return '';
    }
    return numero;
  }

  public colocarVolume(): string[] {
    return ['girassol.mp3', 'volume 100%', 'feat'];
  }
}