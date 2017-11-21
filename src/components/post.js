import React, { Component } from 'react';

// <iframe src='https://www.gfycat.com/ifr/RichPepperyFerret' frameborder='0' scrolling='no' width='640' height='346' allowfullscreen></iframe>
class PostFormatter {

  static postItem(post){
    if(!post){
      return(
        <div className='blues' key={ post.data.id }>

        </div>
      );
    };

    const preview = this.preview(post);
    const postUrl = `https://www.reddit.com/${post.data.url}`;


    return(
      <div className='col quarter-width full-height black' key={ post.data.id }>
        { preview }
        <div className=''>
          <div className='blues'>
            <a href={ postUrl } className='' target="_blank"> { post.data.title } </a>
          </div>
          <div className='blues'>
            <p>
              <strong>Author:</strong> { post.data.author } |
              <strong> SubReddit:</strong> { post.data.subreddit_name_prefixed } <br/>
              <strong> Ups:</strong> { post.data.ups } |
              <strong> Comments:</strong> { post.data.num_comments }<br/>
            </p>
          </div>
        </div>
      </div>
    );
  };

  static hasImage(post){
    let thumbnail = post.data.thumbnail;
    let hasImage = ( thumbnail != "" && thumbnail !='image' && thumbnail !='default' && thumbnail!='self' && thumbnail!='nsfw')
    return hasImage
  };

  static preview(post){

    var thumbnail = post.data.thumbnail;
    var url = post.data.url
    var urlExt = post.data.url.split('.').pop()

    if(urlExt == 'jpg' || urlExt =='png'){
      var img = url
    } else{
      var img = thumbnail
    }

    if(this.hasImage(post)) {
      if(this.isGif(post)){
        return(
          <div className='reds'>
            <img className='gif' src={ this.formatExt(url) }/>
          </div>
        );
      } else{
        return(
          <div className='reds'>
            <img className='pic' src={ img }/>
          </div>
        );
      }
    }else{
      return(
        <div className='reds'>
          <img src='data:image/png;base64,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' />
        </div>
      );
    }
  };

  static formatExt(url){
    var newUrl = url.split(".");
    newUrl.pop()
    newUrl.push("gif")
    var returnUrl = newUrl.join(".")
    return returnUrl
  };

  static isGif(post){
    var url = post.data.url
    var extention = url.split(".").pop();
console.log("-----------------TITLE------------------")
console.log(post.data.title);
console.log("-----------------EXT------------------")
console.log(extention);
console.log("-----------------Data------------------")
console.log(post.data);
console.log("-----------------------------------")

    if (extention == 'gifv') return true;
    if (extention == 'gif') return true;
    return false
  };
};

export default PostFormatter;
