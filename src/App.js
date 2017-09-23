import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import Searchbar from './search_bar';
import VideoList from './video_list';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';

const API_KEY = "AIzaSyBzfJNSBk4HM5-xCWfqbiiUBU7UXkmPIr4";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    // Searching Youtube API for videos
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div className="App">
        <Searchbar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          videos = {this.state.videos}
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
