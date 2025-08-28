const btn = document.getElementById('btn');
const resultadoIMC = document.getElementById('resultadoIMC');
const pesoResultado= document.querySelectorAll('.pesoResultado');
const alturaResultado = document.querySelectorAll('.alturaResultado');
const imcResultado = document.querySelectorAll('.imcResultado');
const resultado = document.querySelectorAll('.resultado');
const textP = document.getElementById('saiba');

btn.addEventListener('click' , function(){
const pesoInput = Number(document.getElementById('pesoInput').value);
let  alturaInput = Number(document.getElementById('alturaInput').value);

if(isNaN(pesoInput)|| isNaN(alturaInput)){
   alert ('Insira um valor válido')
   document.getElementById('pesoInput').value = ''
   document.getElementById('alturaInput').value = ''
   return;
}

document.getElementById('pesoInput').value = ''
document.getElementById('alturaInput').value = ''


pesoResultado.forEach(el =>{
    el.textContent = `${pesoInput} Kg`
});
alturaResultado.forEach(el =>{
  el.textContent = `${alturaInput} Cm`
});
let alturaEmMetros = alturaInput > 3 ? alturaInput / 100 : alturaInput;
let imc = pesoInput / (alturaEmMetros * alturaEmMetros);
imcResultado.forEach(el =>{
    el.textContent = `${imc.toFixed(2)}`
});

textP.classList.add('hidden')
resultadoIMC.classList.remove('hidden');


if (imc <= 16){
   resultado.forEach(re =>{
     re.textContent = 'Muito abaixo do peso'
   })
};
if (imc > 16 && imc <= 18.49){

    resultado.forEach(re =>{
        re.textContent = 'Abaixo do peso'
    })
};
if (imc > 18.5 && imc <= 24.9){
   resultado.forEach(re =>{
      re.textContent = 'Peso normal'
   })
};
if(imc > 24.9 && imc <= 29.9){
   resultado.forEach(re =>{
    re.textContent = 'Acima do peso'
   });
};
if(imc >= 30){
   resultado.forEach(re =>{
      re.textContent = 'Obesidade'
   });
}
});
