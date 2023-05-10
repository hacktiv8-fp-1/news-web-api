import { RxDotFilled } from "react-icons/rx";
import { convertDate } from "@/utils/Date";
import Link from "next/link";

export default function CardItem({ news, button }) {
  return (
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
}
