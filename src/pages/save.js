import { useSelector } from "react-redux";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import News from "@/components/News/news";

export default function PageFavoriteNews() {
  const findAllNews = useSelector((state) => state.bookmark);
  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
        <div className="max-w-screen-2xl m-auto">
          <h2 className="text-3xl font-semibold mb-5">News</h2>
          <News 
            className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center"
            data={findAllNews?.bookmarks}
          />
        </div>
      </div>
    </>
  );
}
