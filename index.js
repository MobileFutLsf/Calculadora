function calcular(tipo, valor){
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('resultado').value = '';
        }
        if (valor === '+' || valor === '/' || valor === '*' || valor === '-' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
        if (valor === '=') {
            let resultado = document.getElementById('resultado').value
            console.log(eval(resultado));
            document.getElementById('resultado').value = eval(resultado);
        }
        
    }
    else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}