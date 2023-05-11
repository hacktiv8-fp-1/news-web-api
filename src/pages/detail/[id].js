import { BsBookmark } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { convertDate } from "@/utils/Date";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const allNews = useSelector((state) => state.news);
  const news = allNews.data.find((news) => news.title === id);

  console.log(console.log(news));

  return (
    <>
    <Navigation />
      <div className="px-5 sm:px-12 md:max-w-3xl mx-auto my-16">
        <img 
          src={news.urlToImage} 
          alt={news.title}
        />
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-semibold w-4/5 mt-6">
            {news.title}
          </h1>
          <div className="text-slate-500 flex items-center text-sm mt-3">
            <span>{news.author}</span>
            <RxDotFilled />
            <span>{convertDate(news.publishedAt)}</span>
          </div>
          <button className="absolute top-2 right-0 text-2xl">
            <BsBookmark />
          </button>
          <div className="mt-10 text-slate-600">
            <p>{news.content}</p>
          </div>
        </div>
    </div>
    </>
  )
}