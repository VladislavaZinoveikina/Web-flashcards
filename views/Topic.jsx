const React = require('react');
const Layout = require('./Layout');

module.exports = function Topic({ topics, userId }) {
  return (
    <Layout>
      <header>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="https://elbrusboot.camp/" target="_blank" rel="noreferrer">Эльбрус</a>
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
      <div className="constainer-xl topics">
        {topics?.map((topic) => (
          <div className="card" style={{ width: '18rem' }} key={topic.id}>
            <div className="card-body">
              <h5 className="card-title">{topic.name}</h5>
              <a href={`/${userId}/${topic.id}`} className="card-link">Играть</a>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  );
};
