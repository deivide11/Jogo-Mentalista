var numeroSecreto = parseInt(Math.random() * 501);
//Parse é tipo um analise. Int é um inteiro 
//parseInt no começo para tirar os números quebrados
//Math.random, math = matemática. Random de aleatório

while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 1 e 500');
  //se o chute for igual ao número secreto
  if(chute == numeroSecreto){
    alert('Você acertou!');
  }
  else if(chute < numeroSecreto){
    alert('O número secreto é maior');
  }
  else if(chute > numeroSecreto){
    alert('O número secreto é menor');
  }
}