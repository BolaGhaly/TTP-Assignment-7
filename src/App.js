import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GifCards from "./components/GifCards";
import SearchCards from "./components/SearchCards";
import GiphyLogo from "./logo/Giphy-logo.svg";

function App() {
  const [searchRegularGifs, setSearchRegularGifs] = useState([]);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [randomGif, setRandomGif] = useState([]);
  const [searchWord, setSearchWord] = useState(null);
  const [randomGifClicked, setRandomGifClicked] = useState(false);

  const [regularLoading, setRegularLoading] = useState(true);
  const [trendingLoading, setTrendingLoading] = useState(true);
  const [randomGifLoading, setRandomGifLoading] = useState(true);

  const fetchRegularGifs = async () => {
    setRegularLoading(true);
    const response = await axios(
      `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=${process.env.REACT_APP_API_KEY}`
    );

    setSearchRegularGifs(response.data);
    setTimeout(() => setRegularLoading(false), 1000);
  };

  const fetchTrendingGifs = async () => {
    setTrendingLoading(true);
    const response = await axios(
      `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingGifs(response.data);
    setTimeout(() => setTrendingLoading(false), 1000);
  };

  const fetchRandomGifs = async () => {
    setRandomGifLoading(true);
    const response = await axios(
      `http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setRandomGif(response.data.data);
    setTimeout(() => setRandomGifLoading(false), 1000);
  };

  useEffect(() => {
    fetchTrendingGifs();
    fetchRandomGifs();
  }, []);

  const isRandomGifClicked = () => {
    setRandomGifClicked(true);
    fetchRandomGifs();
  };

  let isFormSubmitted = false;
  function submitHandler(e) {
    // console.log(isFormSubmitted);
    e.preventDefault();
    isFormSubmitted = true;
    console.log(isFormSubmitted);
  }

  useEffect(() => {
    fetchRegularGifs();
  }, [isFormSubmitted]);

  if (isFormSubmitted === false) {
    console.log(isFormSubmitted)
    return (
      <>
        <div className="container-fluid">
          <div className="my-header">
            <img src={GiphyLogo} alt="giphy-logo" className="giphy-logo" />
            <button onClick={isRandomGifClicked} className="random-gif-button">
              Random Gif
            </button>
          </div>
          <form onSubmit={submitHandler} className="search-gif-form container">
            <input
              type="text"
              onChange={(event) => setSearchWord(event.target.value)}
              placeholder="Search all the GIFs"
            />
          </form>
        </div>
        <GifCards
          trendingGifs={trendingGifs}
          randomGif={randomGif}
          randomGifClicked={randomGifClicked}
          trendingLoading={trendingLoading}
          randomGifLoading={randomGifLoading}
          fetchRegularGifs={fetchRegularGifs}
        />
      </>
    );
  } else if (isFormSubmitted === true) {
    return (
      <>
        <div className="container-fluid">
          <div className="my-header">
            <img src={GiphyLogo} alt="giphy-logo" className="giphy-logo" />
            <button onClick={isRandomGifClicked} className="random-gif-button">
              Random Gif
            </button>
          </div>
          <form onSubmit={submitHandler} className="search-gif-form container">
            <input
              type="text"
              onChange={(event) => setSearchWord(event.target.value)}
              placeholder="Search all the GIFs"
            />
          </form>
        </div>
        <SearchCards
          regularLoading={regularLoading}
          searchRegularGifs={searchRegularGifs}
        />
      </>
    );
  }
}

export default App;
