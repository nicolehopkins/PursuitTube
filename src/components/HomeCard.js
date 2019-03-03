import React, { Component } from 'react'
import {
    Container, Row, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';

import './HomeCard.css'


const HomeCard = (props) => {
    return (
        <>
            
            {/* Single Card Start */}
            < Card className='cardCol' key={props.id}>
            
                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle className='vTitle'>{props.vtitle}</CardTitle>
                    <br />
                    <CardSubtitle className='desc'>{props.chanName}</CardSubtitle>
                    <CardSubtitle className='desc'>{props.publishedAt}</CardSubtitle>
                </CardBody>
            
            </Card >
            {/* Single Card End */}
            
        </>

    )
}



export default HomeCard