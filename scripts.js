// pegando os elementos do formulário
const form = document.querySelector("form")
const inputAmount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


//Cotação das Moedas do dia
const USD = 6.08
const EUR = 6.42
const GBP = 7.75


//Manipula o input de valor para receber somente numeros
inputAmount.addEventListener("input", () =>{

  const hasCharactersRegex = /\D+/g
  inputAmount.value = inputAmount.value.replace(hasCharactersRegex, "")
})


//Capturando o Submit do Form
form.onsubmit = (event) => {
event.preventDefault() // nao da fefresh
//console.log(currency.value)  pega o valor do Select

switch(currency.value){
  case "USD" :
    convertCurrency(amount.value, USD, "US$")
    break
  case "EUR" :
    convertCurrency(amount.value, EUR, "€")
    break
  case "GBP" :
    convertCurrency(amount.value, GBP, "£")
    break  
}
}

// Função de conversão da moeda

function convertCurrency(amount, price, symbol){
//console.log(amount,price, symbol) checa se o select ta recebdno os valores
 try{
  //exibe cotação da moeda selecionada
  description.textContent = `${symbol} 1 = ${formatCurencyBRL(price)}`
  

  //calcula total
  let total = amount * price

total = formatCurencyBRL(total).replace("R$", "")
  //exibe resultado
  result.textContent = `${total} Reais`


  footer.classList.add("show-result")
 } catch (error){
  console.log(error)
  footer.classList.remove("show-result")
  alert("Não deu certo, tente mais tarde")
 }
}

//formta texto para real
function formatCurencyBRL(value) {
 // converte para numero para utilizar o toLocaleString para por no padrãp BRL 
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })
}





