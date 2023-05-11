import { RxDotFilled } from "react-icons/rx";
import { convertDate } from "@/utils/Date";
import Link from "next/link";

export default function CardItem({ news, button }) {
  return (
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href={news.url} target="_blank" rel="noreferrer">
        <img
          class="rounded-t-lg max-h-44 w-full object-cover"
          src={news?.urlToImage}
          alt={news?.title}
        />
      </Link>
      <div class="p-5 relative">
        <div className="flex items-center mb-5 text-[#617784] text-sm w-11/12">
          <span className="line-clamp-1">{news?.author}</span>
          <RxDotFilled />
          <span className="line-clamp-1">{convertDate(news?.publishedAt)}</span>
        </div>
        <Link href={news.url} target="_blank" rel="noreferrer">
          <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {news?.title}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-[#617784] dark:text-gray-400 line-clamp-2">
          {news?.description}
        </p>
        {button}
      </div>
    </div>
  )
}
