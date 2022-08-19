import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@Components/ui';
import { useSearchParams } from 'react-router-dom';

const TabButtons = ({ categories, categoryOnChange }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = (categoryID) => {
    const isSearchParamsExist = searchParams.has('name');
    setActiveTab(categoryID);
    categoryOnChange(categoryID);

    if (isSearchParamsExist) {
      searchParams.delete('name');
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="category-filter__tab">
      {categories.map((category) => {
        return (
          <Button
            className={`category-filter__tab-button ${
              activeTab === category.id
                ? 'category-filter__tab-button--active'
                : ''
            }`}
            key={category.id}
            onClick={() => onClickHandler(category.id)}
            text={category.name}
          />
        );
      })}
    </div>
  );
};

TabButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryOnChange: PropTypes.func.isRequired
};

export default TabButtons;
