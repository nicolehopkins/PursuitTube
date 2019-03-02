import React, { Component } from 'react'
import {
    Container, Row, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import './HomeCard.css'

const HomeCard = (props) => {

        return (
            <>
                <Container  xs="12">
                    {/* Single Row Start */}
                    <Row className='rowL'>
                        <CardDeck className="container">
                            {/* Single Card Start */}
                            <Card className='cardCol'> 
                                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>{props.vtitle}</CardTitle>
                                    <CardSubtitle className ='desc'>{props.chanName}</CardSubtitle>
                                    <CardSubtitle className='desc'>{props.desc}</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            {/* Single Card Start */}
                            <Card className='cardCol'>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            {/* Single Card Start */}
                            <Card className='cardCol'>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            {/* Single Card Start */}
                            <Card className='cardCol'>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                        </CardDeck>
                    </Row>
                    {/* Single Row End */}
                </Container>
                
            </>
        )
}

export default HomeCard