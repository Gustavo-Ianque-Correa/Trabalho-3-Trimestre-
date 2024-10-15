
var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var IMC = 0

var valorAl = altura.value;
var pesoAl = peso.value;

function calcularIMC() {

    var valorAl = altura.value;
    var pesoAl = peso.value;
    var valorAlM = valorAl / 100;
    var IMC = (pesoAl / (valorAlM * valorAlM)).toFixed(2)

    if (valorAl <= 0 || pesoAl <= 0) {
        window.alert("coloca valor ai rei")
    } else if (IMC <= 18.5) {
        window.alert("Magreza " + "Seu Imc é :" + IMC)
    } else if (IMC <= 24.99) {
        window.alert("Peso Normal " + "Seu Imc é :" + IMC)
    } else if (IMC <= 29.99) {
        window.alert("Pré-Obesidade " + "Seu Imc é :" + IMC)
    } else if (IMC <= 34.99) {
        window.alert("Obesidade Grau I. " + "Seu Imc é :" + IMC)
    } else if (IMC <= 39.99) {
        window.alert("Obesidade Grau II. " + "Seu Imc é :" + IMC)
    } else if (IMC >= 40) {
        window.alert("Obesidade Grau III. " + "Seu Imc é :" + IMC)
    }
} //valores do Tribunal da Justiça da Paraiba