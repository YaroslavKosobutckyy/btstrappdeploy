import React from 'react';
import {Container, Row} from 'react-bootstrap';
import WeatherWidget from '../Components/WeatherWidget';

export default () => (
 
    <div className='MainConteiner'>
        <Container style={{width: '100%', paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <WeatherWidget widgetName="widget1"/>
                <WeatherWidget widgetName="widget2" />
                <WeatherWidget widgetName="widget3" />
            </Row>
        </Container>
    </div>
);
