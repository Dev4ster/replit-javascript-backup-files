/**
 * <JavascriptQuiz />⚽ 
 * vamos fazer um teste! O que você acha que será consolado log? Tire um minuto e responda. . . .
 * Resposta: {valor: 11} 10 . Nwo...... Porque??? . 
 * Porque no JavaScript temos 2 tipos de dados: 
 * ◾ Tipos Primitivos (Tipos de Valor) - Número, String, Booleano, Símbolo, Indefinido e Nulo. - Todos os tipos, exceto objetos. 
 * ◾ tipos não primitivos (tipos de referência) (objetos) - Objeto, função, matriz ✔ primitivos são copiados por seus valores, ou seja, a única referência que eles têm é o seu próprio valor. Primitivos são imutáveis. 
 * Exemplo: -------- deixar x = 10; deixe y = x; x = 20; console.log(x) // x = 20; console.log(y) // y = 10; ------- O valor "X" mudou pela última referência bruxa que eu fiz, mas o valor "Y" não mudou porque está recebendo a 
 * primeira referência de X. ✔ Não primitivos (objetos) são copiados por sua referência. 
 * Um objeto é um valor na memória que é possivelmente referenciado por um identificador. Então, quando você muda um valor de um objeto, você está mudando sua bruxa identificador tem uma referência na memória. Tks. Espero que gostem!
 */

let obj = { value: 10 };
let number = 10;

function increaseObj(obj){
    obj.value++;
}


function increase(number){
    number++;
}

increaseObj(obj);
console.log(obj);

increase(number);
console.log(number);