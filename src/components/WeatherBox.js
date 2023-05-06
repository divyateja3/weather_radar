import React from 'react';
import './WeatherBox.css'
import sun from '../images/01d.svg'

export default class WeatherBox extends React.Component {

    // returns weekday to a given Date value
    getDay = (date) => {
        let weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        const dayNumber = new Date(date).getDay()
        
        return weekday[dayNumber];
    }

    render(props) {
        return(
            <div className='weather-box'>
                <h1>{this.props.date ? this.getDay(this.props.date) : ''}</h1>
                <img src={sun} alt='sun' />
                <span className='temp'>{Math.round(this.props.temp - 273.15)}°C</span>
            </div>
        );
    }
}