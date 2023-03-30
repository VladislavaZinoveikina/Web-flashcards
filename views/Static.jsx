const React = require('react');

const Layout = require('./Layout');

module.exports = function Static({ reports }) {
  // const date = String(reports[0].createdAt);
  // const date1 = date.slice(0, 11);
  // console.log(date1);
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
                  <a className="nav-link active" aria-current="page" href={`/static/${reports[0].userId}`}>Статистика</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/topic/${reports[0].userId}`}>Возможно топики</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <h2>История игр</h2>
      <div className="container-xl">
        <table className="table">
          {reports?.map((report) => (
            <tr>
              <div key={report.id}>
                <td><div>{report['User.login']}</div></td>
                <td><div>{report['Topic.name']}</div></td>
                <td><div>{report.rightAnswersNumber}</div></td>
                <td><div>{report.questionsNumber}</div></td>
                <td>
                  {' '}
                  <div>{String(report.createdAt).slice(0, 15)}</div>
                </td>
              </div>

            </tr>
          ))}
        </table>
      </div>

    </Layout>
  );
};
