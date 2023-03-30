
const mainDiv = document.querySelector('.main');
const btnAnswer = document.querySelector('.btnAnswer');
const form = document.querySelector('.answerForm');
const questTitle = document.querySelector('.questTitle');
const topicTitle = document.querySelector('.topicTitle');


let sucsessCount = 0;


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const questionId = questTitle.id;
  const userId = btnAnswer.dataset.userid;
  const givenTry = e.target.answer.value;
  const allQuest = topicTitle.id;
  const response = await fetch('/question', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      givenTry, userId, questionId, sucsessCount,
    }),
  });
  const {
    nextQuestion, topic, rightAnswer,
  } = await response.json();
  if (nextQuestion) {
    const nextQuestionId = nextQuestion.id;
    if (rightAnswer.toLowerCase() === givenTry.toLowerCase()) {
      sucsessCount += 1;
      questTitle.id = nextQuestionId;
      questTitle.innerText = nextQuestion.text;
      e.target.answer.value = '';
    } else {
      alert('Неверный ответ');
      questTitle.id = nextQuestionId;
      questTitle.innerText = nextQuestion.text;
      e.target.answer.value = '';
    }
  } else {
    if (rightAnswer.toLowerCase() === givenTry.toLowerCase()) {
      sucsessCount += 1;
    }
    mainDiv.innerHTML = `
    <h1>${sucsessCount}/${allQuest}</h1>
    <a href="/topic/${userId}">Вернуться к выбору тем</a>
    <a href="/static/${userId}">Посмотреть мои результаты</a>
    `
    const response = await fetch('/round', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
         userId, questionId, sucsessCount,
      }),
    });
  }
});
