import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
class App extends Component {

  render() {
  	const gifs = [
	  {id: 'Hqk8lQqi8ECsw'},
	  {id: 'swPH6f77yLk2I'}
  	];
  	return(
	<div>
		<div className="left-scene">
		  <SearchBar />
		  <div className="selected-gif">
			<Gif id='Hqk8lQqi8ECsw' />
		  </div>
		</div>
		<div className="right-scene">
		  <GifList className='gif-list' gifs={gifs}/>
		</div>
	</div>
  	)
  };
}

export default App;