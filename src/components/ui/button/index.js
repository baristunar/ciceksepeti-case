import './styles.scss';
import Icon from '@Components/Icon';
import PropTypes from 'prop-types';

export const Button = ({
  onClick,
  className,
  text,
  outline = false,
  icon,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${outline ? 'btn-outline' : ''} ${className}`}
      {...props}
      data-basket-count="5"
    >
      {icon ? <Icon name={icon} /> : null}
      {text ? <span>{text}</span> : null}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};
