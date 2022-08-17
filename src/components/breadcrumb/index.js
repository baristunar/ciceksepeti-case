import PropTypes from 'prop-types';
import './style.scss';

const Breadcrumb = ({ content, bracket = '>' }) => {
  return (
    <div className="breadcrumb">
      {content.map((item, index) => {
        return (
          <a
            className={`breadcrumb__link ${
              index === content.length - 1 && 'breadcrumb__link--active'
            }`}
            href={item.href}
            key={index}
          >
            {item.title}{' '}
            {index < content.length - 1 && (
              <span className="breadcrumb__bracket">{bracket}</span>
            )}
          </a>
        );
      })}
    </div>
  );
};

Breadcrumb.propTypes = {
  content: PropTypes.array,
  bracket: PropTypes.string
};

export default Breadcrumb;
