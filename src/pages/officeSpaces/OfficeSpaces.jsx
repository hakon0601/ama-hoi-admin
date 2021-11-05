import React from 'react';
import { AvailableSpaces } from './AvailableSpaces';
import { Facilities } from './Facilities';
import { OfficeDescription } from './OfficeDescription';

export const OfficeSpaces = () => {
  return (
    <div>
      <div style={{ fontWeight: 400, fontSize: 60 }}>Mine kontorplasser</div>
      <div
        style={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <OfficeDescription style={{ width: '100%', marginBottom: 30 }} />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
          <Facilities flexSize="1" />
          <AvailableSpaces flexSize="1" />
        </div>
      </div>
    </div>
  );
};
