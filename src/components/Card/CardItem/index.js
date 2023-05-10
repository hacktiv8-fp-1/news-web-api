import { useDispatch } from "react-redux";
import { RxDotFilled } from "react-icons/rx";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { removeFavorite, addFavorite } from "@/redux/slice/save-slice";
import { convertDate } from "@/utils/Date";
import Link from "next/link";
import { useSelector } from "react-redux";
import Button from "@/components/Button";

export default function CardItem({ newsData }) {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmark);

  const handleFavoriteClick = (item) => {
    dispatch(addFavorite(item));
  }

  const handleUnFavoriteClick = (item) => {
    dispatch(removeFavorite(item?.url));
  }

  return newsData.map((news, index) => {
    const isFavorite = bookmarks.find((bookmark) => bookmark.url === news.url)
    let button;

    if (isFavorite) {
      button = (
        <Button
          className="absolute top-5 right-5 text-2xl"
          type="button"
          onClick={() => handleUnFavoriteClick(news)}>
          <BsBookmarkFill />
        </Button>
      );
    } else {
      button = (
        <Button
          className="absolute top-5 right-5 text-2xl"
          type="button"
          onClick={() => handleFavoriteClick(news)}>
          <BsBookmark />
        </Button>
      );
    }

    return (
      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        key={index}
      >
        <Link href={news.url} target="_blank">
          <img
            class="rounded-t-lg max-h-44 w-full object-cover"
            src={news?.urlToImage}
            alt={news?.title}
          />
        </Link>
        <div class="p-5 relative">
          <div className="flex items-center mb-5 text-slate-500 text-sm">
            <span className="line-clamp-1 w-1/2">{news?.author}</span>
            <RxDotFilled />
            <span>{convertDate(news?.publishedAt)}</span>
          </div>
          <Link href={news.url} target="_blank">
            <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {news?.title}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 line-clamp-5">
            {news?.description}
          </p>
          {button}
        </div>
      </div>
    )
  })
}
