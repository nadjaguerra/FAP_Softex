function calcMedia() {
    let soma = 0;
    for (i = 0; i <= 1; i++) {
        nota = parseFloat(prompt(`Informe a ${i + 1}ª nota: `))
        soma += nota
    }
    return 21 - soma               //Considerando que a média para ser aprovado é 7
}

//Sendo 10 a nota máxima de uma prova
let notaMin = calcMedia()
let result = notaMin > 10 ? `Não é possível atingir a média com a terceira nota. Seria necessário ${notaMin} pontos.` : 
`Para ser aprovado, a terceira nota precisa ser maior ou igual a ${notaMin.toFixed(2)}.`

console.log(result)
