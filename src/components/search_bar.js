import React, {Component} from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = { term: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  render() {
    return (
      <div className='search-bar col-md-8'>
       <form onSubmit={ this.handleSubmit }>
          <input
            className='subRedditSearch'
            placeholder='Enter Subreddit'
            value={ this.state.term }
            onChange={ event => this.onInputChange(event.target.value) } />
          <input className='add-btn' type="submit" value="add" />
        </form>
      </div>
    );
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
};

export default SearchBar;

