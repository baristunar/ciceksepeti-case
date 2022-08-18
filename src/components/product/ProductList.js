import PropTypes from 'prop-types';
import './styles.scss';
import ProductItem from './ProductItem';
import Icon from '@Components/Icon';
import { useEffect, useState } from 'react';

const ProductList = ({ products, activeCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = () => {
    if (activeCategory === 1) {
      setFilteredProducts(products);
    } else {
      const filteredData = products.filter((product) =>
        product.categoryIDS.includes(activeCategory)
      );
      setFilteredProducts(filteredData);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [products, activeCategory]);

  return (
    <div className="product__list">
      <h3 className="product__list-title">
        <Icon name="leaf" />
        <span>Tüm Kategoriler</span>
      </h3>

      {filteredProducts.length > 0 ? (
        <div className="product__list-wrapper">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product__list-notfound">
          Bu kategoride ürün bulunmamaktadır...
        </div>
      )}
    </div>
  );
};

ProductList.propTypes = {
  activeCategory: PropTypes.number.isRequired,
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
