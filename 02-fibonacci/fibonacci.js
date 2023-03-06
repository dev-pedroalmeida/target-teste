const inputNum = document.getElementById("fibo-num");
const btnEnviar = document.getElementById("btn-enviar");
const pFibo = document.querySelector(".fibo-sequencia");

let fiboNum = 0;

btnEnviar.addEventListener("click", () => {
    fiboNum = parseInt(inputNum.value);
    fibonacci(fiboNum);
});



function fibonacci(num) {
    let x = 0;
    let y = 1;
    let z = 0;

    while(x < num + 1) {
        
        if(z === num) {
            pFibo.textContent = `${num} pertence à sequência de Fibonacci!`;
            return;
        }

        z = x + y;
        x = y;
        y = z;
    }

    pFibo.textContent = `${num} não pertence à sequência de Fibonacci!`;
    return;

}

