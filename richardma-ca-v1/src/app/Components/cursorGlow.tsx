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
      className="circle absolute -translate-x-1/2 -translate-y-1/2 
      w-[250px] h-[250px] rounded-full -z-10 text-[250px] bg-purple-500 filter-[blur(10rem)]"
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
