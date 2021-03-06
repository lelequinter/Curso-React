import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0})
    const { x, y } = coords;

    useEffect(() => {
    //   console.log('componente montado');

    const mouseMove = (e) => {
        const coords = { x: e.x, y: e.y };
        // console.log( coors );
        setCoords( coords );
    }
    
        window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      }
    }, [])
    

  return (
    <div>
        
        <h3>
            ERES GENIAL!!
        </h3>

        <p>
            x: { x } y: { y }
        </p>

    </div>
  )
}
