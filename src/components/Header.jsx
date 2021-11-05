import { Menu32, UserAvatar32 } from '@carbon/icons-react';
import React from 'react';
import { ReactComponent as StatsbyggLogo } from '../icons/statsbygg.svg';

export const Header = () => {
  return (
    <div
      style={{
        height: 228,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 158,
          paddingLeft: 120,
          paddingRight: 120,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Menu32 />
          <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'flex-start',
              marginLeft: 40,
            }}
          >
            <StatsbyggLogo style={{ marginBottom: 10 }} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            textTransform: 'uppercase',
          }}
        >
          <UserAvatar32 /> <div style={{ marginLeft: 10 }}>Ansatt #6456532</div>
        </div>
      </div>
      <div
        style={{
          background: '#005763',
          color: 'white',
          height: 70,
          paddingLeft: 120,
          paddingRight: 120,
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 500, marginRight: 20 }}>Gå til:</div>
        <div
          style={{
            height: '100%',
            background: 'white',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            fontWeight: 500,
          }}
        >
          MINE KONTORPLASSER
        </div>
      </div>
    </div>
  );
};
