

function insert(num){
    document.getElementById("visor").value = document.getElementById("visor").value + num;
}

function soma(valorUm, valorDois){
    return parseInt(valorUm) + parseInt(valorDois)
    
}  

function backspace() {
    document.getElementById('visor').value = ''
    document.getElementById('answer').value = ''
}

function equal(visorValue){
    var numeroUm = visorValue.substring( 0 , visorValue.indexOf("+"));
    var numeroDois = visorValue.substring(visorValue.indexOf("+") + 1);
    var resultado = soma(numeroUm, numeroDois)
    document.getElementById('answer').value = resultado
}