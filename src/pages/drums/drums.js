import './drums.css';

import {
  clap,
  boom,
  hihat,
  kick,
  openHat,
  ride,
  snare,
  tink,
  tom,
} from './assets/sounds/index';

import { useEffect, useState } from 'react';
import { Drum } from './components/drum/drum';

export const Drums = () => {
  const [qwertKey, setQwertyKey] = useState('none');

  function handler({ key }) {
    setQwertyKey(key);
  }

  useEffect(() => {
    window.addEventListener('keydown', handler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);

  useEffect(() => {
    setQwertyKey('none');
  });

  return (
    <div className="drums">
      <div className="keys">
        <Drum
          keyValue="65"
          qwertyKey="a"
          selectedKey={qwertKey === 'a'}
          description="clap"
          src={clap}
        />
        <Drum
          keyValue="83"
          qwertyKey="s"
          selectedKey={qwertKey === 's'}
          description="hihat"
          src={hihat}
        />
        <Drum
          keyValue="68"
          qwertyKey="d"
          selectedKey={qwertKey === 'd'}
          description="kick"
          src={kick}
        />
        <Drum
          keyValue="70"
          qwertyKey="f"
          selectedKey={qwertKey === 'f'}
          description="openHat"
          src={openHat}
        />
        <Drum
          keyValue="71"
          qwertyKey="g"
          selectedKey={qwertKey === 'g'}
          description="boom"
          src={boom}
        />
        <Drum
          keyValue="72"
          qwertyKey="h"
          selectedKey={qwertKey === 'h'}
          description="ride"
          src={ride}
        />
        <Drum
          keyValue="74"
          qwertyKey="j"
          selectedKey={qwertKey === 'j'}
          description="snare"
          src={snare}
        />
        <Drum
          keyValue="75"
          qwertyKey="k"
          selectedKey={qwertKey === 'k'}
          description="tom"
          src={tom}
        />
        <Drum
          keyValue="76"
          qwertyKey="l"
          selectedKey={qwertKey === 'l'}
          description="tink"
          src={tink}
        />
      </div>
    </div>
  );
};
