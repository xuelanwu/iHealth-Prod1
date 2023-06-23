import React, { useState } from "react";
import "./Teams.css";
import "./GdtCancer.css";
// import UnderConstruction from "src/Components/Under-Construction/UnderConstruction";
import axios from "axios";

const Teams = () => {
  const [type, settype] = useState("NF TEAM");
  const TeamsData = [
    {
      title: "NF TEAM",
      text: "",
    },
    {
      title: "Geriatric Disease Team",
      text: " (Coming soon)",
    },
    {
      title: "Cancer Team",
      text: " (Coming soon)",
    },
  ];

  // Geriatric disesea team modal popup js

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  // Cancer team modal popup js

  const toggleModal1 = () => {
    setIsOpens(!isOpens);
  };
  const [isOpens, setIsOpens] = useState(false);

  // OnSubmit for Geriatric and cancer team form

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitted(false);
  // };

  const [formData1, setFormData1] = useState({
    community: 'Geriatic Disease Team',
    name: '',
    email: '',
    condition: '',
    phone: '',
    message: ''
  });

  // Geriatric form api post request

  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(formData1)

    axios.post('https://provider-data-api.onrender.com/api/v1/community', formData1)
      .then(response => {
        console.log(response.status === 200);
        alert("Thank you for submitting your information!");
        window.location = "/";
      })
      .catch(error => {
        console.error(error);
        alert("Oops! It seems you've already submitted a request using this email address.");
      });

      // function ShowAlert(message, type) {
      //   const alertContainer = document.createElement('div');
      //   alertContainer.className = `alert ${type}`;
      //   alertContainer.innerText = message;
      
      //   document.body.appendChild(alertContainer);
      
      //   setTimeout(() => {
      //     document.body.removeChild(alertContainer);
      //   }, 6000);
      // }
  };

  // Cancer form api post request

  const [formData2, setFormData2] = useState({
    community: 'Cancer Team',
    name: '',
    email: '',
    condition: '',
    phone: '',
    message: ''
  });

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(formData2)

    axios.post('https://provider-data-api.onrender.com/api/v1/community', formData2)
      .then(response => {
        console.log(response.status === 200)
        alert("Thank you for submitting your information!");
        window.location = "/";
      })
      .catch(error => {
        console.error(error)
        alert("Oops! It seems you've already submitted a request using this email address.");
        // window.location = "/";
      });
  };

  return (
    <>
      <div className="teams-outline">
        <div className="teams-container">
          <button
            onClick={(e) => {
              settype("NF TEAM"),
                document
                  .querySelector("#NfIHub-container")
                  .scrollIntoView({ behavior: "smooth" });
            }}
            className={type == "NF TEAM" ? "teams-group-active" : "teams-group"}
          >
            NF TEAM
          </button>

          <button
            onClick={toggleModal}
            className={
              type == "Geriatric Disease Team"
                ? "teams-group-active"
                : "teams-group"
            }
          >
            Geriatric Disease Team <p>(Coming soon)</p>
          </button>

          <button
            onClick={toggleModal1}
            className={
              type == "Cancer Team" ? "teams-group-active" : "teams-group"
            }
          >
            Cancer Team <p>(Coming soon)</p>
          </button>
        </div>

      </div>

      {/* MODAL POPUP FOR GERIATRIC TEAM*/}

      <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="gdt-head">
                <span className="close" onClick={toggleModal}>
                  &times;
                </span>

                <h1>Geriatric Disease Team </h1>
                <p>(Coming Soon)</p>
              </div>
              <p className="pxp1">
                Don’t see the condition you’re looking for? <br />
                Let us know. We’ll be adding new social networks based on
                community feedback.
              </p>
              <form onSubmit={handleSubmit1} >
                <input type="hidden" name="community" value="Geriatic Disease Team" onChange={handleChange1} />
                <div class="row">
                  <div class="column">
                    <div class="input">
                      <input
                        type="text"
                        id="name"
                        class="input__field"
                        placeholder=" "

                        name="name"
                        value={formData1.name}
                        onChange={handleChange1}
                        required
                      />
                      <label for="yourName" class="input__label">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div class="column">
                    <div class="input">
                      <input
                        type="email"
                        id="email"
                        class="input__field"
                        placeholder=" "
                        name="email"
                        value={formData1.email}
                        onChange={handleChange1}
                        required
                      />
                      <label for="email" class="input__label">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="column">
                    <div class="input">
                      <input
                        type="text"
                        id="condition"
                        class="input__field"
                        placeholder=" "
                        name="condition"
                        value={formData1.condition}
                        onChange={handleChange1}
                        required
                      />
                      <label for="condition" class="input__label">
                        Condition
                      </label>
                    </div>
                  </div>
                  <div class="column">
                    <div class="input">
                      <input
                        type="text"
                        id="phone"
                        class="input__field1"
                        placeholder=" "
                        name="phone"
                        value={formData1.phone}
                        onChange={handleChange1}
                      />
                      <label for="phoneNumber" class="input__label1">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <textarea
                  className="textarea__field"
                  placeholder=" "
                  id="message"
                  name="message"
                  value={formData1.message}
                  onChange={handleChange1}
                  required
                ></textarea>
                <label for="message" class="textarea__label">
                  Message
                </label>

                <p className="pxp2">indicates a required field</p>

                <div className="btnx">
                  <button
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}
      </div>

      {/* MODAL POPUP FOR CANCER TEAM */}

      <div>
        {isOpens && (
          <div className="modal">
            <div className="modal-content">
              <div className="gdt-head">
                <span className="close" onClick={toggleModal1}>
                  &times;
                </span>
                <h1>Cancer Team </h1>
                <p>(Coming Soon)</p>
              </div>
              <p className="pxp1">
                Don’t see the condition you’re looking for? <br />
                Let us know. We’ll be adding new social networks based on
                community feedback.
              </p>

              <form onSubmit={handleSubmit2}>
                <div class="row">
                  <div class="column">
                    <div class="input">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData2.name}
                        onChange={handleChange2}
                        class="input__field"
                        placeholder=" "
                        required
                      />
                      <label for="yourName" class="input__label">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div class="column">
                    <div class="input">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData2.email}
                        onChange={handleChange2}
                        class="input__field"
                        placeholder=" "
                        required
                      />
                      <label for="email" class="input__label">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="column">
                    <div class="input">
                      <input
                        type="text"
                        id="condition"
                        name="condition"
                        value={formData2.condition}
                        onChange={handleChange2}
                        class="input__field"
                        placeholder=" "
                        required
                      />
                      <label for="condition" class="input__label">
                        Condition
                      </label>
                    </div>
                  </div>
                  <div class="column">
                    <div class="input">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData2.phone}
                        onChange={handleChange2}
                        class="input__field1"
                        placeholder=" "
                      />
                      <label for="phoneNumber" class="input__label1">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData2.message}
                  onChange={handleChange2}
                  className="textarea__field"
                  placeholder=" "
                ></textarea>
                <label for="message" class="textarea__label">
                  Message
                </label>

                <p className="pxp2">indicates a required field</p>

                <div className="btnx">
                  <button
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Teams;

// {
//   /* {TeamsData.map((data) => (
//           <div className="teams-info">
//             <h2>{data.title}</h2>
//             <p>{data.text}</p>
//           </div>
//         ))} */
// }
