import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
class App extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  gifs: [],
	  selectedGifId: "xTiTnJ0uuZEwVlYQog"
	}
  }

  search = (query) => {
	//Todo - Api Call
	giphy('Ok0HCc5YGNEr44rmiAgDgymmHGFs7gIk').search({
	  q: query,
	  rating: 'g',
	  limit: 20
	}, (err, res) => {
	    // Res contains gif data!
	  this.setState({
	  	gifs: res.data
	  });
	});
  };

  selectGif = (id) => {
	this.setState({ selectedGifId: id});
  }

  render() {
  	return(
	<div>
		<div className="left-scene">
		  <SearchBar searchFunction={this.search} />
		  <div className="selected-gif">
			<Gif id={this.state.selectedGifId} />
		  </div>
		</div>
		<div className="right-scene">
		  <GifList className='gif-list' selectGif={this.selectGif} gifs={this.state.gifs}/>
		</div>
	</div>
  	)
  };
}

export default App;