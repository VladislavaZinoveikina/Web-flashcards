
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');


const {User, sequelize} = require('../../db/models');

const renderTemplate = require('../../lib/renderReactModule');
const Layout = require('../../views/Layout');

const Registration = require('../../views/Registration');
const router = express.Router();

/* GET home page. */
router.get('/registration', (req, res) => {
  renderTemplate(Registration, {},res)
})

// const password = document.getElementsByClassName("registrationPassword");
const regularka = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

router.post('/registration', async (req, res) => {
  const {newLogin, newPassword} = req.body
  console.log(newLogin, newPassword)

  
  try{
    if ( regularka.test(newPassword) ){
      const newElement = await User.create({login: newLogin, password: newPassword})
      res.redirect('/')
      console.log(newElement)
    console.log('Пароль корректный');
    } else {
    const badPass = 'Ошибка!\nПароль должен состоять минимум из одной буквы верхнего и нижнего регистра, цифры, а также быть не короче 6 символов.';
    renderTemplate(Registration, {badPass}, res)
    }
    
  //  renderTemplate(Home, {listArr}, res);  }
  }
  catch (error){
    res.send(`Error -----> ${error}`)
  }
});

module.exports = router;
