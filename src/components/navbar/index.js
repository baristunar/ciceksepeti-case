import { useEffect, useState } from 'react';
import './styles.scss';
import Icon from '@Components/Icon';
import { Container, Button } from '@Components/ui';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FREE_CARGO_AMOUNT = 500;
const FREE_SHIPPING_SUCCESS_TEXT = 'Kargonuz Bedava';
const FREE_SHIPPING_REMAINING_AMOUNT_TEXT = 'ürün daha ekleyin kargo bedava';
const INITIAL_SHIPPING = {
  barWidth: '0%',
  remainingAmount: FREE_CARGO_AMOUNT,
  text: 'ürün daha ekleyin kargo bedava'
};

const Navbar = () => {
  const basket = useSelector((state) => state.basket);
  const [shipping, setShipping] = useState({ ...INITIAL_SHIPPING });
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const searchOnChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchOnPressEnter = (e) => {
    if (e.key === 'Enter') searchingHandler();
  };

  const searchingHandler = () => {
    if (searchText.length >= 3) {
      navigate({
        pathname: '/',
        search: `?name=${searchText}`
      });
    }
  };

  const shippingPriceHandler = () => {
    if (basket.totalPrice >= FREE_CARGO_AMOUNT) {
      setShipping({
        barWidth: '100%',
        text: FREE_SHIPPING_SUCCESS_TEXT,
        remainingAmount: 0
      });
    } else {
      const remainingValue = Math.ceil(FREE_CARGO_AMOUNT - basket.totalPrice);
      const remainingPercentage = (basket.totalPrice / FREE_CARGO_AMOUNT) * 100;

      setShipping((prevState) => {
        return {
          ...prevState,
          text: FREE_SHIPPING_REMAINING_AMOUNT_TEXT,
          remainingAmount: remainingValue,
          barWidth: `${remainingPercentage}%`
        };
      });
    }
  };

  useEffect(() => {
    shippingPriceHandler();
  }, [basket]);

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
              value={searchText}
              onChange={searchOnChangeHandler}
              onKeyDown={searchOnPressEnter}
            />
            <Button
              text="Ara"
              className="header__top-search-btn"
              onClick={searchingHandler}
            />
          </div>

          <div className="header__top-basket-wrapper">
            <Button
              data-basket-count={basket.totalQuantity}
              className="header__top-basket"
              text="Sepetim"
              icon="cart"
            />

            {basket.totalQuantity > 0 && (
              <div className="header__top-basket-shipping">
                <div className="header__top-basket-shipping-desc">
                  <Icon
                    name="shock"
                    className="header__top-basket-shipping-icon"
                  />
                  {shipping.remainingAmount > 0 && (
                    <span>{shipping.remainingAmount} TL</span>
                  )}
                  <span>{shipping.text}</span>
                </div>
                <div
                  className="header__top-basket-shipping-bar"
                  style={{ '--bar-width': shipping.barWidth }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className={`header__top-responsive-search ${basket.totalQuantity > 0 && `--cart-bar-active`}`}>
          <div className="header__top-search">
            <Icon name="search" />
            <input
              className="header__top-search-input"
              placeholder="Ürün Ara"
              name="search"
              id="search"
              value={searchText}
              onChange={searchOnChangeHandler}
              onKeyDown={searchOnPressEnter}
            />
            <Button
              text="Ara"
              className="header__top-search-btn"
              onClick={searchingHandler}
            />
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
