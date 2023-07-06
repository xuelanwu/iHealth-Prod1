//Import Local Files
import heartImage from "src/Assets/Icons/team-hearth.png";
import personsImage from "src/Assets/Icons/team-persons.png";
import educationImage from "src/Assets/Icons/team-education.png";

export const TeamInfo = [
  {
    image: {
      src: heartImage,
      alt: "Heart image",
    },

    imageText: "Living with NF",

    cardText1: "Quality Of Life Measures",
    cardText2: "NF Registry",
    cardText3: "Find A Provider",

    Details: {
      link: "#",
      text: "Learn More >",
    },
  },
  {
    image: {
      src: personsImage,
      alt: "Persons image",
    },

    imageText: "Research",

    cardText1: "Research Tools & Resources",
    cardText2: "Clinical Drug Therapies",
    cardText3: "Participate in Research",

    Details: {
      link: "#",
      text: "Learn More >",
    },
  },
  {
    image: {
      src: educationImage,
      alt: "Education image",
    },

    imageText: "Education",

    cardText1: "Understanding the Condition",
    cardText2: "Conferences and Workshops",
    cardText3: "Workshops",

    Details: {
      link: "#",
      text: "Learn More >",
    },
  },
];
