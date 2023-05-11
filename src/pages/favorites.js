import { useSelector } from "react-redux";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import News from "@/components/News/news";

export default function PageFavoriteNews() {
  const findAllNews = useSelector((state) => state.bookmark);
  return (
    <>
      <Navigation />
      <div className="w-9/12 py-10 mx-auto">
        <div className="max-w-screen-2xl m-auto">
          <News
            title="Favorites News"
            className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center"
            data={findAllNews?.bookmarks}
          />
        </div>
      </div>
    </>
  );
}
