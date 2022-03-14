
// 5 - Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(arrNames) {
    
    const contarOcorrenciasLetraA = (acum, atual) => {
        
        contaLetraANaPalavra = (acumInterno, atualInterno) => {
            if(atualInterno === 'a' || atualInterno === 'A') {
                return acumInterno = acumInterno+1;
            }
            else {
                return acumInterno;
            }
        }

        const qtdLetraANaPalavraAtual = atual.split('').reduce(contaLetraANaPalavra, 0);

        return acum + qtdLetraANaPalavraAtual;
    };

    const qtdOcorrenciasLetraA = arrNames.reduce(contarOcorrenciasLetraA, 0);

    console.log(qtdOcorrenciasLetraA);
  }

  containsA(names);
