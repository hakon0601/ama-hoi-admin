import { useMediaQuery } from '@react-hook/media-query';
import React, { useState } from 'react';
import { TextAreaInput } from '../../components/TextAreaInput';
import { TextInput } from '../../components/TextInput';

export const OfficeDescription = ({ office, triggerEasterEgge }) => {
  const isPhone = useMediaQuery('only screen and (max-width: 600px)');
  console.log(office);
  const [address, setAddress] = useState('');
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
        value={office.name}
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
          onFieldChange={(content) => {
            console.log(content);
            if (content === 'Miljø er kult') {
              triggerEasterEgge();
            }
            setAddress(content);
          }}
          value={address}
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
          value={office.description}
        />
      </div>
    </div>
  );
};
