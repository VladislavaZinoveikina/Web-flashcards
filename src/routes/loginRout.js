const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { User, sequelize } = require('../../db/models');

const renderTemplate = require('../../lib/renderReactModule');
const Layout = require('../../views/Layout');

const Login = require('../../views/Login');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

router.post('/login', async (req, res) => {
  const { inputLogin, inputPassword } = req.body;
  //   console.log(newLogin, newPassword)
  try {
    const user = await User.findOne({ where: { login: inputLogin, password: inputPassword } });
    if (user === null) {
      const tryAgain = 'Такой пользователь не найден. Попробуйте ещё раз.';
      renderTemplate(Login, { tryAgain }, res);
    } else {
      res.redirect(`/topic/${user.id}`);
    }
  }
  //  renderTemplate(Home, {listArr}, res);  }

  catch (error) {
    res.send(`Error -----> ${error}`);
  }
});

module.exports = router;
