import { addFavorite, removeFavorite } from "@/redux/slice/save-slice";
import { convertDate } from "@/utils/Date";
import { BsBookmarkFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useDispatch } from "react-redux";

export default function CardsSave({ className, newsData }) {
  const dispatch = useDispatch();

  const handleRemoveFavorite = (item) => {
    dispatch(removeFavorite(item?.url));
  };

  return (
    <div className={className}>
      {newsData.map((news, i) => (
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={i}>
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
            <div
              className="absolute top-5 right-5 text-2xl cursor-pointer"
              key={i}>
              <BsBookmarkFill
                className="text-[#24A19C]"
                onClick={() => handleRemoveFavorite(news)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
