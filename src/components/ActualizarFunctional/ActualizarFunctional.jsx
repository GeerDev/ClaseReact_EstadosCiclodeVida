import React, { useState, useEffect } from "react";

const Example = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');
  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 3000);
  });
  useEffect(()=>{
    console.log("el componente se ha actualizado");
  }, [favoriteColor])
  return <h1>My Favorite Color is {favoriteColor}</h1>;
};
export default Example;