import Celular from './Celular';
/**
 * - tem tudo que um celular tem
  - tem tamanho da tela
  - tem qualidade da cam frontal
  - tem qualidade da camera traseira
  - pode abrir o trybetunes
  - pode tirar foto com alguma das câmeras
  - pode acessar a internet
  - pode ajustar o volume
 */
export interface SmartPhoneParams {
  marca: string,
  num: string,
  tamanhoDaTela: string,
  camFrontal: string,
  camTraseira: string,
}

export default class SmartPhone extends Celular {
  private _tamanhoDaTela: string;
  private _camFrontal: string;
  private _camTraseira: string;

  constructor(params: SmartPhoneParams) {
    super(params.marca, params.num);
    this._tamanhoDaTela = params.tamanhoDaTela;
    this._camFrontal = params.camFrontal;
    this._camTraseira = params.camTraseira;
  }

  get tamanhoDaTela() {
    return this._tamanhoDaTela;
  }

  public abrirTrybetunes():void {
    console.log('Solta o som, DJ!!');
  }

  public tirarFoto(camera: string): void {
    if (camera === 'frontal') {
      console.log(`Foto tirada com a câmera frontal de ${this._camFrontal}`);
    } else {
      console.log(`Foto tirada com a câmera traseira de ${this._camTraseira}`);
    }
  }

  public acessarInternet(): void {
    console.log('Acessou o forms de hoje.');
  }

  public colocarVolume(volume: string): void {
    console.log(`Volume ajustado para ${volume}`);
  }
}