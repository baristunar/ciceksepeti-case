import { useState, useEffect } from 'react';
import Navbar from '@Components/navbar';
import Breadcrumb from '@Components/breadcrumb';
import { Container } from '@Components/ui/';
import CategoryFilter from '@Components/category-filter';
import ProductList from '@Components/product/ProductList';
import { fetchCategories, fetchProducts } from './services';

const BREADCRUMB_LIST = [
  { title: 'Çiçeksepeti Market', href: '/' },
  { title: 'İstanbul', href: '/' },
  { title: 'Çiçeksepeti Breadcrumb', href: '/' }
];

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);

  const categoryOnChange = (categoryID) => {
    setActiveCategory(categoryID);
  };

  const getProducts = async () => {
    const products = await fetchProducts();

    const data = products?.data.map((product) => {
      return {
        id: product.id,
        priceUnit: product.price_unit,
        freeShipping: product.free_shipping,
        categoryIDS: product.category_ids,
        image: product.image,
        stock: product.stock,
        title: product.title,
        price: product.price
      };
    });

    setProducts(data || []);
  };

  const getCategories = async () => {
    const categories = await fetchCategories();

    setCategories(categories?.data);
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />

      <main className="main">
        <Container>
          <Breadcrumb content={BREADCRUMB_LIST} />
          <CategoryFilter
            categoryOnChange={categoryOnChange}
            categories={categories}
          />
          <ProductList activeCategory={activeCategory} products={products} />
        </Container>
      </main>
    </div>
  );
};

export default App;
