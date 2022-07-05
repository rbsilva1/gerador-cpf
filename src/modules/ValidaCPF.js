export default function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get() {
            return cpf.replace(/\D+/g, '');
        }
    })

    this.valida = function () {
        if (!this.cpfLimpo) return false;
        if (this.cpfLimpo.length < 11) return false;
        if (this.eSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCPF = cpfParcial + digito1 + digito2;

        return this.cpfLimpo === novoCPF;
    }

    this.eSequencia = function () {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
}

ValidaCPF.criaDigito = function (cpfParcial) {
    let cpfArray = Array.from(cpfParcial);
    let regressivo = cpfParcial.length + 1;

    const total = cpfArray.reduce((ac, valor) => {
        ac += Number(valor) * regressivo;
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}






