import React from 'react';
import {Card} from 'react-bootstrap';

import KYIV from '../Images/Kuiv.jpg';
import LVIV from '../Images/Lviv.jpg';
import MYKOLAIV from '../Images/mukolaiv.jpg';
import ODESA from '../Images/odesa.jpg';
import RIVNE from '../Images/rivne.jpg';
import SUMY from '../Images/sumy.jpg';
import KHARKIV from '../Images/xarkiv.jpg';
import DEFAULTFOTO from '../Images/misto.jpg';

const cityMap = {
    kyiv: KYIV,
    lviv: LVIV,
    mykolaiv: MYKOLAIV,
    odesa: ODESA,
    rivne: RIVNE,
    sumy: SUMY,
    kharkiv: KHARKIV
}


export class Photo extends React.Component {
    constructor(props) {
        super(props)
        this.getImage = this.getImage.bind(this);
    }

    getImage() {
        return cityMap[this.props.city.toLowerCase()] || DEFAULTFOTO;
    }

    render() {
        if (!this.props.city) {
            return null;
        }
        return (
            <Card.Img variant="top" src={this.getImage()}/>
        );
    }
}

export default Photo;
