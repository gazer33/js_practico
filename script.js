const h1 = document.querySelector('h1');
const p = document.querySelector('#result');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues);
function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs= input1.value + input2.value;
    p.innerText="Resultado:" + "" +sumaInputs;
}

btn.addEventListener('submit', sumarInputValues);
 
//console.log({event});

function btnOnclick(){
const sumaInputs = input1.value + input2.value;
p.innerText= "resultado:"+ " " + sumaInputs;
}