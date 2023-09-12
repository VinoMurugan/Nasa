import React, { useState } from 'react';
import './App.css';
import AstronomyPicture from './component/AstronomyPicture'; 
import DateInput from './component/DataInput';

function App(){
    const [selectedDate, setSelectedDate] = useState('');
    const apiKey ='kOaYl1IgYvHn4c8Anmyheer0brFNnpTNIqdgARrt';

    // const  apiKey  = process.env.REACT_APP_API_KEY
   
    
    const handleDateSubmit = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <div className="App">
        
        <h1>"Want to See  An Amazing Picture Try Here"</h1>
        <h1>"For NASA, space is still a high priority."</h1>
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