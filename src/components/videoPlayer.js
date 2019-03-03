import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);

        this.state ={
            videoID: '',
            desc:'',
        }

    }

    componentDidMount(){

        this.setState({
            videoID: this.props.match.params.id
        })
    }



    VideoPlayer = () => {
        let video = this.state.videoID
        const link = `https://www.youtube.com/embed/${video}?autoplay=1&fs=1&origin=http://localhost:3000`;

        return (
            <iframe title='yt-video' type="text/html" width="640" height="360"
                src={link} frameBorder="0"></iframe>
        );
    }

    render() {
        return (
            <div className="App">
                <this.VideoPlayer />
            </div>
        );
    }
}

export default VideoPlayer;
