import { useMediaQuery } from '@react-hook/media-query';
import React from 'react';
import { TextAreaInput } from '../../components/TextAreaInput';
import { TextInput } from '../../components/TextInput';

export const OfficeDescription = () => {
  const isPhone = useMediaQuery('only screen and (max-width: 600px)');

  return (
    <div
      style={{
        boxShadow: '0 0 4px grey',
        background: 'white',
        padding: 30,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>
        MITT KONTOR
      </div>
      <TextInput
        title="Velg kontor"
        placeholder="Der alle drømmer oppfylles"
        onFieldChange={() => {}}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: isPhone ? 'column' : 'row',
          gap: 15,
          marginTop: 20,
        }}
      >
        <TextInput
          title="Adresse"
          placeholder="Gategaten 1"
          flexSize="2"
          onFieldChange={() => {}}
        />
        <TextInput
          title="Postkode"
          placeholder="42069"
          flexSize="1"
          onFieldChange={() => {}}
        />
        <TextInput
          title="Poststed"
          placeholder="Der ingen kunne tru at nokon kunne bu"
          flexSize="1"
          onFieldChange={() => {}}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <TextAreaInput
          title="Beskrivelse av lokalet"
          placeholder="Her lukter det sure sokker"
          onFieldChange={() => {}}
        />
      </div>
    </div>
  );
};
