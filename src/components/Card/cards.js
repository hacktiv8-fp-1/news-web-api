import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { removeFavorite, addFavorite } from "@/redux/slice/save-slice";
import CardItem from "./CardItem";
import Button from "@/components/Button";

export default function Cards({ className, newsData }) {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmark);

  const handleFavoriteClick = (item) => {
    dispatch(addFavorite(item));
  };

  const handleUnFavoriteClick = (item) => {
    dispatch(removeFavorite(item?.url));
  };

  return (
    <div className={className}>
      {newsData.map((news, index) => {
        const isFavorite = bookmarks.find(
          (bookmark) => bookmark.url === news.url
        );
        let button;
        if (isFavorite) {
          button = (
            <Button
              className="absolute top-5 right-5 text-2xl text-[#24a19d]"
              type="button"
              onClick={() => handleUnFavoriteClick(news)}>
              <BsBookmarkFill />
            </Button>
          );
        } else {
          button = (
            <Button
              className="absolute top-5 right-5 text-2xl text-[#24a19d]"
              type="button"
              onClick={() => handleFavoriteClick(news)}>
              <BsBookmark />
            </Button>
          );
        }

        return <CardItem news={news} button={button} key={index} />;
      })}
    </div>
  );
}
