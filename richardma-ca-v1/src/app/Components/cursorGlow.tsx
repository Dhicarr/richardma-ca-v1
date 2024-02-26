"use client"
import React, { useState, useEffect } from 'react';

const CursorGlow = (): JSX.Element => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="hidden lg:block circle absolute -translate-x-1/2 -translate-y-1/2 
      w-[200px] h-[200px] rounded-full -z-10 bg-purple-500"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        filter:"blur(10rem)",
      }}
    >
    </div>
  );
}

export default CursorGlow
