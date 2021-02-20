let num;
let score;

const question1 = {question: 'Земля самая близкая планета к Солнцу?', correctAnswer: 'Нет'}
const question2 = {question: 'Вы любите своих родителей?', correctAnswer: 'Да'}
const question3 = {question: 'JS написан за 10 дней?', correctAnswer: 'Да'}
const question4 = {question: 'Кошка это насекомое?', correctAnswer: 'Нет'}

let question = [question1, question2, question3, question4];

//счетчик правильных ответов - используется в функции getAnswer
let counter = 0;

function getAnswer() {
  question.forEach((item) => {
  let i = prompt(item.question);
	if (item.correctAnswer.toLowerCase() === i.toLowerCase()) {
  	counter++;
  }
})
}

getAnswer();

//вывод количества правильных ответов в HTML
let answer = document.querySelector('.correctAnswer');
answer.innerHTML = 'Правильных ответов: ' + counter;
