import GeraCPF from './modules/GeraCPF'
import Recarregar from './modules/Recarregar';
import './assets/css/style.css'


(function () {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
})()

document.addEventListener('click', el => {
    const clique = el.target
    if (clique.classList.contains('voltar')) {
        (function () {
            const gera = new GeraCPF();
            const cpfGerado = document.querySelector('.cpf-gerado');
            cpfGerado.innerHTML = gera.geraNovoCPF();
        })()
    }
})





