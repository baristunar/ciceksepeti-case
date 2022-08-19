import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '@Components/Icon';
import { addProduct, removeProduct } from '@Store/basket';

const ProductItem = ({ product }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const onClickHandler = ({ product }) => {
    setIsButtonActive(!isButtonActive);

    if (product?.stock > 0) {
      setQuantity(quantity + 1);
      dispatch(addProduct({ ...product, quantity: 1 }));
    }
  };

  const quantityOnClickHandler = ({ type, product }) => {
    if (type === 'increment' && quantity < product?.stock) {
      setQuantity(quantity + 1);

      dispatch(addProduct({ ...product, quantity: 1 }));
    }

    if (type === 'decrement' && quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(removeProduct({ ...product, quantity: 1 }));
    }
  };

  useEffect(() => {
    if (quantity === 0) {
      setIsButtonActive(false);
    }
  }, [quantity]);

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
            <div className="product__item-btn-quantity">
              <button
                onClick={() =>
                  quantityOnClickHandler({ type: 'decrement', product })
                }
              >
                <Icon name="minus" />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  quantityOnClickHandler({ type: 'increment', product })
                }
              >
                <Icon name="plus" />
              </button>
            </div>
          ) : (
            <button
              className="product__item-btn"
              onClick={() => onClickHandler({ product })}
            >
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
