import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay' ;
import Background  from './components/Background';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [location, setLocation]=useState('');

  const handleSearch= (searchLocation) =>{
    setLocation(searchLocation);
  };

  return (
    <div className="app-container">
      <h1>React Weather APP</h1>
      <SearchBar onSearch={handleSearch} />
      {location &&<WeatherDisplay location={location} />}
    <Background /> {/* Conditionally change background based on weather */}
    <Footer />
    </div>
  );
    
}

export default App;
