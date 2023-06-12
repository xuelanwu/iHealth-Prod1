import "./index.css";

const FooterLinkCard = ({ linkCard }) => {
  const { category, links } = linkCard;
  return (
    <div className="footer-link-card">
      <div className="footer-link-category-block">
        <h3 className="footer-link-title">{category}</h3>
      </div>
      <div className="footer-link-links-block">
        {links.map((link, idx) => (
          <a
            className="footer-links"
            onClick={() => {
              document.querySelector("#UnderConst-wrapper").style.display =
                "flex";
            }}
            href={link.path}
            key={`footer-links-${idx}`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkCard;
