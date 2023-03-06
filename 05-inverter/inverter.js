const inputString = document.getElementById("string");
const btnEnviar = document.getElementById("btn-enviar");
const pInversa = document.getElementById("string-inversa");


btnEnviar.addEventListener("click", () => {
    let string = inputString.value;
    let stringInv = "";

    for(let i = string.length; i >= 0; i--) {
        stringInv += string.substr(i, 1);
    }

    pInversa.textContent = stringInv;
})



