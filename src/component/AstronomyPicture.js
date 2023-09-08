import React, { useState, useEffect } from 'react';

const AstronomyPicture = ({ apiKey, date }) => {
  const [apodData, setApodData] = useState(null);

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
        setApodData(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };

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
