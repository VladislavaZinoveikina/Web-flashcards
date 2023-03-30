require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const routerRegistration = require('./routes/registrationRout');
const routerLogin = require('./routes/loginRout');

const { sequelize } = require('../db/models');
const renderTemplate = require('../lib/renderReactModule');
const topicRout = require('./routes/topicRout');
const questionRout = require('./routes/questionRout');
const roundRout = require('./routes/roundRout')

const staticRout = require('./routes/staticRout');



const app = express();

// const questionRout = require('./routes/questionRout');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;
app.use('/', routerRegistration);
app.use('/', routerLogin);
app.use('/', staticRout);
app.use('/', roundRout);
app.use('/', topicRout);
app.use('/', questionRout);




/* app.get('/', (req, res) => {
  res.redirect('/topic');
}); */

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
