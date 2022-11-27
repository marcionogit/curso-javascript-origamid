// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const minhaIdade = 24;
const irmao = 17;
const mae = 41;
const avo = 68;

if(minhaIdade > irmao){
    console.log('Eu sou mais velho que meu irmão');
}else if(minhaIdade === irmao){
    console.log('Eu tenho a mesma idade que meu irmão');
} else{console.log('Sou mais novo que meu irmão');}


if(minhaIdade > mae){
    console.log('Eu sou mais velho que minha mãe');
} else if(minhaIdade === mae){
    console.log('Eu tenho a mesma idade que minha mãe');
}else{console.log('Sou mais novo que minha mãe');}


if(minhaIdade > avo){
    console.log('Eu sou mais velho que minha avó');
} else if(minhaIdade === avo){
    console.log('Eu tenho a mesma idade que minha avó');
} else{console.log('Sou mais novo que minha avó');}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(`O valor retornado é ${expressao}`);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
const totalHabitantes = china - brasil;

if(brasil > china){
    console.log('O Brasil tem mais habitantes que China');
} else if(brasil === china){
    console.log('Tanto Brasil quanto a China tem o mesmo numero de habitantes');
} else{
    console.log(`A China tem ${totalHabitantes} milhões de habitantes a mais que o Brasil`);
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}