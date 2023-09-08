import React,{useEffect, useState} from 'react';

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
  getPicture()
},[])
return (


 <img src={nasaData} alt={nasaData} />

)
}
