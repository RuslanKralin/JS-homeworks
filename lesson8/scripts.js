//HTML на JS

let title = document.createElement('title');
title.innerHTML = 'homework №8';

let metaUtf8  = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8'); //задали атрибут и его значение

document.head.appendChild(title);
document.head.appendChild(metaUtf8);
/////////////////////////////////////////
let div1 = document.createElement('div');
div1.innerHTML = "ggg"
let div = document.querySelector("body")

div1.classList.add('titles');
div.appendChild(div1);
console.log(div);

let h1 = document.createElement('h1');
h1.classList.add('mainTitle');
h1.innerHTML = 'Choose Your Opinion';
document.body.appendChild(h1);
