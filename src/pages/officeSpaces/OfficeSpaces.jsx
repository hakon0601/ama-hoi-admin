import { useMediaQuery } from '@react-hook/media-query';
import React, { useEffect, useState } from 'react';
import { AvailableSpaces } from './AvailableSpaces';
import { Facilities } from './Facilities';
import { OfficeDescription } from './OfficeDescription';

export const OfficeSpaces = () => {
  const isPhone = useMediaQuery('only screen and (max-width: 600px)');
  const [office, setOffice] = useState(null);
  const [error, setError] = useState(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const lol = async () => {
      try {
        const officeReq = await fetch(
          'https://y7415815dh.execute-api.eu-west-1.amazonaws.com/prod/api/offices/2?username=user-a'
        );
        const officeLol = await officeReq.json();
        setOffice(officeLol);
      } catch (error) {
        setError(error);
      }
    };
    lol();
  }, []);

  if (!office) {
    return <div>Laster...</div>;
  }

  if (error) {
    return <div>En feil oppstod: {error.message}</div>;
  }

  if (showEasterEgg) {
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 20000);
    return (
      <div
        style={{
          fontSize: 60,
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Miljø er så j@velig kult!
      </div>
    );
  }
  return (
    <div>
      <div style={{ fontWeight: 400, fontSize: '4vw' }}>Mine kontorplasser</div>
      <div
        style={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <OfficeDescription
          style={{ width: '100%', marginBottom: 30 }}
          office={office}
          triggerEasterEgge={() => setShowEasterEgg(true)}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: isPhone ? 'column' : 'row',
            gap: 30,
          }}
        >
          <Facilities flexSize="1" office={office} />
          <AvailableSpaces flexSize="1" office={office} />
        </div>
      </div>
    </div>
  );
};
