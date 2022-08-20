import Icon from '@Components/Icon';
import { FOOTER_SOCIAL, FOOTER_MENU } from '@Data/footer';
import FooterMenuResponsive from '@Components/footer/FooterMenuResponsive';

const FooterInfo = () => {
  return (
    <div className="footer__info">
      <div className="footer__info-social">
        <Icon className="footer__info-social-logo" name="logo" />

        <ul className="footer__info-social-menu">
          {FOOTER_SOCIAL.map((social) => (
            <li key={social.name}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <Icon name={social.name} />
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__info-social-menu-text">
          CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz.
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
          oluşturduğumuz aydınlatma metnine <a href="/">buradan</a>{' '}
          ulaşabilirsiniz.
        </div>
      </div>
      <div className="footer__info-menu">
        <ul className="footer__info-menu-list">
          {FOOTER_MENU.map((menu, index) => (
            <li key={`${menu.title}__${index}`}>
              <h3 className="footer__info-menu-list-title">{menu.title}</h3>
              <ul className="footer__info-menu-list-items">
                {menu.items.map((item, index) => (
                  <li key={`${item.title}__${index}`}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <FooterMenuResponsive />
    </div>
  );
};

export default FooterInfo;
