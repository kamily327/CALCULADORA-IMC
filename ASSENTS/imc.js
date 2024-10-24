function imc(){

    const peso =Number(document.getElementById('inputp').value)
    const altura =Number( document.getElementById ('altura').value)
    const res = document.getElementById ('res')
if (peso != '' && altura != ''){
    
    const valorimc= (peso / (altura*altura)).toFixed(2)
    let classificacao = ''

if (valorimc < 18.5 ){
   
     classificacao = ' Voce esta abaixo do peso. 😥 '
}else if (valorimc < 25){
    classificacao = 'Voce Esta no Seu Peso Ideal Parabens. 🥳  '
}else if (valorimc < 30){
    classificacao = 'Voce esta Acima do seu peso ideal. 😥'
}else if (valorimc < 35) {
    classificacao = 'Voce esta com Obesidade Grau I  😰'
}else if (valorimc < 40) {
    classificacao = 'Voce esta com Obesidade  Grau II 😨 '
}else {
    classificacao = 'Voce esta com Obesidade Grau III , CUIDADO ⚠️⚠️⚠️'
}

  res.innerHTML = ` SEU IMC E DE ${valorimc} <br> ${classificacao} ` 
 

}
else if(peso == 0 || altura == 0) {
  alert('Erro Preencha os Dados Corretamentes')

}

} 
