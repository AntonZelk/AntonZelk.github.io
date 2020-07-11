import React from 'react';
import { Link } from 'react-router-dom';

import './Content.scss';

const Content = () => {
  return (
    <div className="cont">
      <h1>
        Каждый ученик для меня - <span>особенный</span>
      </h1>
      <div className="cards">
        <Link to="/price">
          <div className="card">
            <img
              className="cont2"
              src="./img/cont1.jpg"
              width="200px"
              height="150px"
              alt="dasd"
            />
            <p className="cont1">Обучение Польскому</p>
          </div>
        </Link>
        <Link to="/price">
          <div className="card">
            <img
              className="cont2"
              src="./img/cont2.jpg"
              width="200px"
              height="150px"
              alt="dasd"
            />
            <p className="cont1">Подготовка к экзаменам</p>
          </div>
        </Link>
        <Link to="/price">
          <div className="card">
            <img
              className="cont2"
              src="./img/cont3.jpg"
              width="200px"
              height="150px"
              alt="dasd"
            />
            <p className="cont1">Переводы</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Content;
