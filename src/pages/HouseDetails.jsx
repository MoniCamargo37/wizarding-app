import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function HouseDetails() {
  const { houseId } = useParams();
  const [house, setHouse] = useState({});
  useEffect(() => {
    const getHouse = async () => {
      try {
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/houses/${houseId}`);
        setHouse(response.data);
      } catch (err) {
        console.error(err);
    
      }
    };
  
    getHouse();
  }, [houseId]);

  console.log(houseId);

  return (
    <div>
        <Link to="/">Back Home</Link>
{house && (
  <div>
    <h2>{house.name}</h2>
    <p>Founded by: {house.founder}</p>
    <p>Colors: {house.colors}</p>
    <p>Element: {house.element} | Animal: {house.animal}</p>
    <p>Traits of Student:</p>
    <ul> 
      {house.traits && house.traits.map((elem) => (
        <li key={elem.id}>{elem.name}</li> 
      ))} 
    </ul>
  </div>
)}
</div>
  );
}

