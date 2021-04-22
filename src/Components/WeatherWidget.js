import React from 'react';
import {Card, Col, Form, Button} from 'react-bootstrap';
import Photo from './Photo';
import WeatherInfo from './WeatherInfo';
import {getWeather} from '../redux/actions/actions';
import {connect} from 'react-redux';

class WeatherWidget extends React.Component {

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            this.props.dispatch(getWeather({
                cityName: city,
                widgetName: this.props.widgetName
            }));
        }
    }

    render() {
        const widgetProps = this.props.weatherInfo?.data?.[this.props.widgetName];
        return (
            <Col>
                <Card style={{width: '18rem'}}>
                    <Photo city={widgetProps.city}/>
                    <Card.Body>
                        <div>
                            <WeatherInfo
                                {...widgetProps}
                                error={this.props.weatherInfo?.error}
                            />
                            <Form onSubmit={this.getWeather} >
                                <Form.Group>
                                    <Form.Control type="text" name="city" placeholder="Місто" />
                                    <Button variant="info" type="submit" >GET WEATHER</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

const mapStateToProps = state => ({
    weatherInfo: state.weatherInfo
});

export default connect(mapStateToProps)(WeatherWidget);


