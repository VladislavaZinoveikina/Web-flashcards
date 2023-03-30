const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({ tryAgain }) {
  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <link rel="stylesheet" href="../css/publicStyles.css" />
        <title>Document</title>
      </head>
      <div className="container-xl regisration">
        <h3>Войти</h3>
        <form action="/login" method="POST">
          <div className="mb-3">
            <label htmlFor="login" className="form-label">Login</label>
            <input name="inputLogin" type="text" className="form-control registrationName inputLogin" id="login" />
            <div id="emailHelp" className="form-text">We'll never share your Login with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">Password</label>
            <input type="password" name="inputPassword" className="form-control registrationPassword inputPassword" id="pass" />
          </div>
          <button type="submit" className="btn btn-primary btn loginBtn">Войти</button>
        </form>
        <p>{tryAgain}</p>
        <a defer href="/registration"> У меня еще нет аккаунта </a>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossOrigin="anonymous" />
      <body />
    </html>

  );
};


{/* <form action="/login" method="POST">
        <h1>Verification page</h1>
        <p>Type in your name</p>
        <input name="inputLogin" type="text" className="inputLogin" />
        <p>Type in your password</p>

        <input name="inputPassword" type="text" className="inputPassword" />
        <button type="submit" className="btn loginBtn">Отправить</button>
      </form>
      <p>{tryAgain}</p>
      <a defer href="/registration"> У меня еще нет аккаунта </a> */}
