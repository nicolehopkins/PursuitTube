import React, { Component } from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import './HomeCard.css'

class HomeCard extends Component {

    render() {
        return (
            <>
                <div className='container col-12'>
                    {/* Single Row Start */}
                    <div className='row'> 
                        <CardDeck>
                            {/* Single Card Start */}
                            <Card> 
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className ='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            {/* Single Card Start */}
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            {/* Single Card Start */}
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            {/* Single Card Start */}
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='vTitle'>Title of the Video</CardTitle>
                                    <CardSubtitle className='desc'>Channel Name</CardSubtitle>
                                    <CardSubtitle className='desc'>Uploaded Time</CardSubtitle>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                        </CardDeck>
                    </div>
                    {/* Single Row End */}
                </div>
                
            </>
        )
    }
}

export default HomeCard