// função para chamar o relógio
function updateClock() {
 let now = new Date();
let hours = replaceClock(now.getHours()) + ':' + replaceClock(now.getMinutes()) + ':' +  replaceClock(now.getSeconds());

document.querySelector('.display p').innerHTML = hours;
}

// função para corrigir o relógio com números menores que 10

function replaceClock(number) {
    if (number < 10) {
        number = '0'+ number;        
    }
    return number;
}
updateClock()
// Atualiza o relógio a cada segundo (função, intervalo em milissegundos)
setInterval(updateClock, 1000);

// Exibe o relógio no HTML


