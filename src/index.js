// react manages our components
import React, {Component} from 'react';
// react dom deals with pushing to the dom
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBLflps4xTl17EMOMCZEzCtBUmqD6Ol92M';


//create new component. this should produce some html.
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	}
	
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				// 'this.setState({ videos })'...same as 'this.setState({ videos: videos })'
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
		<div>
			<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
			<div>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		</div>
		);
	}
}

// take this component's generated html and put in on the page (DOM).

ReactDOM.render(<App />, document.querySelector('.container'));
