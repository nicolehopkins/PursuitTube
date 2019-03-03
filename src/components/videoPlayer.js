import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class VideoPlayer extends Component {
    constructor(props) {
        super(props);

    }

    VideoPlayer = ({ videoID = 'zpWYQ1YtgnI' }) => {
        const link = `https://www.youtube.com/embed/${videoID}?autoplay=1&fs=1&origin=http://localhost:3000`;

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
