import React, { useState } from 'react';

export const TextAreaInput = ({
  onFieldChange,
  placeholder,
  title,
  flexSize,
}) => {
  const [charactersEntered, setCharactersEntered] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: flexSize }}>
      <div style={{ color: '#232F3A', fontSize: 16, marginBottom: 10 }}>
        {title}
      </div>
      <textarea
        style={{ border: '1px solid grey', borderRadius: 0, padding: 8 }}
        onChange={(event) => {
          const content = event.target.value;
          setCharactersEntered(content.length);
          onFieldChange(content);
        }}
        placeholder={placeholder}
      />
      <div
        style={{
          textAlign: 'right',
          marginTop: 5,
          fontSize: 12,
          color: '#ababab',
        }}
      >
        {charactersEntered}/500
      </div>
    </div>
  );
};
