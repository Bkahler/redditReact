import React, { Component } from 'react';
import _  from 'lodash';
import ReactDom from 'react-dom';
import snoowrap from 'snoowrap';
import PostList from './components/post_list';
import SearchBar from './components/search_bar';
import axios    from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mainFeedPosts: [],
      subRedditPosts:[],
      subreddits:[]
    };
    this.mainFeedSearch();
  };

  mainFeedSearch(){
    const url = "https://www.reddit.com/.json";
    axios.get(url).then(response => {
        this.setState({ mainFeedPosts: response.data.data.children });
    }).catch(error => {
        console.log(error);
    });
  };

  subRedditSearch(term){
    let url = `https://www.reddit.com/r/${term}.json`;
    axios.get(url).then(response => {
        this.setState({ subRedditPosts: response.data.data.children });
    }).catch(error => {
        console.log(error);
    });
  };

  subRedditAdd(term){
    this.setState({
      subreddits: [...this.state.subreddits, term]
    })
  };

  testFunction(term){
    console.log(term);
  };

  render(){
    const subRedditSearch = _.debounce((term) => { this.subRedditSearch(term) }, 150);

    return(
      <div className='row carousel-row'>
        <h3> ReactReddit </h3>
        <div className='blue carousel-row col-md-12'>
          <h6>Main Feed (Top 25)</h6>
          <PostList subreddits={[]} posts={ this.state.mainFeedPosts }/>
        </div>
        <div className='blue  carousel-row col-md-12'>
          <SearchBar
            onSearchTermChange={ term => subRedditSearch(term) }
            onSubRedditSubmit={ term => this.subRedditAdd(term) }
          />
          <PostList
            subreddits= { this.state.subreddits }
            posts= { this.state.subRedditPosts }
            onSubRedditClick = { term => subRedditSearch(term) }
          />
        </div>
      </div>
    );
  };
}

ReactDom.render(<App />, document.querySelector('.container-fluid'));
