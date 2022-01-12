import React from "react";

function SearchCards({ regularLoading, searchRegularGifs }) {
  if (regularLoading === false) {
    return (
      <div className="container-fluid gifs-container">
        {searchRegularGifs.data.map((e) => {
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
  }
  //   );
  // } else if (regularLoading === true) {
  //   return <p className="loading-p mt-4">Loading...</p>;
  // }
}

export default SearchCards;
