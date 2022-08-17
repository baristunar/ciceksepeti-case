import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@Components/Icon';

const ProductItem = ({ product }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setIsButtonActive(!isButtonActive);

    if (product?.stock > 0) {
      setCount(count + 1);
    }
  };

  const countOnClickHandler = (type) => {
    if (type === 'increment' && count < product?.stock) {
      setCount(count + 1);
    }

    if (type === 'decrement' && count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {product.stock > 0 && (
        <div className="product__item">
          <img
            className="product__item-img"
            // eslint-disable-next-line no-undef
            src={require(`@Assets/images/${product?.image}`)}
            alt={product?.title}
            width="100%"
          />
          <h4 className="product__item-title">{product?.title}</h4>
          <p
            className={`product__item-cargo ${
              !product?.freeShipping && 'product__item-cargo--invisible'
            }`}
          >
            Ücretsiz Teslimat
          </p>

          <p className="product__item-price">
            <span>{product?.price}</span>
            <span>{product?.priceUnit}</span>
          </p>

          {isButtonActive ? (
            <div className="product__item-btn-count">
              <button onClick={() => countOnClickHandler('decrement')}>
                <Icon name="minus" />
              </button>
              <span>{count}</span>
              <button onClick={() => countOnClickHandler('increment')}>
                <Icon name="plus" />
              </button>
            </div>
          ) : (
            <button className="product__item-btn" onClick={onClickHandler}>
              <span>Sepete Ekle</span>
            </button>
          )}
        </div>
      )}
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
