import React, { useState, useEffect } from 'react';

export default function AstronmyPicture ()  {
  const apiKey = 'rwhCGfRfZ8AOd3uHhsC8e8kjYYfzLca';
 
 const [nasaData,setnasaDdata] = useState(null);

 const getPicture = async (date) =>{
  const response = await fetch (
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
  )
  const data = await response.json();
  setnasaDdata(data)
 }
useEffect(()=>{
  getPicture('It')
},[])
return (

    fetchAPOD();
  }, [apiKey, date]);

  if (!apodData) {
    return <div>....OOPS NO PHOTOS....</div>;
  }

  return (
    <div className="apod-container">
      <h2>Astronomy Picture of the Day</h2>
      <img src={apodData.url} alt={apodData.title} />
      <h3>{apodData.title}</h3>
      <p>{apodData.explanation}</p>
    </div>
  );
};

export default AstronomyPicture;
