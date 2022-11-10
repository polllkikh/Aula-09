//criando calculadora
function calculadora () {
    //definimos as opreções e pegando valor de entrada do usuario
    //usaremos o /"n"
    const operacao = number(prompt('escolha uma opção:/n1 - soma (+)/n2 - subtrção (-)/n 3 - multiplição (*) /n 4 divisao real (/)\n 5 -'));
}
//verificando se a operação é válida 
if(!operacao || operacao >=7){
    alert('Erro - Operação Inválida!');
    calculadora();
} else{
    //definindo variáveis - todas as entradas devem ser tipo Number
    let n1 = number(prompt('Insira o primeiro valor: '));
    let n2 = number(prompt('Insira o segundo valor: '));
    let resultado;
    //verificando se as variáveis são válidas 
    if (!n1 || !n2){
        alert('Erro - Parãmetros Inválidos!');
        calculadora();
    }else}

    //definindo as funções
    function soma(){
          resultado = n1 + n2;
          //mostrando o resultado usando template strings
        alert(`${n1} + ${n2} = ${resultado}`);
        //dando a opção de chamar uma nova operação
        novaOperacao();
    }
    function subtracao(){
        resultado = n1 - n2;
        //mostrando o resultado usando template strings
      alert(`${n1} - ${n2} = ${resultado}`);
      //dando a opção de chamar uma nova operação
      novaOperacao();
  }   
   function multiplicacao(){
    resultado = n1 * n2;
    //mostrando o resultado usando template strings
  alert(`${n1} * ${n2} = ${resultado}`);
  //dando a opção de chamar uma nova operação
  novaOperacao();
}   
 function divisaoReal(){
    resultado = n1 / n2;
    //mostrando o resultado usando template strings
  alert(`${n1} / ${n2} = ${resultado}`);
  //dando a opção de chamar uma nova operação
  novaOperacao();
}   
 function divisaoInteria(){
    resultado = n1 % n2;
    //mostrando o resultado usando template strings
  alert(`O resto da divisão entre ${n1} e ${n2} é igual a= ${resultado}`);
  //dando a opção de chamar uma nova operação
  novaOperacao();
}
function potenciacao(){
    resultado = n1 ** n2;
    //mostrando o resultado usando template strings
  alert(`${n1} elevado á ${n2} ª Pontencia = ${resultado}`);
  //dando a opção de chamar uma nova operação
  novaOperacao();
}
//nova operação
function novaOperacao(){
    let opcão = promt('Deseja fazer outra operação?/n1 - sim /n2 - não');
    if (opcao == 1){
        calculadora();
    }else if (opcao == 2){
        alert('Até mais!');
    }else{
        alert('Digite uma opção valida');
        novaOperação
    }
    
}

}
    }
}

// escolhendo uma operação
// usando if && else
if (operacao == 1){
    soma();
}else if (operacao == 2){
    subtracao();
}else if (operacao == 3){
    multiplicacao();
}else if (operacao == 4){
    divisaoReal(),
}else if (operacao == 5){
    divisaoInteira();
}else if (operacao == 6){
    potenciacao();

}

// usando switch case como alternativa (comentar um dos dois)
/*
switch (operacao){
    case 1:
         soma();
         break;
         case 2: 
         subtracao();
         break;
         case 3:
            multiplicacao();
            break;
            case 4:
                divisaoReal();
                break;
                case 5:
                    divisaoInteria();
                    breal;
                    case 6:
                        poteciacao();
                        break;
}
calculadora();