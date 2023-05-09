import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { removeFavorite, addFavorite } from "@/redux/slice/save-slice";
import { convertDate } from "@/utils/Date";

export default function CardItem({ newsData }) {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorites = (item) => {
    if (isFavorite) {
      dispatch(removeFavorite(item?.url));
      setIsFavorite((prev) => !prev);
    } else {
      dispatch(addFavorite(item));
      setIsFavorite((prev) => !prev);
    }
  };

  return (
    <>
      {newsData.map((news, i) => (
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
            <button className="absolute top-5 right-5 text-2xl">
              {isFavorite ? (
                <BsBookmarkFill onClick={() => handleClickFavorites(news)} />
              ) : (
                <BsBookmark onClick={() => handleClickFavorites(news)} />
              )}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}