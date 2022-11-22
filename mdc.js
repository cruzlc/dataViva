// EXERCICIO - 1028 FIGURINNHAS Beecrowd

// Comente a linha abaixo se for usar o caminho de entrada padrão beecrowd
const input = require('fs').readFileSync('./input.txt', 'utf8');

// Descomente a linha abaixo se for usar o caminho de entrada padrão do beecrowd
//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Carrega as linhas do arquivo em uma lista
const lines = input.split('\n');

// Funcao para calcular maximo diisor comum
function MDC(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

// Testa todas as linhas de entrada
const tamanhoLista = lines[0];
for (let i = 1; i <= tamanhoLista ; i++) {
    let listaNumeros = lines[i].split(" ");
    let F1 = parseInt(listaNumeros[0]);
    let F2 = parseInt(listaNumeros[1]);
    let maxDivisor = MDC(F1,F2);
    console.log(maxDivisor);
}
