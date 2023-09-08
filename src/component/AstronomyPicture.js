import React, { useState, useEffect } from 'react';

const AstronomyPicture = ({ apiKey, date }) => {
  const [nasaData, setnasaData] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setnasaData(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };

    fetchAPOD();
  }, [apiKey, date]);

  if (!nasaData) {
    return <div>....OOPS NO PHOTOS....</div>;
  }

  return (
    <div className="apod-container">
      <h2>Astronomy Picture of the Day</h2>
      <img src={nasaData.url} alt={nasaData.title} />
      <h3>{nasaData.title}</h3>
      <p>{nasaData.explanation}</p>
    </div>
  );
};

export default AstronomyPicture;
