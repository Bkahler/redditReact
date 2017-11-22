import React, { Component } from 'react';
import Slider          from 'react-slick';
import Post            from './post';
import LoadingPannel   from './loading_pannel';
import SubredditPannel from './subreddit_pannel';

const PostList = (props)=> {

  if (props.posts.length < 1 ){
    if (props.subRedditList == true){
      return(
        <SubredditPannel />
      );
    } else{
      return(
        <LoadingPannel />
      );
    }
  };

  const postItems = props.posts.map((post) =>{
    return(
      Post.postItem(post)
    );
  });

  const subRedditTabs = props.subreddits.map((subR) =>{
    return(
      <button
        onClick={ () => props.onSubRedditClick(`r/${subR}`) }
        type="button"
        className="subRedditBtn"
        key={ `r/${subR}` }>
        { `r/${subR}` }
      </button>
    );
  });

  const caroselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return(
    <div className='row feed-row'>
      { subRedditTabs }
      <Slider {...caroselSettings}>
        { postItems }
      </Slider>
    </div>
  );

}

export default PostList;
