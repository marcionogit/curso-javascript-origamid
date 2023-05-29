// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let value = 0
transacoes.forEach(function(item){
    if(item.descricao.includes('Taxa')){
        value += +item.valor.replace('R$ ' , '')
    };
  })

console.log(`O valor total de recebimentos é de R$${value}`)
  


  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayLista = transportes.split(';');
  console.log(arrayLista)

  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const htmlSplitado = html.split('span');
const htmlNovo = htmlSplitado.join('a');
console.log(htmlNovo)
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

  console.log(frase[frase.length - 1])
  
  // Retorne o total de taxas
  const transition = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  let contador = 0
  transition.forEach(function(item, i){
    if(item.toLowerCase().includes('taxa')){
        contador += 1
    }
  })
  console.log(`Existem ${contador} itens`)
  
  