const pSP = document.querySelector("#sp");
const pRJ = document.querySelector("#rj");
const pMG = document.querySelector("#mg");
const pES = document.querySelector("#es");
const pOutros = document.querySelector("#outros");

let valorSP = 67836.43;
let valorRJ = 36678.66;
let valorMG = 29229.88;
let valorES = 27165.48;
let valorOutros = 19849.53;

let total = valorSP + valorRJ + valorMG + valorES + valorOutros;

let porcentagemSP = (valorSP / total) * 100;
let porcentagemRJ = (valorRJ / total) * 100;
let porcentagemMG = (valorMG / total) * 100;
let porcentagemES = (valorES / total) * 100;
let porcentagemOutros = (valorOutros / total) * 100;

pSP.textContent = porcentagemSP.toFixed() + "%";
pRJ.textContent = porcentagemRJ.toFixed() + "%";
pMG.textContent = porcentagemMG.toFixed() + "%";
pES.textContent = porcentagemES.toFixed() + "%";
pOutros.textContent = porcentagemOutros.toFixed() + "%";
