import QRCodeImg from '@Assets/images/qr-code.png';
import PhonesImg from '@Assets/images/phones.png';

const FooterApps = () => {
  return (
    <div className="footer__apps">
      <img className="footer__apps-phones" src={PhonesImg} alt="Telefon" />
      <div className="footer__apps-download">
        <div className="footer__apps-download-wrapper">
          <img width="100%" height="100%" src={QRCodeImg} alt="QR Code" />
          <div className="footer__apps-download-desc">
            <h5>Çiçek Sepeti Mobil Uygulamayı İndirin</h5>
            <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
          </div>
        </div>

        <div className="footer__apps-buttons">
          <a
            className="google-play"
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.ciceksepeti.ciceksepeti&referrer=adjust_reftag%3Dc3FspxukEWRds%26utm_source%3DAndroid%2B-%2BWebsite%2BFooter%2BBadge"
          ></a>
          <a
            className="app-store"
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/id723715907?mt=8&pt=723715907&ct=iOS+-+Website+Footer+Badge"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default FooterApps;
