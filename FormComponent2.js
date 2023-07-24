import React, { useState, useEffect } from 'react';
import { fetchDropdownOptions } from './api';
import { fetchDropdownOptions2 } from './api2';
import { fetchDropdownOptions3 } from './api3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FormComponent2() {
  const [dropdown1Options, setDropdown1Options] = useState([]);
  const [dropdown2Options, setDropdown2Options] = useState([]);
  const [textboxes, setTextboxes] = useState(['']); // State to hold the list of textboxes

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with the actual token obtained through authentication
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtMSIsImlhdCI6MTY5MDIwMTM0MCwianRpIjoiOCIsImV4cCI6MTY5MTIwMTM0MH0.Pidz6m8qpHuF8ZXaiFLpovyoEJEWFr9icFD4wJ9_yV9loKLj5SZeCzOKaHba03tDbl_X2suN9kv10eLZphB3vg';

    // Fetch data from the APIs and set the state
    const fetchData = async () => {
      const data1 = await fetchDropdownOptions(token);
      const data2 = await fetchDropdownOptions2(token);

      let d1 = data1.data.map(e => ({ id: e.id, name: e.name }));
      let d2 = data2.data.map(e => ({ id: e.id, name: e.name }));

      setDropdown1Options(d1);
      setDropdown2Options(d2);
    };
    fetchData();
  }, []);

  // Function to add a new textbox
  const addTextbox = () => {
    setTextboxes(prevTextboxes => [...prevTextboxes, '']);
  };

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Get the selected values from the dropdowns
    const selectedDropdown1Value = document.getElementById('dropdown1').value;
    const selectedDropdown2Value = document.getElementById('dropdown2').value;
    // Get the input values from the textboxes
    const textboxValues = textboxes;

    // You can now do whatever you want with the selected values and textbox values
    console.log('Selected Dropdown 1:', selectedDropdown1Value);
    console.log('Selected Dropdown 2:', selectedDropdown2Value);
    console.log('Textboxes:', textboxValues);
    const tkn = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtMSIsImlhdCI6MTY5MDIwMTM0MCwianRpIjoiOCIsImV4cCI6MTY5MTIwMTM0MH0.Pidz6m8qpHuF8ZXaiFLpovyoEJEWFr9icFD4wJ9_yV9loKLj5SZeCzOKaHba03tDbl_X2suN9kv10eLZphB3vg';
    const payload = {
        names: textboxValues,
        marketZoneId: Number(selectedDropdown2Value),
        salesPersonId: Number(selectedDropdown1Value),
    };
    let test = fetchDropdownOptions3(tkn,payload);
    toast.success('Data saved successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setTextboxes(['']);
  };

  return (
    <div>
      <label htmlFor="dropdown1">Dropdown 1:</label>
      <select id="dropdown1">
        <option value="">Select an option</option>
        {dropdown1Options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="dropdown2">Dropdown 2:</label>
      <select id="dropdown2">
        <option value="">Select an option</option>
        {dropdown2Options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <br />

      {/* Render the list of textboxes */}
      {textboxes.map((textbox, index) => (
        <div key={index}>
          <label htmlFor={`textbox-${index + 1}`}>Textbox {index + 1}:</label>
          <input
            type="text"
            id={`textbox-${index + 1}`}
            value={textbox}
            onChange={event => {
              const newValue = event.target.value;
              setTextboxes(prevTextboxes =>
                prevTextboxes.map((tb, idx) => (idx === index ? newValue : tb))
              );
            }}
          />
        </div>
      ))}

      {/* Add button to add a new textbox */}
      <button onClick={addTextbox}>Add Textbox</button>

      {/* Save button */}
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default FormComponent2;
