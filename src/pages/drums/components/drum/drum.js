import React, { useEffect } from 'react';

export const Drum = (props) => {
  const audio = React.createRef();
  const qwertyKey = React.createRef();

  function playSound() {
    audio.current.currentTime = 0;
    audio.current.play();
    qwertyKey.current.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    e.target.classList.remove('playing');
  }

  useEffect(() => {
    if (props.selectedKey) {
      playSound();
    }
  });

  return (
    <React.Fragment>
      <div
        data-key={props.keyValue}
        className="key"
        onClick={playSound}
        ref={qwertyKey}
        onTransitionEnd={removeTransition}
      >
        <kbd>{props.qwertyKey}</kbd>
        <span className="sound">{props.description}</span>
      </div>

      <audio data-key={props.keyValue} src={props.src} ref={audio}></audio>
    </React.Fragment>
  );
};
