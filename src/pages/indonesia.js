import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "@/redux/slice/news-slice";
import DropDown from "@/components/Dropdown";
import Navigation from "@/components/Navigation";
import News from "@/components/News/news";
import { setCurrentPage, setTotalPages } from "@/redux/slice/paginate-slice";
import Pagination from "@/components/Pagination";
import Skeleton from "@/components/Skeleton";

export default function Pageindonesia() {
  const category = [
    { value: "business" },
    { value: "entertainment" },
    { value: "health" },
  ];
  const dispatch = useDispatch();
  const findAllNews = useSelector((state) => state.news);
  const [filterCategory, setFilterCategory] = useState("");

  const { currentPage, totalPages, limitPage } = useSelector(
    (state) => state.pagination
  );

  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected));
  };

  const url = `top-headlines?country=id&category=${filterCategory}&page=${currentPage}&pageSize=${limitPage}`;

  useEffect(() => {
    dispatch(fetchNewsData(url));
  }, [dispatch, url]);

  useEffect(() => {
    dispatch(setTotalPages(findAllNews?.data.length));
  }, [dispatch, findAllNews?.data.length]);

  if (findAllNews.status === "loading") {
    return <Skeleton />;
  }

  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <DropDown
          lists={category}
          onClick={(item) => {
            dispatch(fetchNewsData(url), setFilterCategory(item.value));
          }}
        />
        <News data={findAllNews?.data} />
        <div className="mt-8">
          <Pagination handlePageChange={handlePageChange} pages={totalPages} />
        </div>
      </div>
    </>
  );
}
