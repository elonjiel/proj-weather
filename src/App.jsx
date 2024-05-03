
import './App.css'
import { useState } from 'react'
import axios from "axios"
import Weather from './components/Weather'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; 
import Weather from './components/Weather';


function App() {
  
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY = "8a776eb321af002ced9c89a2e429f35c"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation("");
    }
  }

  return (
    <div className='w-full h-full relative'>
      <div className="text-center p-8">
        <input type="text" className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md'
         placeholder='Enter Location'
         value={location}
         onChange={(event) => setLocation(event.target.value)}
         onKeyDownCapture={searchLocation}/>
      </div>
      <Weather weatherData = {data}/>
    </div>
  )
}

export default App
