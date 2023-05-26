import "./index.css";

const PartnerWithUsButton = () => {
  return <a onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}}><button className="partner-with-us-bttn">Partner with us</button></a>;
};

export default PartnerWithUsButton;
