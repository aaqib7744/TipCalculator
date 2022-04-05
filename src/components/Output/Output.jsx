import React from "react";

function Output(props) {
  let list = props.given
  console.log(list)
  return (
    <div>
      <h2>customer List</h2>
      <hr />
      <ul>
        {
          props.given.map((cust,index) => <li key={index}>{cust.Customername} offering a tip of {cust.niceTip}.</li>
          )
        }
        
        {/* <li>Local shop offering a tip of 200.</li>
        <li>Local shop offering a tip of 50.</li> */}
      </ul>

      <div>
        <table>
          <thead>
            <tr>
              <th>Total Customer</th>
              <th>Tip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >{props.given.length}</td>
              <td >{props.PrTip}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Output;

