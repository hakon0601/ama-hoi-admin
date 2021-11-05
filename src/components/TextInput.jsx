import React from 'react';

export const TextInput = ({ onFieldChange, placeholder, title, flexSize }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: flexSize }}>
      <div style={{ color: '#232F3A', fontSize: 16, marginBottom: 10 }}>
        {title}
      </div>
      <input
        style={{ border: '1px solid grey', borderRadius: 0, padding: 8 }}
        onChange={(event) => onFieldChange(event.target.input)}
        placeholder={placeholder}
      />
    </div>
  );
};
