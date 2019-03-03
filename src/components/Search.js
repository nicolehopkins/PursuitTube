import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import Axios from 'axios'
import SearchResults from './SearchResults';


class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {input: ''};
  
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
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
          q: this.state.input,
          pageToken: ''
        }
      })
      .then(
        console.log(this.state.input)
      )
    }
  
    handleChange= (event) => {
        console.log("E is:",event.target.value)
      this.setState({input: event.target.value});
    }
  
    handleSubmit= (event) => {
      const q = this.state.input;
      this.props.history.push(`/search/${q}`);
      // event.preventDefault();
    }
     
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
            <input type="text" value={this.state.input} onChange={this.handleChange} />
       </label>
        <button onClick={this.handleSubmit} type="submit" value="Search" />
        </form>
      );
    }
  }

  export default withRouter(Search);

  