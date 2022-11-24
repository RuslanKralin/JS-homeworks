const btn = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random";

async function getDog() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    image.src = data.message;
  } catch (error) {
    console.log(error);
  }
}
getDog();

btn.addEventListener("click", () => {
  let isLoaded = image.complete; // пока не загрузится картинка не вызовется функция опять
  if (isLoaded) {
    // пока не загрузится картинка не вызовется функция опять
    getDog();
  }
});
