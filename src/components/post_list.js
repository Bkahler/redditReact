import React, { Component } from 'react';
import Slider from 'react-slick';
import PostFormatter from './post'

const PostList = (props)=> {

  if (props.posts.length < 1 ){
    if (props.subRedditList == true){
      return(
        <div className='reds'>
          <div className='greens'>
            <center>
              <h1>Search For A Subreddit</h1>
            </center>
          </div>
        </div>
      );
    } else{
      return(
        <div className='row'>
          <div className='col quarter-width greens'>
            <center>
              <img src='./src/components/loading.gif'/>
            </center>
          </div>
          <div className='col quarter-width greens'>
            <center>
              <img src='./src/components/loading.gif'/>
            </center>
          </div>
          <div className='col quarter-width greens'>
            <center>
              <img src='./src/components/loading.gif'/>
            </center>
            </div>
          <div className='col quarter-width greens'>
            <center>
              <img src='./src/components/loading.gif'/>
            </center>
          </div>
        </div>
      );
    }

  };

  const postItems = props.posts.map((post) =>{
    return(
      PostFormatter.postItem(post)
    );
  });

  const subreds = props.subreddits.map((subR) =>{
    let subRr = `r/${subR}`
    return(
      <button
        onClick={ () => props.onSubRedditClick(subR) }
        type="button"
        className="subRedditBtn"
        key={ subR }>
        { subRr }
      </button>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return(
    <div className='row feed-row reds'>
      { subreds }
      <Slider {...settings}>
        { postItems }
      </Slider>
    </div>
  );
}

export default PostList;
