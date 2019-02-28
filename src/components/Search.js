import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {input: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        console.log("E is:",event.target.value)
      this.setState({input: event.target.value});
    }
  
    handleSubmit(event) {
      alert('clicked ' + this.state.input);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
            <input type="text" value={this.state.input} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Search;
