import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const api={ 
  key:"3cfcea070a8c9093b40f7d52970fe0b2",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
   
  const [query,setQuery]=useState('');
  const [weather,setweather]=useState('');

  const search =evt=>{
    if (evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(res=>res.json())
      .then(result=>{
        setQuery('');
        
        setweather(result)
      
      console.log(result)})
    }
  }


  const dateBuilder=(d)=>{
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day=days[d.getDay()]
    let date=d.getDate()
    let month=months[d.getMonth()]
    let year=d.getFullYear()
    return `${day} ${date} ${month} ${year}`




  }
  return (
    <div className={
      typeof weather.main !== "undefined" ? 
      (weather.main.temp > 25 ? 'app warm' : 
       weather.main.temp < 18 ? 'app winter' : 'app') 
      : 'app'
    }>
    <main>
   <div className='search-box'>
   <input type='text' className='search-bar' placeholder='search...'
   onChange={e=>setQuery(e.target.value)}
   value={query}
   onKeyDown={search}
   />
  
   </div>

   {(typeof weather.main!="undefined")?(

   <div className='nav'>
   
   <div className='location_box'>{weather.name},{weather.sys.country}</div>
   <div className='dateclass'><h3>{dateBuilder(new Date())}</h3></div>
   
 <div className='temp'>{weather.main.temp}℃ </div>
 <div className='weater-box'>{weather.weather[0].main}</div>
 <div className='weater-box'>Feels like  {weather.main.feels_like}℃ </div>
 
 </div>
):('')}

  
    </main>
    </div>
  );
}

export default App;
