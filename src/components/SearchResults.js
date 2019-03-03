

import React, { Component } from 'react';
import './Default.css';
import Axios from 'axios';
import {
    Container, Row, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import './HomeCard.css'





class SearchResults extends Component {
    //  console.log('props: ', props)
    constructor(props) {
        super(props)
        this.state = {
            results: '',
            video: [],
        }
    }

    componentDidMount() {
        // this.setState({results: this.props.match.params.id})
        // console.log(this.state)
        Axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 10,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyD3_URtKZPE7g8ZUZKmx5If5lP5fo8GUU8',
                q: this.state.results,
                pageToken: ''
            }
        })
            .then(data => {
                //console.log(data.data.items)
                this.setState({
                    video: data.data.items
                })
                console.log(this.state)
            })
    }


    render() {
        return (
            <>
        
                                    <ul>
                                        {

                                            !this.state.video ? <h1>LOADING</h1> : this.state.video.map((e, i) => {
                                                return (
<li key={i}>
                                                    <img src={e.snippet.thumbnails.medium.url} />
                                                    <h5> {e.snippet.title}</h5>

                                                </li>
                                                )
                                                
                                            })

                                        }
                                    </ul>




                                }
                                
            </>

        );


    }

}

{/* <div>
    <h1>`Search Results${this.state.input}`</h1>
    <Card>
        <CardImg top width="100%" src="https:placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
            <CardTitle>item.snippet.title</CardTitle>
            <CardSubtitle>item.id.videoId</CardSubtitle>
        </CardBody>
    </Card>
     </div > */}

export default SearchResults;