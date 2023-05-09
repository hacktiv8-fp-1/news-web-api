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
        <News data={findAllNews?.bookmarks} />
      </div>
    </>
  );
}
