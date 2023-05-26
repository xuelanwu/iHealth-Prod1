import "./index.css";

const OurServicesCard = ({ service }) => {
  return (
    <div className="home-page-our-services-card">
      <img className="home-page-our-services-icon" src={service.icon} alt="" />
      <div className="home-page-our-services-hover">
        <h3 className="home-page-our-services-title">{service.title}</h3>
        <p className="home-page-our-services-content">{service.content}</p>
        <a onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}}><p className="home-page-our-services-learn-more">Learn More &gt;</p></a>
      </div>
    </div>
  );
};

export default OurServicesCard;
