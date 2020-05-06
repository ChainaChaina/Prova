function telefone(array, nome) {

    function isString(value) {
        var a = typeof value;
        var b = "string"
        if (a == b) {
            return a
        }
    }
    var arr = array.filter(isString);
    var arr = arr.sort() // Esse sort eu fiz antes de perceber que a lista era em ordem alfabética mas é sempre bom garantir, então deixei ele ai...

    var arra = arr.indexOf(nome)
    if (arra == -1) {
        console.log("nome não encontrado");
        return -1
    }


    for (var i = 0; i < arr.length; i++) {


        if (array[i] == nome) {
            console.log('achamos o ', nome, ' telefone: ', array[(i) - 1]);
            return 0;
        }
    };
    console.log('não encontrado');
};

var array = [999999, 'alberto', 999888, 'bruna', 999776, 'cirilo', 99988887, 'dani', 98726378, 'elder', 98726378, 'elthon', 98726378, 'fiora', 98726378, 'flara', 98726378, 'zair'];

var nome = 'alberto';
telefone(array, nome);

var nome = 'julia';
telefone(array, nome);




// Procurar por um array só com os nomes diminuiria o "custo" de procura pela metade. 
//Se a função achar o nome, ela continua. Se não ela retorna negativo ali mesmo. Economizando tempo.