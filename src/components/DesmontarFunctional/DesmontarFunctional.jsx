import React, { useState, useEffect } from "react";

const Example = () => {
    const [show, setshow] = useState(true);
  
    const handleRemove = () => setshow(!show);
  
    return (
      <div>
        {show ? <ExampleChild /> : null}
        <button onClick={handleRemove}>Eliminar el componente ExampleChild</button>
      </div>
    );
  };

  export default Example;

  const ExampleChild = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
     
      const mouseMove = ({x, y}) => {
          setCoords({x, y})
          console.log({x,y});
      }

      window.addEventListener('mousemove', mouseMove)

      return () => window.removeEventListener('mousemove', mouseMove);
    }, []);
    
    return <p>x:{coords.x} y:{coords.y}</p>;
  };