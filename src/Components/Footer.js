import React from 'react';
import {Container} from 'react-bootstrap';


const Footer = () => (
    <div className='Footer'>
    <Container  fluid style={{backgroundColor: '#212529', color: '#fff'}}>
        <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <p>Text footer</p>
        </Container>
    </Container>
    </div>
)

export default Footer;
