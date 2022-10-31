const questions = {
"Кто придумал javascript?": [['Брендан Эйх', 'Тим Бернерс-Ли', 'Билл Гейтс', 'Марк Цукерберг'], 'Брендан Эйх',],
"Какой тэг добавляет скрипт в HTML?": [['screen', 'scripe', 'script', 'scripty'], 'script', ],
"Какой метод выводит текст на страницу?": [['console.log()', 'document.write()', 'this', 'str.length'],'document.write()', ],
"Какой из методов не относится к массивам?": [['splice', 'slice', 'concat', 'Number()'], 'Number()',],
"Поиск в массиве. Какой метод поможет найти что-нибудь в массиве?": [['splice', 'slice', 'concat', 'indexOf'],'indexOf',], 
"Какое значение нельзы использовать для названия переменной?": [['return', 'fix', 'add', 'qwertyasdfg'], 'return',],
};
//достаём вопросы из массива
let question = Object.keys(questions);
console.log(question);//массив с вопросами

//достаём занчения ключей из массива
let answers = Object.values(questions);
console.log(answers);//шесть массивов с вариантами ответов и правильным ответом

let questionField = document.querySelector('.quetion');//нашли div где хранится вопрос
console.log(questionField);

let answersField = document.querySelector('.Answers');//нашли главный div где ещё 4 div с вариантами ответов
console.log(answersField);

let countField = document.querySelector('.counter');//нашли div где хранятся счётчики с вопросом и правильными ответами
console.log(countField);

let count = -1;//счётчик вопросов
let score = 0;// счётчик правильных ответов

function fill(){
    createQuetionClick();
    createNewQuetion();
}

window.onload = fill;//при загрузке страницы загружаются вопросы с вариантами ответов

function createQuetionClick(){
    for(let div of answersField.children){
        div.addEventListener("click", () =>{
            createNewQuetion(div); 
        });
    }
}

function createNewQuetion(div){
    if (div && div.textContent == answers[count][1]) {
        score++;}

    if(count == question.length -1){
        totalScore();
        return;
    }
    count++;
    
    questionField.innerHTML = question[count];
    for (let i = 0; i < answers[0][0].length; i++) {
        answersField.children[i].innerHTML = answers[count][0][i];
    }
}


function totalScore(){
    countField.innerHTML = `YOUR SCORE : ${score} / ${question.length}`;
}
