import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div>
      <ul className="menu">
        <li className="lol1">Yulia Verbilo</li>
        <li className="lol3">
          <Link className="link-menu" to="/">
            Главная
          </Link>
        </li>
        <li className="lol3">
          <Link className="link-menu" to="/price">
            Услуги
          </Link>
        </li>
        <li className="lol3">
          <Link className="link-menu" to="/about">
            Обо мне
          </Link>
        </li>
        <li className="lol2">+375447372677</li>
      </ul>
    </div>
  );
};

export default Header;
