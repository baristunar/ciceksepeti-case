import React from 'react';
import './styles.scss';
import Icon from '@Components/Icon';
import { Container, Button } from '@Components/ui';

const Navbar = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__top">
          <a href="/">
            <Icon name="logo" />
          </a>

          <div className="header__top-search">
            <Icon name="search" />
            <input
              className="header__top-search-input"
              type="text"
              placeholder="Ürün Ara"
            />
            <Button text="Ara" className="header__top-search-btn" />
          </div>

          <Button className="header__top-basket" text="Sepetim" icon="cart" />
        </div>
        <div className="header__top-responsive-search">
          <div className="header__top-search">
            <Icon name="search" />
            <input
              className="header__top-search-input"
              type="text"
              placeholder="Ürün Ara"
            />
            <Button text="Ara" className="header__top-search-btn" />
          </div>
        </div>
      </Container>

      <div className="header__bottom">
        <Container>
          <h1>ÇiçekSepeti</h1>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
