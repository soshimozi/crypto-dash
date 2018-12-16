import React from 'react';

export default function ({imageUrl, alt, style}) {
  return (
    <img
    alt={alt || ''}
    style={style || {height: '50px'}}
    src={imageUrl}
    />
  );
}