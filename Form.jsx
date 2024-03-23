// import millligram in main.jsx file and install milligram
// import 'milligram/dist/milligram.css'

import { useState } from "react";

const Form = () => {
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const InputOnChange = (property, value) => {
    setFormObj((preObj) => ({
      ...preObj,
      [property]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(formObj);
    alert(JSON.stringify(formObj));
  };

  return (
    <div className="container">
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          value={formObj.fName}
          type="text"
          placeholder="First Name"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          value={formObj.lName}
          type="text"
          placeholder="Last Name"
        />{" "}
        <br />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          value={formObj.city}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input
          onChange={() => {
            InputOnChange("gender", "Male");
          }}
          checked={formObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={() => {
            InputOnChange("gender", "Female");
          }}
          checked={formObj.gender === "Female"}
          className="ml-6"
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button className="text-red-600 font-bold" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
