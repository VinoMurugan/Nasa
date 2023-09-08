import React, { useState } from 'react';
import './App.css';
import AstronomyPicture from './component/AstronomyPicture'; 
import DateInput from './component/DataInput';

function App(){
    const [selectedDate, setSelectedDate] = useState('');
    const apiKey ='kOaYl1IgYvHn4c8Anmyheer0brFNnpTNIqdgARrt';

   
    
    const handleDateSubmit = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <div className="App">
        
        <h1>Want to See Amazing Picture</h1>
        
        <main>
        
        <DateInput onDateSubmit={handleDateSubmit} />
        
        {
       
       selectedDate && (<AstronomyPicture apiKey={apiKey} date={selectedDate} />)
        
        }
        </main>
        
        
        </div>
    )
}

export default App;