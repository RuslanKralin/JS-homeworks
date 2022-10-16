const formInputField = document.querySelector(".inputField");
const inputGeneral = document.querySelector(".inputGeneral");
const btnInputField = document.querySelector(".inputField-btn");
const budget = document.querySelector("#budget");
const balance = document.querySelector("#balance");



formInputField.children[1].addEventListener("click", (e) => {
  e.preventDefault(e);
  if (
    /^\d{1,10}$/g.test(formInputField.children[0].value) 
    
  ){
    budget.append(+formInputField.children[0].value);
    balance.append(+formInputField.children[0].value);
    formInputField.style.display = "none";
  }

  
 });

btnInputField.addEventListener("click", () => { 
  if(!inputGeneral.value){
      alert('Give Me Money!');
      return;//чтоб ничего ещё не произошло нужно вернуться
  }
 });

const addProduct = document.querySelector('.add');
const inputName = document.querySelector('.inputName');
const inputPrice = document.querySelector('.inputPrice');
const ul = document.querySelector(".nameProductList");

addProduct.addEventListener('click', (e) => {
  e.preventDefault(e);
    if(
      inputName.value && 
      /^\d{1,10}$/g.test(inputPrice.value) &&
    budget.textContent !== ""
  ){
    makeLi(inputName.value, inputPrice.value);
    newBalance(inputPrice.value);
    lowBalance(balance.textContent);
    inputName.value = "";
    inputPrice.value = "";
  }
 })

function makeLi(inputName, inputPrice){
  let li = document.createElement('li');
  li.innerHTML = `${inputName}:  ${inputPrice}$;`
  ul.append(li);
  
}
 function newBalance(inputPrice){
   balance.innerHTML = (balance.textContent - inputPrice).toFixed(2);
 }

 const massege = document.querySelector('.extraMassege');
const left = document.querySelector('.left');

function lowBalance(balance){
  if(balance <0){
  massege.removeAttribute("none"); 
  massege.style.display = 'block';
  left.style.background = color = 'red'
  // left {
  //   animation: left 2s infinite; /* Параметры анимации */
  //  }
  //  @keyframes left {
  //   from { opacity: 1; /* Непрозрачный текст */ }
  //   to { opacity: 0; /* Прозрачный текст */ }
  //  }
  
  
}
}
