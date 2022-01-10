import React, { Component } from "react";
import { render } from "react-dom";
import { SearchBar } from "../components/search-bar";
import { VideoList } from "./video-list";
import axios from "axios";
import { VideoDetail } from "../components/video-detail";
import { Video } from "../components/video";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL_START = "discover/movie?";
const API_KEY = "api_key=c202133b85d48a2c7fab900e9587716d";
const POPULAR_MOVIES_URL_END =
  "&language=en-US&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const VIDEO_MOVIE_URL_END = "&language=en-US&include_adult=false";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }

  componentWillMount() {
    this.initMovies();
  }

  initMovies() {
    axios
      .get(
        `${API_END_POINT}${POPULAR_MOVIES_URL_START}${API_KEY}${POPULAR_MOVIES_URL_END}`
      )
      .then(
        function (response) {
          this.setState(
            {
              movieList: response.data.results.slice(1, 6),
              currentMovie: response.data.results[0],
            },
            () => {
              this.applyVideoToCurrentMovie();
            }
          );
        }.bind(this)
      );
  }

  applyVideoToCurrentMovie() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}/videos?${API_KEY}${VIDEO_MOVIE_URL_END}`
      )
      .then(
        function (response) {
          // console.log("ICI", response);
          const youtubeKey = response.data.results[0].key;
          let newCurrentMovieState = this.state.currentMovie;
          newCurrentMovieState.videoId = youtubeKey;
          this.setState({ currentMovie: newCurrentMovieState });
          console.log("ICI maintenant", this.state.currentMovie);
        }.bind(this)
      );
  }

  receiveCallback(movie) {
    this.setState({ currentMovie: movie }, function () {
      this.applyVideoToCurrentMovie();
    });
  }

  render() {
    const renderVideoList = () => {
      if (this.state.movieList.length >= 5) {
        return (
          <VideoList
            movieList={this.state.movieList}
            callback={this.receiveCallback.bind(this)}
          />
        );
      }
    };
    return (
      <React.Fragment>
        <SearchBar />
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetail
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>
          <div className="col-md-4">{renderVideoList()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export { App };
