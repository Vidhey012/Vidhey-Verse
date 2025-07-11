'use client';

import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [playCount, setPlayCount] = useState(0);
  const maxPlays = 1; 

  useEffect(() => {
    const handleAudioEnded = () => {
      if (playCount < maxPlays - 1) {
        setPlayCount(prevCount => prevCount + 1);
        audioRef.current.play();
      }
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener('ended', handleAudioEnded);

    audioElement.play();

    return () => {
      audioElement.removeEventListener('ended', handleAudioEnded);
    };
  }, [playCount]);

  return (
    <audio
      ref={audioRef}
      src="/audio/Main_song.mp3"
      autoPlay
      hidden
    />
  );
};

export default AudioPlayer;
