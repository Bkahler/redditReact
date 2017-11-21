import React, {Component} from 'react';

class LoadingPannel extends React.Component{
  render(){
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
  };
};

export default LoadingPannel;
