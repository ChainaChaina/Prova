function palindroma(palavra) {
    n = palavra.length;
    console.log(n);
    var array = palavra.split('');
    console.log(array);
    var invertido = array.slice(0).reverse();
    console.log(invertido);


    if (JSON.stringify(array) == JSON.stringify(invertido)) {
        console.log('certo');
    } else {
        console.log('errado');

    }



};

var palavra;
palavra = 'arara';
console.log(palavra)
palindroma(palavra);

palavra = 'cachorro';
console.log(palavra)
palindroma(palavra);

// eu fiz isso antes saber que existe o metodo reverse()