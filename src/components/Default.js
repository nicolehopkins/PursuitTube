import React, { Component } from 'react';
import {
  Container, Row, CardDeck
} from 'reactstrap';
import './Default.css';
import Axios from 'axios';
import ShowMore from '../components/ShowMoreVids';
import HomeCard from './HomeCard';

class Default extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Default',
      feed: {
        search: '',
        videos: [],
        showMoreCount: 1,
      },
      img: "https://i.ytimg.com/vi/Wsfia2SmqQM/hqdefault.jpg"
    }
  }

  componentDidMount() {
    let API_KEY = 'AIzaSyDHLx_IXr--HFvVUuXr31vhUB04SL7ETQY'
    let SEARCH_QUERY = 'top trending'
    Axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 8,
        videoDefinition: 'high',
        type: 'video',
        videoEmbeddable: 'true',
        key: API_KEY,
        q: SEARCH_QUERY,
        pageToken: ''
      }
    })
      .then(res => {
        // console.log(res.data)
        console.log('old state: ', this.state)
        return res.data.items
      })
      .then(videoArr => {
        let videos = [];
        videos.forEach((e) => {
          videoArr.push(e.items)
          return videoArr;
        });
        this.setState({
          channel: SEARCH_QUERY.toUpperCase(),
          videos: videoArr,
        });
        console.log('new state: ', this.state)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // showMoreVideos = () => {
    
  //   Axios({
  //     method: 'get',
  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     params: {
  //       part: 'snippet',
  //       maxResults: videoCount,
  //       videoDefinition: 'high',
  //       type: 'video',
  //       videoEmbeddable: 'true',
  //       key: 'AIzaSyDZqqGk-IjxW7eCupcM4DanttA01Gs8srs',
  //       q: SEARCH_QUERY,
  //       pageToken: ''
  //     }
  //   })
  //     .then(res => {
  //       // console.log(res.data)
  //       console.log('old state: ', this.state)
  //       return res.data.items
  //     })
  //     .then(videoArr => {
  //       let videos = [];
  //       videos.forEach((e) => {
  //         videoArr.push(e.items)
  //         return videoArr;
  //       });
  //       this.setState({
  //         search: SEARCH_QUERY.toUpperCase(),
  //         videos: videoArr,
  //         showMoreCount: this.state.feed.showMoreCount + 1,
  //       });

  //       console.log('new state: ', this.state)

  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }


  render() {

    return (
      <>
        <div className="user-container">
          <h1 className='user-name'> {this.state.name}'s Personalized Feed</h1> {/* Name will change when user is changed  */}
          <div className='video-container'>
            <div className='feed-list'>
              <h4>Feed List</h4> {/* This will change with Nav.js  */}
              <div className='feed-name'>Feed 1</div>
              <div className='feed-name'>Feed 2</div>
              <div className='feed-name'>Feed 3</div>
            </div>
            <div>
              <div className='video-list'>
                <h4>{this.state.search}</h4>

                <Container xs="12">
                  {/* Single Row Start */}
                  <Row className='rowL'>
                    <CardDeck className="container" >
                      {
                        !this.state.videos ? <div className='loading spinner'></div> : this.state.videos.map((e, i) => {
                          return (
                            <>
                              <HomeCard key={i} img={e.snippet.thumbnails.high.url} vtitle={e.snippet.title} chanName={e.snippet.channelTitle} publishedAt={e.snippet.publishedAt} to={'/video/'+e.id.videoId}/>
                            </>
                          )
                        })
                      }
                    </CardDeck>
                  </Row>
                  {/* Single Row End */}
                </Container>
                <ShowMore showMoreVideos={this.showMoreVideos} />
              </div>
              <div className='video-list'>
                <h4>ESPN Videos</h4>
                {/* <HomeCard /> */}
                <ShowMore showMoreVideos={this.showMoreVideos} />
              </div>
              <div className='video-list'>
                <h4>Comedy Videos</h4>
                {/* <HomeCard /> */}
                <ShowMore showMoreVideos={this.showMoreVideos} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Default;