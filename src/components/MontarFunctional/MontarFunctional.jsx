import React, { useState, useEffect } from "react";

const Example = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');
  useEffect(() => {
      console.log("Acabo de aparecer en el DOM");
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 3000);
  }, []);
  return <h1>My Favorite Color is {favoriteColor}</h1>;
};

export default Example;