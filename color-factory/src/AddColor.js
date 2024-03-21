import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function AddColor({ onAddColor }) {
  const [colorName, setColorName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (colorName === '') {
      alert('must pick color name');
      return;
    }
    event.preventDefault();
    onAddColor({ name: colorName, hex: selectedColor });
    setColorName('');
    setSelectedColor('#000000');
    navigate('/colors');
  };

  return (
    <div>
      <h2>Add Color</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </label>
        <label>
          Choose Color:
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
        </label>
        <button type="submit">Add Color</button>
      </form>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default AddColor;
