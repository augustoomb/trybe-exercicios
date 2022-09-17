var Estudante = /** @class */ (function () {
    function Estudante(_matricula, _nome, _notasProvas, _notasTrabalhos) {
        this._matricula = _matricula;
        this._nome = _nome;
        this._notasProvas = _notasProvas;
        this._notasTrabalhos = _notasTrabalhos;
    }
    Estudante.prototype.somadorDeNotas = function (arrNotas) {
        return arrNotas.reduce(function (acc, nota) { return acc + nota; });
    };
    Estudante.prototype.somarTotalDasNotas = function () {
        return this.somadorDeNotas(this._notasProvas) + this.somadorDeNotas(this._notasTrabalhos);
    };
    Estudante.prototype.calculaMediaDasNotas = function () {
        return this.somarTotalDasNotas() / (this._notasProvas.length + this._notasTrabalhos.length);
    };
    return Estudante;
}());
var estudante1 = new Estudante('48765-1', 'Augusto', [80, 40, 20], [50, 60, 80]);
console.log(estudante1.somarTotalDasNotas());
