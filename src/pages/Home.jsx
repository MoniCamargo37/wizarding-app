import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const [houses, setHouses] = useState(null);
  const getHouses = async () => {
    try {
      const response = await axios.get('https://wizard-world-api.herokuapp.com/houses');
      setHouses(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getHouses();
  }, [])
  return (
    <div>
      <h1>Hogwarts houses</h1>
        
      {houses === null ? (
        <p>Loading...</p>
      ) : (
        houses.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.name}</h2>
              <p>Founder: {elem.founder}</p>
              <Link to={`/houses/${elem.id}`}>See more</Link>
            </div>
          )
        })
      )}
    </div>
  )
  }  

export default Home;

