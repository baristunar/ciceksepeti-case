import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@Components/ui';

const TabButtons = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(1);

  const onClickHandler = (categoryID) => {
    setActiveTab(categoryID);
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
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TabButtons;
