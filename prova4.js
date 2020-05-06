let array = [
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0]
];

console.table(array);


function muda(n1, n2) {
    console.log(n1)
    console.log(n2)

    console.log(array)


    array[n1][n2] = 5;

    if ((array[(n1 + 1)]) == undefined) {
        return
    }
    if ((array[(n2 + 1)]) == undefined) {
        return
    }


    if ((array[(n1 + 1)][n2]) == 1) {
        n1 = n1 + 1
        muda((n1), n2)
    }


    if ((array[(n1)][n2 + 1]) == 1) {
        n2 = n2 + 1
        muda((n1), n2)
    }

    if ((array[(n1 - 1)][n2]) == 1) {
        n1 = n1 - 1
        muda((n1), n2)
    }

    if ((array[(n1)][n2 - 1]) == 1) {
        n2 = n2 - 1
        muda((n1), n2)
    }

}
muda(0, 1)

//A lógica:
//existe uma matriz,
// o usuario escolhe um local dessa matriz (passo1)
// sistema olha qual o valor da matriz (passo 2)
//em uma função ele troca o valor da matriz pelo valor desejado (passo 3)
//ele checa se existe algum valor semelhante ao que foi escolhida no passo 1 em cima, nas laterais e em baixo (passo 4)
//para cada true, ele repete a função com os valores encontrados no passo 4
// se você chegar algum lugar da matriz que "não exista"- ignore