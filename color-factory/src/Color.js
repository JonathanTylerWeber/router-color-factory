import React from "react";
import { Link, Navigate } from "react-router-dom";

function Color({ color }) {
  if (!color) return <Navigate to="/colors" />

  const textColor = { color: color.hex };

  return (
    <div>
      <h1 style={textColor}>this is {color.name}</h1>
      <Link to="/colors">Go Back</Link>
    </div>


  )
}

export default Color;