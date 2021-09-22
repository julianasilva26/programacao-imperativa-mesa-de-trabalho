//Alcilene Reis
// João Francisco
// Juliana Silva
// Rodolfo

const dadosPessoas = [
    {altura: 1.60, sexo: "M"},
    {altura: 1.80, sexo: "F"},
    {altura: 1.65, sexo: "M"},
    {altura: 1.82, sexo: "F"},
    {altura: 1.78, sexo: "M"},
    {altura: 1.70, sexo: "F"},
    {altura: 1.54, sexo: "M"},
    {altura: 1.45, sexo: "F"},
    {altura: 2.01, sexo: "M"},
    {altura: 1.96, sexo: "M"},
    {altura: 1.63, sexo: "M"},
    {altura: 1.43, sexo: "F"},
    {altura: 1.76, sexo: "F"},
    {altura: 1.65, sexo: "M"},
    {altura: 1.67, sexo: "F"},
]

// Maior e a menor altura do grupo

function maiorEmenorPessoa() {
    let maior = 0
    let menor = 2.01
    
    for (let i = 0; i < dadosPessoas.length; i++) {
        if(dadosPessoas[i].altura >= maior) {
            maior = dadosPessoas[i].altura
        }
        if(dadosPessoas[i].altura <= menor) {
            menor = dadosPessoas[i].altura
        }
    }

    console.log(`A maior altura é ${maior}`)
    console.log(`A menor altura é ${menor}`)
}

//maiorEmenorPessoa()

// A média de altura das mulheres

function mediaMulheres() {
    let array = []

    for (let i = 0; i < dadosPessoas.length; i++) {
        if (dadosPessoas[i].sexo === "F") {
            array = array.join(dadosPessoas[i].altura)
        }        
    }
    console.log(array)
}

mediaMulheres()

// O número de homens