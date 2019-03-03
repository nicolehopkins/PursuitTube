import React, { Component } from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom'

import './HomeCard.css'


const HomeCard = (props) => {
    return (
        <>
            
            {/* Single Card Start */}
            < Card className='cardCol' key={props.id}>
                <Link to={props.to}>
                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle className='vTitle'>{props.vtitle}</CardTitle>
                    <br />
                    <CardSubtitle className='desc'>{props.chanName}</CardSubtitle>
                    <CardSubtitle className='desc'>{props.publishedAt}</CardSubtitle>
                </CardBody>
            </Link>
            </Card >
            {/* Single Card End */}
            
        </>

    )
}



export default HomeCard