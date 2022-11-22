// EXERCICIO 2242 huaauhahhuahau Beecrowd

// Comente a linha abaixo se for usar o caminho de entrada padrão beecrowd
const input = require('fs').readFileSync('./input3.txt', 'utf8');

// Descomente a linha abaixo se for usar o caminho de entrada padrão do beecrowd
//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Carrega as linhas do arquivo em uma lista
const lines = input.split('\n');

// Funcao para remover consoantes
function removeConsoante(str) {
  let strArr = str.split('');
  const conjuntoVogais = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (!(conjuntoVogais.has(char))) { // se for consoante
        strArr[i] = ''; //apaga consoante
    }
  }
  return strArr.join(''); //une elementos da lista
}

// Funcao para testar palindromo
function testePalindromo(str){
  return str === str.split('').reverse().join('');
}

//  Testa todas as linhas do arquivo de entrada
for (let i = 0; i < lines.length; i += 1){
  let stringSemConsoante = removeConsoante(lines[i]);
  if(testePalindromo(stringSemConsoante)) {
    console.log('S');
  } else {console.log('n')}
}
