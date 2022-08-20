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
          <button className="google-play"></button>
          <button className="app-store"></button>
        </div>
      </div>
    </div>
  );
};

export default FooterApps;
