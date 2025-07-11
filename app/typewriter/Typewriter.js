// src/components/Typewriter.js
"use client";

import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 100, pause = 2000, colors = ['#16f2b3', '#fbbf24'] }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (index < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + texts[textIndex].charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
        setColorIndex((colorIndex + 1) % colors.length);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText, textIndex, colorIndex, texts, speed, pause, colors]);

  return (
    <span style={{ color: colors[colorIndex] }}>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;
