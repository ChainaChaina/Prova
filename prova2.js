function telefone(array, nome) {
    for (var i = 0; i < array.length; i++) {


        if (array[i] == nome) {
            console.log('achamos o ', nome, 'telefone: ', array[i - 1]);
            return 0;
        }
    };
    console.log('não encontrado');
};

var array = [999999, 'alberto', 999888, 'debora', 999776, 'julio', 99988887, 'dani'];

var nome = 'julio';
telefone(array, nome);

var nome = 'julia';
telefone(array, nome);