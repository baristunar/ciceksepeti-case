import PropTypes from 'prop-types';
import { ReactComponent as Search } from '@Assets/icons/search.svg';
import { ReactComponent as Cart } from '@Assets/icons/cart.svg';
import { ReactComponent as Facebook } from '@Assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '@Assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '@Assets/icons/instagram.svg';
import { ReactComponent as Leaf } from '@Assets/icons/leaf.svg';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
import { ReactComponent as MenuList } from '@Assets/icons/menu-list.svg';
import { ReactComponent as Pencil } from '@Assets/icons/pencil.svg';
import { ReactComponent as Plus } from '@Assets/icons/plus.svg';
import { ReactComponent as Shock } from '@Assets/icons/shock.svg';
import { ReactComponent as Youtube } from '@Assets/icons/youtube.svg';
import { ReactComponent as GooglePlay } from '@Assets/icons/google-play.svg';
import { ReactComponent as AppStore } from '@Assets/icons/app-store.svg';

const IconComponent = ({ name, ...props }) => {
  const iconTypes = {
    search: Search,
    cart: Cart,
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    leaf: Leaf,
    logo: Logo,
    menuList: MenuList,
    pencil: Pencil,
    plus: Plus,
    shock: Shock,
    youtube: Youtube,
    googlePlay: GooglePlay,
    appStore: AppStore,
  };

  let Icon = iconTypes[name];
  return Icon ? <Icon {...props} /> : null;
};

IconComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default IconComponent;
