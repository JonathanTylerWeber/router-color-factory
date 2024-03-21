import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";


function App() {
  const [colors, setColors] = useState([
    { name: 'red', hex: '#FF0000' },
    { name: 'green', hex: '#00FF00' },
    { name: 'blue', hex: '#0000FF' }
  ]);

  const handleAddColor = (newColor) => {
    setColors([...colors, newColor]);
  };


  return (
    <div className="App">
      <h1>Welcome to the color factory</h1>
      <BrowserRouter>
        <RouteList colors={colors} onAddColor={handleAddColor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
