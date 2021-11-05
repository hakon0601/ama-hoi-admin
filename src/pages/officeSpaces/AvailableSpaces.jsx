import React from 'react';
import { TextInput } from '../../components/TextInput';

export const AvailableSpaces = ({ flexSize }) => {
  return (
    <div
      style={{
        boxShadow: '0 0 4px grey',
        background: 'white',
        padding: 30,
        flex: flexSize,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>
        TILGJENGELIGE PLASSER
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <TextInput
          placeholder="Tall"
          title="Plasser bekreftet i bruk"
          onFieldChange={() => {}}
        />
        <TextInput
          placeholder="Tall"
          title="Personer på kontoret"
          onFieldChange={() => {}}
        />
        <TextInput
          placeholder="Tall"
          title="Antall ledige plasser"
          onFieldChange={() => {}}
        />
        <TextInput
          placeholder="Tall"
          title="Hvor mange plasser vil dere legge til i dag?"
          onFieldChange={() => {}}
        />
      </div>
    </div>
  );
};
