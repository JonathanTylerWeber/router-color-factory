import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <Link to='/colors/add'>
        <h2>Add a color</h2>
      </Link>
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name.toLowerCase()}`}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default ColorList;