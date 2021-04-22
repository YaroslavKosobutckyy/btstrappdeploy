import React from 'react';
import { Card } from 'react-bootstrap';


class WeatherInfo extends React.Component{


    render() {
        return(
        <div>
         {this.props.city &&
                <div>
                    <Card.Title>
                        <p>Місто: {this.props.city}, {this.props.country}</p>
                    </Card.Title>
                    <Card.Text>
                        <p>Температура: {this.props.temp} &#8451;</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Схід сонця: {this.props.sunrise} год.</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Захід сонця: {this.props.sunset} год.</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Тиск: {this.props.pressure}  Па.</p>
                    </Card.Text>
                </div>
         }
         </div>
        );
    }
}

export default WeatherInfo;
