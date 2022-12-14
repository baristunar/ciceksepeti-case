import { useState, useEffect } from 'react';
import Navbar from '@Components/navbar';
import Footer from '@Components/footer';
import Breadcrumb from '@Components/breadcrumb';
import { Container } from '@Components/ui/';
import CategoryFilter from '@Components/category-filter';
import ProductList from '@Components/product/ProductList';
import Campaigns from '@Components/campaigns';
import { fetchCategories, fetchProducts } from './services';

const BREADCRUMB_LIST = [
  { title: 'Çiçeksepeti Market', href: '/' },
  { title: 'İstanbul', href: '/' }
];

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({
    id: 1,
    name: 'Tüm Kategoriler',
    href: '/'
  });

  const categoryOnChange = (category) => {
    setActiveCategory(category);
  };

  const getProducts = async () => {
    const products = await fetchProducts();

    const data = products?.data?.products?.map((product) => {
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

    setProducts(data);
  };

  const getCategories = async () => {
    const categories = await fetchCategories();

    setCategories(categories?.data?.categories);
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <>
      <Navbar />

      <main className="main">
        <Container>
          <Breadcrumb
            content={[
              ...BREADCRUMB_LIST,
              { title: activeCategory.name, href: activeCategory.href }
            ]}
          />
          <CategoryFilter
            categoryOnChange={categoryOnChange}
            categories={categories}
          />
          <ProductList activeCategory={activeCategory} products={products} />
        </Container>
        <Campaigns />
      </main>

      <Footer />
    </>
  );
};

export default App;
