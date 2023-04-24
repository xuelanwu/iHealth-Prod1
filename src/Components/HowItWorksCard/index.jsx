import "./index.css";

const HowItWorksCard = ({ image, title, content }) => {
  return (
    <div className="how-it-works-card">
      <img src={image} alt="" className="how-it-works-img" />
      <p className="how-it-works-subtitle">{title}</p>
      <p className="how-it-works-content">{content}</p>
    </div>
  );
};

export default HowItWorksCard;
