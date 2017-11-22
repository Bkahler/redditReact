import React, { Component } from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = { term: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onSearchTermChange(term);
  };

  handleSubmit(e) {
    e.preventDefault();
    let term = this.state.term
    this.props.onSubRedditSubmit(term);
  };

  render() {
    return (
      <div className=''>
       <form onSubmit={ this.handleSubmit }>
          <input
            className='blues'
            placeholder='Enter Subreddit'
            value={ this.state.term }
            onChange={ event => this.onInputChange(event.target.value) } />
          <input className='reds' type="submit" value="add" />
        </form>
      </div>
    );
  };
};

export default SearchBar;

