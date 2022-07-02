var num1 = "";
var num2 = "";
var aux = "";
var finish_n1 = false;
var finish_n2 = false;

function operation(identificador) {
  debugger
  let entrada = document.getElementById('entrada');

  if( entrada !== undefined ){
    aux = "fin";

    if(identificador === "suma"){
      operador = "+";
    }
    if( identificador === "resta"){
      operador = "-";
    }
    if( identificador === "mult"){
      operador = "*";
    }
    if( identificador === "div"){
      operador = "/";
    }
    entrada.value = operador;
  }
}

function number_calc(num) {
  debugger
  let entrada = document.getElementById('entrada');

  if( aux === "fin" ) {
    aux = "";
    finish_n1 = true;
  }

  if( entrada !== undefined ) {
    if (num1 === "" || !finish_n1 ) {
      ant = num;
      num1 += num;
    } else if (num2 === "" || !finish_n2 ) {
      ant = num;
      num2 += num;
    }
  }

  if (entrada.value === "error" || entrada.value === "+" || entrada.value === "-" || entrada.value === "*" ||
    entrada.value === "/" || entrada.value === "." ){
    entrada.value = num;
  }else{
    entrada.value += num;
  }
}


function calculo() {
  debugger
  let entrada = document.getElementById('entrada');
  let result;

  num1 = Number(num1);
  num2 = Number(num2);

  if( entrada !== "") {
    if (num1 !== "" && num2 !== "") {
      if( operador === "+"){
        result = (num1 + num2);
        entrada.value = result;
      }
      if( operador === "-"){
        result = (num1 - num2);
        entrada.value = result;
      }
      if( operador === "*"){
        result = (num1 * num2);
        entrada.value = result;
      }
      if( operador === "/"){
        if( num2 === 0){
          entrada.value = "error";
        }else{
          result = (num1 / num2);
          entrada.value = result;
        }

      }

      num1 = result;
      num2 = "";
      finish_n1 = true;
      finish_n2 = false;
      aux =  "";

    }
  }
}

function clean() {
  debugger
  let entrada = document.getElementById('entrada');

  num1 = "";
  num2 = "";
  aux = "";
  finish_n1 = false;
  finish_n2 = false;
  operador = "";
  entrada.value = "";


}