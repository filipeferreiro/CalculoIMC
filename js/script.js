var capturando_nome = "";
var capturando_altura = "";
var capturando_peso = "";

function imcFunc(){
    capturando_nome = document.getElementById('nome').value;
    capturando_altura = document.getElementById('altura').value;
    capturando_peso = document.getElementById('peso').value;

    var altura = parseFloat(capturando_altura);  
    var peso = parseFloat(capturando_peso);

    var imc= peso/(altura*altura);

    if(capturando_nome=="" || capturando_altura=="" || capturando_peso==""){
        document.getElementById('resultado').innerHTML = "VALORES OBRIGATÓRIOS NÃO FORAM PREENCHIDOS!!"
    }else {
            if(imc <= 18.50 ){
                var imcResult = (String(imc));
                imcResult = imcResult.substring(0,4);
                var categoria = ". Está abaixo do normal, deficit de peso!";
                } else if(imc < 25.00) {
                var imcResult = (String(imc));
                imcResult = imcResult.substring(0,4);
                var categoria = ". Está na média, seu peso está normal.";
                } else if(imc < 30.00){
                var imcResult = (String(imc));
                imcResult = imcResult.substring(0,4);
                var categoria = ". Está acima do normal, escesso de peso!";
                } else {
                var imcResult = (String(imc));
                imcResult = imcResult.substring(0,4);
                var categoria = ". Está muito acima do normal, obesidade!";
                }

            document.getElementById('resultado').innerHTML = ("Sr(a) " + capturando_nome + " o seu imc(indice de massa corporal) é " + imcResult + categoria);
        }
}