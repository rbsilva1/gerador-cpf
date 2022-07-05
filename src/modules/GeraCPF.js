import ValidaCPF from './ValidaCPF'
export default function GeraCPF() { }

GeraCPF.prototype.rand = function (min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
}

GeraCPF.prototype.formatado = function (cpf) {
    return (
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
    )
}

GeraCPF.prototype.geraNovoCPF = function () {
    const cpfSemDigitos = this.rand();
    const digito1 = ValidaCPF.criaDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.criaDigito(cpfSemDigitos + digito1);
    const novoCPF = cpfSemDigitos + digito1 + digito2;
    return this.formatado(novoCPF)
}