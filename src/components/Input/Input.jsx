import React from "react";

function Input(props) {
  return (
    <>
      <div>
        <p>Enter your Bill Amount</p>
        <input type="text" onChange={props.changeHandler} />
        <hr />
      </div>

      <div>
        <p>How was the service</p>
        <select name="" id="" onChange={props.selectHandler}>
          <option value="10">Good</option>
          <option value="5">Bad</option>
          <option value="20">Excellent</option>
        </select>

        <input type="text" name="" id="" onChange={props.getName} />
        <button onClick={props.send}>Add customer</button>
      </div>
    </>
  );
}

export default Input;

