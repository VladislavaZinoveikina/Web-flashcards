/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Question({
  userId, questions, topic, allQuest,
}) {
  const question = questions[Math.floor(Math.random() * questions.length) + 1];
  console.log(questions);

  const questionId = question.id;
  return (
    <Layout>
      <header>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="https://elbrusboot.camp/">Эльбрус</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href={`/static/${userId}`}>Статистика</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/topic/${userId}`}>Возможно топики</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <script defer src="../js/publicScript.js" />
      <div className="main">
        <div className="title">
          <h1 id={allQuest} className="topicTitle">{topic.name}</h1>
          <h3 id={questionId} className="questTitle">{question.text}</h3>
        </div>
        <form className="answerForm">
          <div className="mb-3 questionForm">
            <input type="text" className="form-control answer" name="answer" />
            <button type="submit" data-userId={userId} className="btn btn-primary btnAnswer">Отправить</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
