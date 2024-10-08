function calculadora(a, b, operacao) {
    switch (operacao) {
        case "soma":
            return a + b;
        case "subtrair":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            if (b === 0) {
                return "Divisão por zero";
            }
            return a / b;
            default:
                return "Operação inválida";
    }
}

console.log(calculadora(50, 40, "soma"));

console.log(calculadora(10, 5, "multiplicar"));

console.log(calculadora(10, 5, "subtrair"));

console.log(calculadora(50, 2, "dividir"));
console.log(calculadora(10, 0, "dividir"));
console.log(calculadora(10, 5, "operacaoInvalida"));




