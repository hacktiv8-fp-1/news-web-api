import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "@/redux/slice/news-slice";
import { lastMounth, monthNow } from "@/utils/Date";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Dropdown from "@/components/Dropdown";
import News from "@/components/News/news";
import Pagination from "@/components/Pagination";
import { setCurrentPage, setTotalPages } from "@/redux/slice/paginate-slice";
import Skeleton from "@/components/Skeleton";

export default function PageCovid() {
  const dispatch = useDispatch();
  const [filterMonth, setFilterMounth] = useState(monthNow);

  const findAllNews = useSelector((state) => state.news);
  const { currentPage, totalPages, limitPage } = useSelector(
    (state) => state.pagination
  );

  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected));
  };

  const category = [{ value: monthNow }, { value: lastMounth }];
  const url = `everything?q=covid&from=${filterMonth}&page=${currentPage}&pageSize=${limitPage}`;

  useEffect(() => {
    dispatch(fetchNewsData(url));
  }, [filterMonth, dispatch, currentPage]);

  useEffect(() => {
    dispatch(setTotalPages(findAllNews?.data.length));
  }, []);

  if (findAllNews.status === "loading") {
    return <Skeleton />;
  }

  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
        <Dropdown
          lists={category}
          onClick={(item) => {
            dispatch(fetchNewsData(url)), setFilterMounth(item.value);
          }}
        />
        <News title="Covid-19 News" data={findAllNews?.data} />
        <div className="mt-8">
          <Pagination handlePageChange={handlePageChange} pages={totalPages} />
        </div>
      </div>
    </>
  );
}
