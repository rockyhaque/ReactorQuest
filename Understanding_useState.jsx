import { useState } from "react";

const UseState = () => {
  let [myObj, setMyObj] = useState({
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
    key4: "Value 4",
  });

  const change = () => {
    setMyObj((previousObj) => ({
      ...previousObj,
      key1: "New Value for key 1",
      key2: "New Value for key 2"
    }));
  };
  return (
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <button onClick={change} className=" btn btn-success">
        Change
      </button>
    </div>
  );
};

export default UseState;
