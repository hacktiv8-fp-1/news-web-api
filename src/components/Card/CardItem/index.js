import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { removeFavorite, addFavorite } from "@/redux/slice/save-slice";
import { convertDate } from "@/utils/Date";
// import BooMark from "@/components/Bookmark";

function NewsItem({ news }) {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [dataSave, setDataSave] = useState([]);
  const bookmark = useSelector((state) => state.bookmark.bookmarks);
  console.log("bookmark", dataSave);
  console.log("newData", newsData);
  const handleClickFavorites = (item) => {
    if (isFavorite) {
      dispatch(removeFavorite(news?.url));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite(news));
      setIsFavorite(true);
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={news?.urlToImage}
          alt={news?.title}
        />
      </a>
      <div className="p-5 relative">
        <div className="flex items-center mb-5 text-slate-500 text-sm">
          <span>{news?.author}</span>
          <RxDotFilled />
          <span>{convertDate(news?.publishedAt)}</span>
        </div>
        <a href="#">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {news?.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
          {news?.description}
        </p>

        <button className="absolute top-5 right-5 text-2xl">
          {isFavorite ? (
            <BsBookmarkFill onClick={handleClickFavorites} />
          ) : (
            <BsBookmark onClick={handleClickFavorites} />
          )}
        </button>
      </div>
    </div>
  );
}

export default function CardItem({ newsData, findAllNews }) {
  return (
    <>
      {newsData.map((news, i) => (
        <NewsItem
          news={news}
          key={i}
          isFavorited={findAllNews?.bookmarks?.some(
            (bookmark) => bookmark.url === news.url
          )}
        />
      ))}
    </>
  );
}
