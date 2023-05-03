import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Frame.css";

const Frame = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Neurofibromatosis(NF)"];
  const FrameData = [
    {
      title: "Speciality",
      text: "Select Speciality",
      icon: <ExpandMoreIcon sx={{ fontSize: 18, width: 20 }} />,
    },
    {
      title: "Age ",
      text: "Select Age",
      icon: <ExpandMoreIcon sx={{ fontSize: 16, width: 20 }} />,
    },
    {
      title: "Insurance",
      text: "Select Insurance",
      icon: <ExpandMoreIcon sx={{ fontSize: 16, width: 20 }} />,
    },
   
  ];
  return (
    <div className="frame-container">
      <div className="input-wrapper">
     
        <div className="dropdown">
            
          <span className="dropdown-text" onClick={(e) => setIsActive(!isActive)}>
          
            {selected} <ExpandMoreIcon sx={{ fontSize: 16, width:20 }} />
          </span>
          {isActive && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {option }
                  
                </div>
               
              ))}
               
            </div>
          )}
        </div>

        {FrameData.map((data) => (
          <>
         
            <div className="disease">

            <span className="data-text">{data.title} </span>
             <span className="data-title">
             {data.text} {data.icon}
             </span>
             
            </div>
        
          </>
        ))}
         <div className="zip-code">
          <input type="text" placeholder="Enter zipcode" />
        </div>
       
        <div className="search-donate">
          <div className="search-container">
            <button className="search-btn" > Search <SearchOutlinedIcon sx={{fontSize:12, marginLeft:0.7}}/> </button> 
            
          </div>
          <div className="frame-donate">
            <Link to="/donate" className="donate-now">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

{
  /* <div className="search-input">
  <input type="text" placeholder="Search" />
</div>; 
 <div className="horizontal"></div>
*/
}

//   const FrameData = [
//     {
//       title: "Select Disease",
//       text: "",
//       icon: <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />,
//     },
//     {
//       title: "Speciality",
//       text: "",
//     },
//     {
//       title: "Age",
//       text: "(any, Pediatric, adult)",
//     },
//     {
//       title: "Insurance",
//       text: "",
//     },
//     {
//       title: "Zip code ",
//       text: "",
//     },
//     {
//       title: "Donate Now",
//       text: "",
//     },
//   ];
//   return (
//     <div className="frame-container">
//       <div className="input-wrapper">
//         {TeamData.map((data) => (
//           <div className="disease">
//             <h6>{data.title}</h6>
//             {data.icon}
//             <span>{data.text}</span>
//             <div className="horizontal"></div>

//           </div>
//         ))}

//           <h6>
//             Select Disease <KeyboardArrowDownIcon  />
//           </h6>
//         </div>
//         <div className="horizontal"></div>
//         <div className="speciality">
//           <h6>
//             Speciality <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
//           </h6>
//         </div>
//         <div className="horizontal"></div>
//         <div className="age">
//           <h6>
//             Age <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
//           </h6>
//         </div>
//         <div className="horizontal"> </div>
//         <div className="insurance">
//           <h6>
//             Insurance <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
//           </h6>
//         </div>
//         <div className="horizontal"></div>
//         <div className="zipcode">
//           <h6>
//             Zip code <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
//           </h6>
//         </div>
//         <div className="horizontal"></div>
//         <div className="search-input">
//           <input type="text" placeholder="Search" />
//         </div>
//         <div className="frame-donate">
//           <Link to="/donate" className="donate-now">
//             Donate Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frame;
