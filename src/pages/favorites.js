import { useSelector } from "react-redux";
import Navigation from "@/components/Navigation";
import News from "@/components/News/news";
import Head from "next/head";

export default function PageFavoriteNews() {
  const findAllNews = useSelector((state) => state.bookmark);
  return (
    <>
      <Head>
        <title>Buletin | Favorites</title>
      </Head>
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
