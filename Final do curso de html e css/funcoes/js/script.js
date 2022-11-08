function logCurso() {
    const nome = 'JavaScript';
    const horas = '40 horas';
    console.log(nome, horas);
  }
  
  logCurso(); 


  function logCurso(nome) {
    console.log(nome);
    return nome + ' Log';
  }
  
  const valor = logCurso('JavaScript');
  console.log(valor);
  

  