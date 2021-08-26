console.log('                            ')
console.log('----Prática de Conceitos----')
console.log('                            ')
console.log('                            ')
console.log('-> FUNCTION 1')
function passwordValidation(password) {
    if (password === 1234) {
        return console.log('ACESSO PERMITIDO')
    } else {
        return console.log('ACESSO NEGADO')
    }
}

//Teste de código
passwordValidation(1234)
console.log('----------------------------')
passwordValidation('1234')
console.log('----------------------------')
passwordValidation(8963)
console.log('----------------------------')
//-------------------------------------------------------------------------------------------//
console.log('                            ')
console.log('-> FUNCTION 2')
function comparingNumbers(number1, number2) {
    if(number1 > number2) {
        return console.log(`${number1} é o maior número e ${number2} é o menor.`)
    } else if(number1 < number2) {
        return console.log(`${number2} é o maior número e ${number1} é o menor.`)
    } else {
        return console.log(`${number1} e ${number2} são números iguais.`)
    }
}

//Teste de código
comparingNumbers(3,3)
console.log('----------------------------')
comparingNumbers(8,4)
console.log('----------------------------')
comparingNumbers(2,7)
console.log('----------------------------')
//-------------------------------------------------------------------------------------------//
console.log('                            ')
console.log('-> FUNCTION 3')
function monthsInNumbers(month) {
    switch (month) {
        case 1:
            console.log('JANEIRO')
            break;
        case 2:
            console.log('FEVEREIRO')
            break;
        case 3:
            console.log('MARÇO')
            break;
        case 4:
            console.log('ABRIL')
            break;
        case 5:
            console.log('MAIO')
            break;
        case 6:
            console.log('JUNHO')
            break;
        case 7:
            console.log('JULHO')
            break;
        case 8:
            console.log('AGOSTO')
            break;
        case 9:
            console.log('SETEMBRO')
            break;
        case 10:
            console.log('OUTUBRO')
            break;
        case 11:
            console.log('NOVEMBRO')
            break;
        case 12:
            console.log('DEZEMBRO')
            break;
        default:
            console.log('Entrada inválida!')
            break;
    }
}

//Teste de código
monthsInNumbers(1)
console.log('----------------------------')
monthsInNumbers(16)
console.log('----------------------------')
monthsInNumbers(8)
console.log('----------------------------')
//-------------------------------------------------------------------------------------------//
console.log('                            ')
console.log('-> FUNCTION 4')
function passwordInTernario(password) {
    password === 1234 ? console.log('ACESSO PERMITIDO') : console.log('ACESSO NEGADO')
}

//Teste de código
passwordInTernario(1234)
console.log('----------------------------')
passwordInTernario(265)
console.log('----------------------------')
passwordInTernario('1234')
console.log('----------------------------')
//-------------------------------------------------------------------------------------------//
console.log('                            ')
console.log('                            ')
console.log('----Projeto microondas----')
console.log('                            ')
console.log('                            ')
function makingFood(food, time) {
    switch (food) {
        case 1:
            food = 'Pipoca'
            padrao = 10
            break;
        case 2:
            food = 'Macarrão'
            padrao = 8
            break;
        case 3:
            food = 'Carne'
            padrao = 15
        break;
        case 4:
            food = 'Feijão'
            padrao = 12
        break;
        case 5:
            food = 'Brigadeiro'
            padrao = 8
            break;
    }
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
    if(food > 5 || food < 1) {
        console.log(`Prato número ${food} inexistente`)
// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
    } else if(time !== padrao) {
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
        if(time > 2*padrao && time < 3*padrao) {
            console.log(food)
            console.log('A comida queimou.')
        }
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
        else if(time < padrao) {
            console.log(food)
            console.log('Tempo insuficiente.')
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
        } else if(time >= 3*padrao) {
            console.log(food)
            console.log('kabumm!')
        }
    }
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
    console.log('Prato pronto, bom apetite!!!')
}

//Teste de código
makingFood(8,8) //Prato inexistente
console.log('----------------------------')
makingFood(2,8) // Prato existente com tempo padrão
console.log('----------------------------')
makingFood(1,12) // Prato existente mas não com tempo padrão
console.log('----------------------------')
makingFood(3,30) // Prato existente com o dobro de tempo padrão
console.log('----------------------------')
makingFood(4,26) // Prato existente com mais do dobro de tempo padrão e menos do triplo
console.log('----------------------------')
makingFood(5,24) // Prato existente com o triplo do tempo padrão
console.log('----------------------------')
makingFood(5,28) // Prato existente com mais do triplo do tempo padrão
console.log('----------------------------')
makingFood(3,10) // Prato existente com tempo menor que o padrão