const formInputField = document.querySelector(".inputField");
const inputGeneral = document.querySelector(".inputGeneral");
const btnInputField = document.querySelector(".inputField-btn");
const budget = document.querySelector("#budget");
const balance = document.querySelector("#balance");

const addProduct = document.querySelector(".add");
const inputName = document.querySelector(".inputName");
const inputPrice = document.querySelector(".inputPrice");
const ul = document.querySelector(".nameProductList");

let productListData = []; //для локал стор продукты и цены
let budgetDataValue; //переменная для хранения значения бюджета для локал стор
let leftDataValue;

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("productListData") !== null) {
    let localProductData = localStorage.getItem("productListData");
    if (localProductData.length > 0)
      productListData = JSON.parse(localProductData);

    productListData.forEach(function (newProduct) {
      makeLi(newProduct.name, newProduct.price);
    });

    // productUpdate();
  }

  const budgetFromLocalStorage = localStorage.getItem("budgetData");
  if (Number(budgetFromLocalStorage)) {
    budgetDataValue = Number(budgetFromLocalStorage);
    budget.innerHTML = budgetDataValue;
  }
  //добавить тоже с остатком баланса
  const balanceFromLocalStorage = localStorage.getItem("balanceData");
  if (Number(balanceFromLocalStorage)) {
    leftDataValue = Number(balanceFromLocalStorage);
    balance.innerHTML = leftDataValue;
  }
});

formInputField.children[1].addEventListener("click", (e) => {
  e.preventDefault(e);
  if (/^\d{1,10}$/g.test(formInputField.children[0].value)) {
    budget.append(+formInputField.children[0].value);
    balance.append(+formInputField.children[0].value);

    formInputField.style.display = "none";

    let budgetDataValue = +formInputField.children[0].value;
    localStorage.setItem("budgetData", JSON.stringify(budgetDataValue));
  }
});

btnInputField.addEventListener("click", () => {
  if (!inputGeneral.value) {
    alert("Give Me Money!");
    return; //чтоб ничего ещё не произошло нужно вернуться
  }
});

addProduct.addEventListener("click", (e) => {
  e.preventDefault(e);
  //валидация на заполнение полей
  if (
    inputName.value &&
    /^\d{1,10}$/g.test(inputPrice.value) &&
    budget.textContent !== ""
  ) {
    //создаём объект для продукта, который добавим в массив
    let newProduct = {
      name: inputName.value,
      price: +inputPrice.value,
    };

    makeLi(newProduct.name, newProduct.price); //объявляем функцию со значениями нового имени и новой цены на добавленный продукт
    newBalance(inputPrice.value);
    lowBalance(balance.textContent);

    productListData.push(newProduct);

    inputName.value = "";
    inputPrice.value = "";

    localStorage.setItem("productListData", JSON.stringify(productListData)); //ключ и значение/добавили в локал стор

    //productUpdate();
  }
});

let localProductData = localStorage.getItem("productListData") || [];
if (localProductData.length > 0) productListData = JSON.parse(localProductData);

ul.innerHTML = "";

function makeLi(inputName, inputPrice) {
  let li = document.createElement("li");
  li.innerHTML = `${inputName}:  ${inputPrice}$;`;
  ul.append(li);
}
function newBalance(inputPrice) {
  balance.innerHTML = (balance.textContent - inputPrice).toFixed(2);

  let leftDataValue = Number(balance.innerHTML);
  localStorage.setItem("balanceData", JSON.stringify(leftDataValue));
}

const massege = document.querySelector(".extraMassege");
const left = document.querySelector(".left");

function lowBalance(balance) {
  if (balance < 0) {
    massege.removeAttribute("none");
    massege.style.display = "block";
    left.style.background = color = "red";
  }
}

// productListData.forEach(function (newProduct) {
//   let productElement = document.createElement("li");
//   productElement.innerHTML = `<li class="nameProduct">
//     ${newProduct.name}:
//      ${newProduct.price} $</li>
//     `;
//   ul.appendChild(productElement);
// });
