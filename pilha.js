// EXERCICIO 1068 BALANCO DE PARENTESES Beecrowd

// Comente a linha abaixo se for usar o caminho de entrada padrão beecrowd
const input = require('fs').readFileSync('./input2.txt', 'utf8');

// Descomente a linha abaixo se for usar o caminho de entrada padrão do beecrowd
//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Carrega as linhas do arquivo em uma lista
const lines = input.split('\n');

// Função com pilha para testar equilibrio de parenteses
const isValid = (s) => {
    const stack = [];
    for (let i = 0; i < s.length; i += 1) { // procura somente parenteses
        if(s[i] === '(' || s[i] ===  ')') {
            if (s[i] === '(') { // abre parenteses
                stack.push(s[i]);
            } else {
                const pop = stack.pop(); // fecha parenteses
                if (pop !== '(') {
                    return false;
                }
            }
        }
    }
    return (stack.length === 0); // se esvaziar pilha esta equilibrado
};

// Testa todas as linhas
for (let i = 0; i < lines.length; i += 1){
    if(isValid(lines[i])){ //testa expressao
        console.log('correct')
    } else { console.log('incorrect')}
}
