// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
//const idade = 25;
//console.log(idade); 
//================================================================================================================================================
//RESPOSTA:Quando você declara uma constante usando const, está indicando que o valor da variável não pode ser alterado após a sua inicialização
//================================================================================================================================================


////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

//{
    let x = 10;
   // console.log
//==========================================================================================================
//RESPOSTA: Quando você declara uma variável usando let dentro de um escopo delimitado por chaves {}, como no seu exemplo, essa variável estará disponível apenas dentro desse escopo. Isso significa que ela não pode ser acessada fora das chaves.
//===========================================================================================================
///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

//{
  //  let x = 10;
  //  var y = 20;
//}

// console.log(x);
// console.log(y);

//===========================================================================================================
//RESPOSTA:x é declarado usando let dentro de um bloco delimitado por chaves {}, enquanto y é declarado usando var no mesmo bloco. Isso cria uma diferença importante no que diz respeito ao escopo das variáveis.
//===========================================================================================================

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
//var a = 5;
//console.log(b);
//let b = 10;

//===========================================================================================================
//RESPOSTA:Nesse código, ocorre o fenômeno conhecido como hoisting, que é o comportamento do JavaScript de mover declarações para o topo do escopo atual durante a fase de compilação, enquanto ainda mantém as atribuições no lugar.
//===========================================================================================================

/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

//var x = 5;
//var x = 10;
// console.log(x); 

//let y = 15;
//let y = 20; 
// console.log(y); 
//==============================================================================================================//
//RESPOSTA:O erro ocorre devido à tentativa de redeclarar a variável x e y, o que não é permitido no JavaScript.

//No caso das variáveis x, você está usando var para declará-la duas vezes, o que é permitido, mas pode levar a resultados inesperados. Quando você declara uma variável com var duas vezes, a primeira declaração é ignorada e a segunda declaração substitui o valor da variável. Então, quando você tenta imprimir x depois dessas declarações, o valor que será exibido é 10, que é o valor atribuído na segunda declaração.

//No entanto, para as variáveis y, você está tentando redeclarar usando let. O let não permite a redeclaração de variáveis no mesmo escopo. Portanto, você recebe um erro ao tentar declarar y novamente após a primeira declaração.
//======================================================================================================================
//// Escreva um programa que print a primeira letra dessa variavel 
//let nomeCompleto = 'eduardo'

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)
//======================================================================================================================
//RESPOSTA:Para extrair a primeira letra de uma string em JavaScript, você pode usar o método charAt()
//=====================================================================================================================






