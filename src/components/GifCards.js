import React from "react";

function GifCards({
  trendingGifs,
  randomGif,
  randomGifClicked,
  trendingLoading,
  randomGifLoading,
}) {
  if (randomGifLoading === false && randomGifClicked === true) {
    return (
      <>
        <div className="container d-flex justify-content-center align-items-center mb-120">
          <img
            src={randomGif.images.downsized_medium.url}
            alt="GIF"
            className="img-fluid"
          />
        </div>

        <div className="container-fluid gifs-container">
          {trendingGifs.data.map((e) => {
            return (
              <div key={e.id}>
                <img
                  src={e.images.downsized_medium.url}
                  alt="GIF"
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </>
    );
  } else if (trendingLoading === false && randomGifClicked === false) {
    return (
      <div className="container-fluid gifs-container">
        {trendingGifs.data.map((e) => {
          return (
            <div key={e.id}>
              <img
                src={e.images.downsized_medium.url}
                className="img-fluid"
                alt="GIF"
              />
            </div>
          );
        })}
      </div>
    );
  } else if (trendingLoading === true || randomGifLoading === true) {
    return <p className="loading-p mt-4">Loading...</p>;
  }
}

export default GifCards;
