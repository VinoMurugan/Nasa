import React, { useState } from 'react';
import './App.css';
import AstronomyPicture from './component/AstronomyPicture'; 
import DateInput from './component/DataInput';

function App(){
    const [selectedDate, setSelectedDate] = useState('');
    const apiKey = 'rwhCGfRfZ8AOd3uHhsC8e8kjYYfzLca';

    const handleDateSubmit = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <div className="App">
        
        <h1> NASA Astronmy Picture of the day</h1>
        
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