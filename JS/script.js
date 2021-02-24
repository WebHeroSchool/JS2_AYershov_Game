let num;
let score;

const question1 = {question: 'Земля самая близкая планета к Солнцу?', correctAnswer: 'Нет'}
const question2 = {question: 'Вы любите своих родителей?', correctAnswer: 'Да'}
const question3 = {question: 'JS написан за 10 дней?', correctAnswer: 'Да'}
const question4 = {question: 'Кошка это насекомое?', correctAnswer: 'Нет'}

let question = [question1, question2, question3, question4];

//счетчик правильных ответов - используется в функции getAnswer
let counter = 0;

// Функция showResults перебирает массив путем запуска каждого вопроса в модальное окно с полем для ввода ответа,
// ответ поступает в переменную i, если ответ строго равен ответу из массива, то счетчик увеличивается на единицу.
// Если нет - ничего не происходит.
// И так по каждому вопросу. После последнего вопроса перебор закончен, а функция showResults продлжает:
// в переменную answer передается ссылка на тег с классом .correctAnswer из HTML и затем текст из этого тега заменяется
// на кол-во верных ответов.
function showResults() {
  question.forEach((item) => {
  let i = prompt(item.question);
	if (item.correctAnswer.toLowerCase() === i.toLowerCase()) {
  	counter++;
  }
})
let answer = document.querySelector('.correctAnswer');
answer.innerHTML = 'Правильных ответов: ' + counter;
}

//здесь создается переменная со ссылкой на тег с классом .runTest из html
//затем по клику на этот тег срабатывает функция
const showResultsButton = document.querySelector('.runTest');
showResultsButton.addEventListener('click', () => {
  showResults();
});

//это пока не понятно для чего сделали - видимо, дальше будем дорабатывать
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

previousButton.addEventListener('click', (event) => {
  console.log('Предыдущий слайд');
});

nextButton.addEventListener('click', (event) => {
  console.log('Следующий слайд');
});
