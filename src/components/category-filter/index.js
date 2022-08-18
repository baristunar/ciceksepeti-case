import './styles.scss';
import PropTypes from 'prop-types';
import Icon from '@Components/Icon';
import TabButtons from '@Components/category-filter/TabButtons';

const CategoryFilter = ({ categories, categoryOnChange }) => {
  return (
    <section className="category-filter">
      <div className="category-filter__header">
        <Icon name="menuList" />
        <h2 className="category-filter__header-title">Kategoriler</h2>
      </div>

      <TabButtons
        categoryOnChange={categoryOnChange}
        categories={categories}
      />
    </section>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryOnChange: PropTypes.func.isRequired
};

export default CategoryFilter;
