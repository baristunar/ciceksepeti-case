import './style.scss';
import { CAMPAIGNS } from '@Data/campaigns';
import { Container } from '@Components/ui';

const Campaigns = () => {
  return (
    <div className="campaign">
      <Container className="campaign__wrapper">
        {CAMPAIGNS.map((campaign) => (
          <div
            className="campaign__box"
            style={{ backgroundColor: `var(${campaign.box_bg})` }}
            key={campaign.id}
          >
            <img
              // eslint-disable-next-line no-undef
              src={require(`@Assets/images/${campaign.image}`)}
              alt={campaign.content}
            />
            <div className="campaign__box-content">
              <p>{campaign.content}</p>
              <a href={campaign.button_link}>{campaign.button_text}</a>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Campaigns;
