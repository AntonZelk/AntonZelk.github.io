import React from 'react';

import './MyJob.scss';

const MyJob = () => {
  return (
    <div className="elements">
      <div className="elem">
        <img className="imgJob" src="./img/job1.jpg" alt="dasd" />
        <div className="teeext">
          <span className="name">
            Индивидуальный репетитор с выездом на дом
          </span>
          <span className="price">Стоимость</span>
          <span className="priceNum">40 руб/час</span>
          <p className="res">
            Приеду к вам в любую часть города в пределах МКАД
          </p>
        </div>
      </div>
      <div className="elem">
        <img className="imgJob" src="./img/job2.jpg" alt="dasd" />
        <div className="teeext">
          <span className="name">
            Индивидуальный репетитор с выездом ко мне домой
          </span>
          <span className="price">Стоимость</span>
          <span className="priceNum">30 руб/час</span>
          <p className="res"> Занятие находится по адресу...</p>
        </div>
      </div>
      <div className="elem">
        <img className="imgJob" src="./img/job3.jpg" alt="dasd" />
        <div className="teeext">
          <span className="name">Индивидуальный репетитор ONLINE</span>
          <span className="price">Стоимость</span>
          <span className="priceNum">30 руб/час</span>
          <p className="res">Skype, Zoom, Discord, все для вашего удобства</p>
        </div>
      </div>
    </div>
  );
};

export default MyJob;
