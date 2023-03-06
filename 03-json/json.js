const pMenor = document.querySelector("#menor-valor");
const pMaior = document.querySelector("#maior-valor");
const pDias = document.querySelector("#numero-dias");

let dados = {};



fetch("dados.json")
.then(function(response) {
    return response.json();
})
.then(function(response) {
    dados = response;

    getMenorValor(dados);
    getMaiorValor(dados);
    getNumeroDias(dados);
})





function getMenorValor(dados) {
    let menorValor = dados[0].valor;

    for(let i = 0; i < 30; i++) {
        if(menorValor > dados[i].valor) {
            menorValor = dados[i].valor;
        }
    }

    pMenor.textContent = menorValor;

}


function getMaiorValor(dados) {
    let maiorValor = dados[0].valor;

    for(let i = 0; i < 30; i++) {
        if(maiorValor < dados[i].valor) {
            maiorValor = dados[i].valor;
        }
    }

    pMaior.textContent = maiorValor;

}


function getNumeroDias(dados) {
    let media = getMedia(dados);
    let nDias = 0;

    for(let i = 0; i < 30; i++) {
        if(dados[i].valor > media) {
            nDias++;
        }
    }

    pDias.textContent = nDias;

}

// Helper média
function getMedia(dados){
    let media = 0;
    let total = 0;
    let nDias = 0;

    for(let i = 0; i < 30; i++) {
        if(dados[i].valor != 0) {
            total += dados[i].valor;
            nDias++;
        }
    }

    media = total / nDias;

    return media;

}

