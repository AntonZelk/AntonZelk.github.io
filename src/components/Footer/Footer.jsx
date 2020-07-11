import React from 'react';

import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <span className="fot1">+375447372677</span>
        <span className="fot1">Yulia_verbilo@gmail.com</span>
      </div>
      <div className="footer2">
        <span className="fot4">
          <Link className="link-menu2" to="/price">
            Услуги
          </Link>
        </span>
        <span className="fot5">
          {' '}
          <Link className="link-menu2" to="/about">
            Обо мне
          </Link>
        </span>
      </div>
      <div className="footer3">
        <a href="https://vk.com/yulia_verbilo">
          <img
            className="fot2"
            src="./img/fot1.png"
            width="40px"
            height="40px"
            alt="dasd"
          />
        </a>
        <a href="https://www.instagram.com/rose_bud7372/">
          <img
            className="fot2"
            src="./img/fot2.png"
            width="45px"
            height="40px"
            alt="dasd"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
