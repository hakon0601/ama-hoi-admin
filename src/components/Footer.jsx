import React from 'react';

export const Footer = () => {
  return (
    <div
      style={{
        height: 318,
        background: '#005763',
        color: 'white',
        paddingLeft: 120,
        paddingRight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <div>INFO</div>
        <div
          style={{
            height: 1,
            width: '100%',
            background: 'white',
            marginTop: 20,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>
            <p style={{ fontWeight: 600 }}>KONTAKT</p>
            <p>Telefon: 22 95 40 00</p>
            <p>statensinnleie@statsbygg.no</p>
          </div>
          <div style={{ paddingRight: 100 }}>
            <p style={{ fontWeight: 600 }}>POSTADRESSE</p>
            <p>Postboks 232 Sentrum</p>
            <p>0103 Oslo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
