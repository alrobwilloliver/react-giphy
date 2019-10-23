import React, { Component } from 'react';

class Gif extends Component {
  

  selectGif = () => {
	if(this.props.selectGif) {
	  this.props.selectGif(this.props.id);
	}
  }

  render() {
  	const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
  	return(
	  <img className='gif' onClick={this.selectGif} src={src} alt="" />
  	)
  }
}

export default Gif;