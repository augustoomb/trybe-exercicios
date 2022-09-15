class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;

    if (!this.testarData()) {
      // throw new Error("Data inválida"); 
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;     
    }
  }

  testarData() {
    return this.testarDia(this.dia) && this.testarMes(this.mes) && this.testarAno(this.ano);
  }

  private testarDia(dia: number) {
    return dia > 0 && dia < 31;
  }

  private testarMes(mes: number) {
    return mes > 0 && mes < 13;
  }

  private testarAno(ano: number) {
    return ano > 0;
  }

  get dia(): number {
    return this._dia;
  }
  get mes(): number {
    return this._mes;
  }
  get ano(): number {
    return this._ano;
  }

  getData(): string {
    return `${this._dia}/${this._mes}/${this._ano}`
  }

  set dia(dia: number) {
    if (!this.testarDia(dia)) {
      throw new Error("Dia inválido");
    }
    this._dia = dia;
  }

  set mes(mes: number) {
    if (!this.testarMes(mes)) {
      throw new Error("Mês inválido");
    }
    this._mes = mes;
  }

  set ano(ano: number) {
    if (!this.testarAno(ano)) {
      throw new Error("Ano inválido");
    }
    this._ano = ano;
  }

  getMonthName() { // nome por escrito do mẽs
    return meses[this._mes-1];
  }

  numEhMultiploDe400() {// nomes ruins. Apenas para bom entendimento
    return this.ano % 400 === 0;
  }

  numEhMultiploDe4MasNaoDe100() { // nomes ruins. Apenas para bom entendimento
    return this.ano % 4 === 0 && this.ano % 100 !== 0;
  }

  isLeapYear() { // se ano é bissexto
    return this.numEhMultiploDe400() && this.numEhMultiploDe4MasNaoDe100();
  }
}

const meses = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

const data1 = new Data(10, 10, 1200);

// data1.dia = 50;

console.log(data1.getData());
console.log(data1.getMonthName());
console.log(data1.isLeapYear());
