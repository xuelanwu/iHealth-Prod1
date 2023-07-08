import "./index.css";

const PartnerTextCard = ({ partner }) => {
  const { heading, subheading, content, list } = partner;
  return (
    <div className="partner-text-card">
      <h3 className="partner-text-heading SN-M-H2-24">{heading}</h3>
      <h2 className="partner-text-subheading SN-M-H3-20">{subheading}</h2>
      {content &&
        content.map((text) => (
          <p key={text} className="partner-text-SN-M-P-16 SN-M-P-16">
            {text}
          </p>
        ))}
      {list &&
        list.map((item) => (
          <p key={item} className="partner-text-list SN-M-P-16">
            <span className="partner-text-span">&#10004; </span>
            {item}
          </p>
        ))}

      <a
        className="partner-link SN-M-P-16"
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
      >
        Partner with us
      </a>
    </div>
  );
};

export default PartnerTextCard;
