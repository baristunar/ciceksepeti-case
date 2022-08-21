import { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import Icon from '@Components/Icon';
import { useSearchParams } from 'react-router-dom';

const ProductList = ({ products, activeCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchParams] = useSearchParams();

  const filterByCategory = () => {
    if (activeCategory.id === 1) {
      setFilteredProducts(products);
    } else {
      const filteredData = products.filter((product) =>
        product?.categoryIDS?.includes(activeCategory.id)
      );
      setFilteredProducts(filteredData);
    }
  };

  const filterByText = (searchValue) => {
    setFilteredProducts(
      products.filter((product) => {
        const productName = product?.title.toLowerCase();
        const isExist = productName.includes(searchValue?.toLowerCase());

        if (isExist) return product;
      })
    );
  };

  useEffect(() => {
    const searchValue = searchParams.get('name');

    if (searchValue) {
      filterByText(searchValue);
    } else {
      filterByCategory();
    }
  }, [searchParams, products, activeCategory]);

  return (
    <div className="product__list">
      <h3 className="product__list-title">
        <Icon name="leaf" />
        <span>{ activeCategory?.name}</span>
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
  activeCategory: PropTypes.object.isRequired,
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
