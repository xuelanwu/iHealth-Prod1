import HowItWorksCard from "../../../Components/HowItWorksCard";

import HowItWorksSteps from "../../../Constants/HowItWorks.js";

import "./index.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1 className="how-it-works-title">How It Works</h1>
      <div className="how-it-works-inner">
        {HowItWorksSteps.map((step) => (
          <HowItWorksCard
            image={step.image}
            title={step.title}
            content={step.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
