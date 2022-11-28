// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
// APAGAR O VAR E COLOCAR O NOME DA VARIÁVEL E AGRUPAR TODOS OS ITENS DENTRO DO BLOCO
}


// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
// SUBIR A VARIÁVEL PARA O ESCOPO GLOBAL
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4))
console.log(dividirDois(6))

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
// MUDAR DE VAR PARA LET
}

const total = 10 * numero;
console.log(total);
