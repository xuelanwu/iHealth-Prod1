import "./index.css";

const PartnerWithUsTextTitle = ({ title, subtitle }) => {
  return (
    <div className="partner-with-us-text-block">
      <h3 className="partner-with-us-text-subtitle">{subtitle}</h3>
      <h1 className="partner-with-us-text-title">{title}</h1>
    </div>
  );
};

export default PartnerWithUsTextTitle;
