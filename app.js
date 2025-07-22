// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let calculaAltura =  parseFloat(prompt('Digite sua Altura em metros (Ex.1.80):'));
let calculaPeso = parseFloat(prompt('Digite seu peso em quilogramas (EX: 80,5 ):'));

function calcularIMC(altura,peso){
    return  peso / (altura * altura);
}

function classificaIMC(imc){
    if(imc < 18.5){
        return 'Você está abaixo do peso';
    } else if (imc <25){
        return 'Você está com seu peso ideal. Parabens';
    } else if (imc <30){
        return 'Você está com sobrepeso. Atenção!!';
    }else if (imc <35){
        return 'Você está com obesidade grau I recomendo buscar um especialista.';
    }else if (imc < 40){
        return 'Obesidade grau II. Procure um especialista da área de saúde.';
    }else {
        return 'Obesidade grau III grave. Procure ajuda médica com urgência!'
    }
}

let resultado = calcularIMC(calculaAltura,calculaPeso).toFixed(2);
alert(`Seu IMC é = ${resultado} ${classificaIMC(resultado)}`);



