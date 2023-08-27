import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';

function WeatherDisplay(props) {
  const { location } = props;
  const [longitude, setLongitude] = useState();
  const [lattitude, setLattitude] = useState();

  const [weather, setWeather] = useState();
  const [errorcode, setErrorCode] = useState();
    const [isLoading,setIsLoading]= useState(false);
  const fetchLocation = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=00b62b834dc35dfa8c1284f7fa582542`
      );
      const res = await response.json();
      const responseWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=00b62b834dc35dfa8c1284f7fa582542&units=metric`
      );
      const resweather = await responseWeather.json();
      console.log(resweather);
      setWeather(resweather.main.temp);
      setLattitude(res[0].lat);
      setLongitude(res[0].lon);
      setErrorCode(undefined);
    } catch (error) {
      setErrorCode(error);
    } finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    void fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="WeatherDisplay">
      <header className="WeatherDisplay-header">

        {
            isLoading ?<Card style={{ width: "18rem", marginTop: 20 , alignItems:'center'}}>    <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> </Card>:
        
        <Card style={{ width: "18rem", marginTop: 20 }}>
          {errorcode?<Card.Text>please try again </Card.Text>:<Card.Body>
            <Card.Title>The Weather Today</Card.Title>

            <Card.Text> location {location}</Card.Text>
            <Card.Text>longitude :{longitude}</Card.Text>
            <Card.Text>lattitude: {lattitude}</Card.Text>
            <Card.Text>weather :{weather}</Card.Text>
          </Card.Body>
       } </Card>}
      </header>
    </div>
  );
}

export default WeatherDisplay;
