import React, { Component } from 'react';
import Slider from 'react-slick';
import PostFormatter from './post'
import LoadingPannel from './loading_pannel'

const PostList = (props)=> {

  if (props.posts.length < 1 ){
    if (props.subRedditList == true){
      return(
        <div className=''>
          <div className='greens'>
            <center>
              <h1>Search For A Subreddit</h1>
            </center>
          </div>
        </div>
      );
    } else{
      return(
        <LoadingPannel />
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
    <div className='row feed-row'>
      { subreds }
      <Slider {...settings}>
        { postItems }
      </Slider>
    </div>
  );
}

export default PostList;
