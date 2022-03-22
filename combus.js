function calcula(){

    var valorcolocar = Number(document.getElementById("valorcolocar"));
    var valorlitro = Number(document.getElementById("valorlitro"));

    var resultado = valorlitro * valorcolocar;
    
    alert('a quantidades de litros a ser colocado será ' + resultado);
}