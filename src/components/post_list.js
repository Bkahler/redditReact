import React, { Component } from 'react';
import Slider from 'react-slick';
import PostFormatter from './post'

const PostList = (props)=> {

  if (props.posts.length < 1 ){
    if (props.subRedditList == true){
      return(
        <div className='col-md-12 list'>
          <div className='loading'>
            <center>
              <h1>Search For A Subreddit</h1>
            </center>
          </div>
        </div>
      );
    } else{
      return(
        <div className='col-md-12 list'>
          <div className='loading col-md-4'>
            <center>
              <img src='./src/components/loading.gif'/>
            </center>
          </div>
          <div className='loading col-md-4'>
            <center>
              <img src='./src/components/loading.gif'/>
            </center>
          </div>
          <div className='loading col-md-4'>
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
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return(
    <div className='col-md-12 list'>
      { subreds }
      <Slider {...settings}>
        { postItems }
      </Slider>
    </div>
  );
}

export default PostList;
