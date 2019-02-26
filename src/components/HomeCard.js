import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';

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
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    <Button>Show More</Button>
                                </CardBody>
                            </Card>
                            {/* Single Card End */}
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    <Button>Show More</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    <Button>Show More</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    <Button>Show More</Button>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    {/* Single Row End */}
                </div>
            </>
        )
    }
}

export default HomeCard