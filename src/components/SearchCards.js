import React from "react";

function SearchCards({ regularLoading, searchRegularGifs }) {
  if (regularLoading === false) {
    return (
      <div className="container gifs-container mt-4">
        <div className="row d-flex justify-content-center">
          {searchRegularGifs.data.map((e) => {
            return (
              <div
                className="col-md-6 col-12 d-flex justify-content-center"
                key={e.id}
              >
                <img
                  src={e.images.downsized_medium.url}
                  className="img-fluid"
                  alt="GIF"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (regularLoading === true) {
    return <p className="loading-p mt-4">Loading...</p>;
  }
}

export default SearchCards;
