import './styles.scss';
import Icon from '@Components/Icon';
import PropTypes from 'prop-types';

export const Button = ({
  onClick,
  className,
  text,
  type = 'default',
  icon,
  ...props
}) => {
  const buttonTypes = {
    ghost: 'ghost',
    outline: 'outline',
    default: 'default'
  };
  return (
    <button
      onClick={onClick}
      className={`btn btn-${buttonTypes[type]} ${className}`}
      {...props}
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
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'outline', 'ghost'])
};
