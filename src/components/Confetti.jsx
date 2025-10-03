import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

const Confete = () => {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000); // Para depois de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='z-1 position-fixed'>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default Confete