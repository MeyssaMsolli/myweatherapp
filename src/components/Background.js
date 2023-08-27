import React from 'react';
import backgroundImage from '../image/background.jpg';

function Background() {
    //Change background based on weather condition

return(
    <div className="background"
    style={{
        backgroundImage: `url(${backgroundImage})`,
    
      }}>
        {/*Dispaly background content*/}
    </div>
);

}



export default Background;