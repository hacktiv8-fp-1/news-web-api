import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

function BookmarkButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    props.onClick(!isFavorite);
  };

  return (
    <button className="absolute top-5 right-5 text-2xl">
      {isFavorite ? (
        <BsBookmarkFill onClick={handleClick} />
      ) : (
        <BsBookmark onClick={handleClick} />
      )}
    </button>
  );
}

function BookMark(props) {
  const [favorites, setFavorites] = useState([]);

  const handleClickFavorites = (news) => {
    if (favorites.includes(news)) {
      setFavorites(favorites.filter((item) => item !== news));
    } else {
      setFavorites([...favorites, news]);
    }
  };

  return (
    <div>
      {props.newsData.map((news, i) => (
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={i}
        >
          <a href="#">
            <img
              class="rounded-t-lg"
              src={news?.urlToImage}
              alt={news?.title}
            />
          </a>
          <div class="p-5 relative">
            <div className="flex items-center mb-5 text-slate-500 text-sm">
              <span>{news?.author}</span>
              <RxDotFilled />
              <span>{convertDate(news?.publishedAt)}</span>
            </div>
            <a href="#">
              <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {news?.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">
              {news?.description}
            </p>
            <BookmarkButton
              onClick={(isFavorite) => handleClickFavorites(news, isFavorite)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
