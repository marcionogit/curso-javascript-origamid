function livro(nome, ano, autor){
    const objetolivro = {
        nome: nome.toUpperCase(),
        ano: 2050 - ano,
        frase: nome + ' por ' + autor
    }
   

    return objetolivro;
};

const valor = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(valor);



