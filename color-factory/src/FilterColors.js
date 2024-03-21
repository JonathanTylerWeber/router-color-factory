import React from 'react';
import { useParams } from 'react-router-dom';
import Color from './Color';

function FilterColors({ colors }) {
  const { name } = useParams();

  if (name) {
    const currentColor = colors.find(
      color => color.name.toLowerCase() === name.toLowerCase()
    );
    return <Color color={currentColor} />;
  }

  return null;
}

export default FilterColors;