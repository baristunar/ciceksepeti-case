import PropTypes from 'prop-types';
import './styles.scss';
import ProductItem from './ProductItem';
import Icon from '@Components/Icon';

const ProductList = ({ products }) => {
  return (
    <div className="product__list">
      <h3 className="product__list-title">
        <Icon name="leaf" />
        <span>Tüm Kategoriler</span>
      </h3>
      <div className="product__list-wrapper">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      priceUnit: PropTypes.string.isRequired,
      categoryIDS: PropTypes.arrayOf(PropTypes.number.isRequired),
      freeShipping: PropTypes.bool.isRequired,
      stock: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ProductList;
