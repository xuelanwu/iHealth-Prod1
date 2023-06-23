import React, { useState } from 'react';
import axios from 'axios';

function YourComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    message: '',
    community: 'Geriaritic Community ' // hidden field for form 1 community value
  });
  const [formData2, setFormData2] = useState({
    name: '',
    email: '',
    message: '',
    community: '' // hidden field for form 2 community value
  });

  const handleChange = (event, formIdentifier) => {
    if (formIdentifier === 'form1') {
      setFormData1({
        ...formData1,
        [event.target.name]: event.target.value
      });
    } else if (formIdentifier === 'form2') {
      setFormData2({
        ...formData2,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event, formIdentifier) => {
    event.preventDefault();
    console.log(formData1,formData2)

    let formData;
    if (formIdentifier === 'form1') {
      formData = {
        ...formData1,
        community: document.querySelector(`[name="community-${formIdentifier}"]`).getAttribute('value')
      };
    } else if (formIdentifier === 'form2') {
      formData = {
        ...formData2,
        community: document.querySelector(`[name="community-${formIdentifier}"]`).getAttribute('value')
      };
    }

    // Make an Axios POST request using the appropriate formData
    axios
      .post('your-post-url', formData)
      .then((response) => {
        console.log('Success', response);
        // Perform any necessary actions upon success
      })
      .catch((error) => {
        console.error('Error', error.message);
        // Handle any errors that occur
      });
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={(event) => handleSubmit(event, 'form1')}>
              <h1>GDT FORM</h1>
              <input type="hidden" name={`community-form1`} value="Geriatric Disease Team" />
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData1.name}
                  onChange={(event) => handleChange(event, 'form1')}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData1.email}
                  onChange={(event) => handleChange(event, 'form1')}
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData1.message}
                  onChange={(event) => handleChange(event, 'form1')}
                />
              </div>

              <button type="submit">Submit Form 1</button>
            </form>

            <form onSubmit={(event) => handleSubmit(event, 'form2')}>
              <h1>CT FORM</h1>
              <input type="hidden" name={`community-form2`} value="CT Form" />
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData2.name}
                  onChange={(event) => handleChange(event, 'form2')}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData2.email}
                  onChange={(event) => handleChange(event, 'form2')}
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData2.message}
                  onChange={(event) => handleChange(event, 'form2')}
                />
              </div>

              <button type="submit">Submit Form 2</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default YourComponent;
