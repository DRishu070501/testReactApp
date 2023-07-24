import React, { useState, useEffect } from 'react';
import { fetchDropdownOptions } from './api';
import { fetchDropdownOptions2 } from './api2';

function FormComponent() {
  const [dropdown1Options, setDropdown1Options] = useState([]);
  const [dropdown2Options, setDropdown2Options] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with the actual token obtained through authentication
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtMSIsImlhdCI6MTY5MDIwMTM0MCwianRpIjoiOCIsImV4cCI6MTY5MTIwMTM0MH0.Pidz6m8qpHuF8ZXaiFLpovyoEJEWFr9icFD4wJ9_yV9loKLj5SZeCzOKaHba03tDbl_X2suN9kv10eLZphB3vg';

    // Fetch data from the API and set the state
    const fetchData = async () => {
      const data = await fetchDropdownOptions(token);
      console.log(data)
      let d = data.data.map(e => {return {"id" : e.id,"name" : e.name}})
      console.log(d)
      setDropdown1Options(d);
      let temp = await fetchDropdownOptions2(token)
      setDropdown2Options(temp.data);
    };
    fetchData();
  }, []);

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

      <label htmlFor="textbox">Textbox:</label>
      <input type="text" id="textbox" />
    </div>
  );
}

export default FormComponent;
