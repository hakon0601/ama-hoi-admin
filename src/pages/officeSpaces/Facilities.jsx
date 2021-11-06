import React, { useEffect, useState } from 'react';

export const Facilities = ({ flexSize, office }) => {
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const facilities = [
    'Kantine',
    'Kaffebar',
    'Konferanserom',
    'Prosjektor',
    'Vannkanon',
    'Ballrom',
    'ISDN',
    'Bomberom',
    'Borring i veggene',
    'Stillerom',
    'Chilinøtter',
    'Kake',
    'coffee machine',
  ];

  const addFacilitiy = (facility) => {
    setSelectedFacilities([...selectedFacilities, facility]);
  };

  useEffect(() => {
    setSelectedFacilities(office?.facilities ?? []);
  }, [office]);

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
        FASILITETER
      </div>
      <div>
        <div style={{ fontWeight: 400, fontSize: 16, marginBottom: 10 }}>
          Legg inn lokalets fasiliteter
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <select
            style={{ width: '80%', height: 46, padding: 10 }}
            onChange={(event) => {
              setSelectedFacility(event.target.value);
            }}
          >
            <option value="" disabled selected style={{ fontSize: 30 }}>
              Type
            </option>
            {facilities
              .filter((f) => !selectedFacilities.includes(f))
              .map((title) => (
                <option value={title} key={title}>
                  {title}
                </option>
              ))}
          </select>
          <button
            style={{
              width: 46,
              height: 46,
              background: '#005763',
              color: 'white',
              fontSize: 24,
              border: 0,
            }}
            onClick={() => {
              console.log(selectedFacility);
              if (selectedFacility) {
                if (!selectedFacilities.includes(selectedFacility)) {
                  addFacilitiy(selectedFacility);
                }
                setSelectedFacility(null);
              }
            }}
          >
            +
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 20,
          }}
        >
          {selectedFacilities.map((title) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              key={title}
            >
              <div
                style={{
                  width: '76%',
                  background: '#e6e6e6',
                  height: 46,
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}
              >
                {title}
              </div>
              <button
                style={{
                  width: 46,
                  height: 46,
                  background: '#005763',
                  color: 'white',
                  fontSize: 24,
                  border: 0,
                }}
                onClick={() => {
                  setSelectedFacilities(
                    [...selectedFacilities].filter((t) => t !== title)
                  );
                }}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
