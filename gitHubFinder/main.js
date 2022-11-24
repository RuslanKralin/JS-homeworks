const userName = document.querySelector("#userName");
const userPreview = document.querySelector("#userPreview");


userName.addEventListener("keyup", function () {
  if (userName.value != "") {
    fetch(`https://api.github.com/users/${userName.value}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => { //здесь работаем с ответом
        createUser(response);
      });
  } else clear();
});
////////////////////////////////////////
function createUser(response) {
  console.log(response);
  userPreview.style.display = "flex";

  if (response.name == undefined) {
    userPreview.innerHTML = `
    <div class="info wrapper">
    <div class="info__text">Name: <span>Null</span></div>
    <div class="info__text">BIO: <span>Null</span></div>
    <div class="info__text">Location: <span>Null</span></div>
    <div class="info__text">Company: <span>Null</span></div>
    <div class="info__text">ID: <span>Null</span></div>
    <div class="info__text">followers: <span>Null</span></div>
    <div class="info__text">email:<span>Null</span></div>
</div>
      `;
  } else {
    userPreview.innerHTML = `
      <div class="class="photo">
              <img class="photo img" src="${response.avatar_url}" />
          </div>
          <div class="user-info__wrapper">
              <div class="info__text">Name: <span>${response.name}</span></div>
              <div class="info__text">BIO: <span>${response.bio}</span></div>
              <div class="info__text">Location: <span>${response.location}</span></div>
              <div class="info__text">Company: <span>${response.company}</span></div> 
              <div class="info__text">ID: <span>${response.id}</span></div> 
              <div class="info__text">followers: <span>${response.followers}</span></div>
              <div class="info__text">email:<span>${response.email}</span></div>
          </div>
      `;
  }
}

function clear() {
  userPreview.style.display = "none";
}
