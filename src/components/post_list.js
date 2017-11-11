import React, { Component } from 'react';
import Slider from 'react-slick';
import PostFormatter from './post'

const PostList = (props)=> {

  const postItems = props.posts.map((post) =>{
    return(
      PostFormatter.postItem(post)
    );
  });

  const subreds = props.subreddits.map((subR) =>{
    return(
      <button
        onClick={ () => props.onSubRedditClick(subR) }
        type="button"
        className="btn btn-primary"
        key={ subR }>
        { subR }
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
