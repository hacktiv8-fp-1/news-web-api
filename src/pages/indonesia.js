import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "@/redux/slice/news-slice";
import TabsFilter from "@/components/TabsFilter";
import Navigation from "@/components/Navigation";
import News from "@/components/News/news";
import { setCurrentPage, setTotalPages } from "@/redux/slice/paginate-slice";
import Pagination from "@/components/Pagination";
import Head from "next/head";

export default function Pageindonesia() {
  const category = [
    { value: "Business" },
    { value: "Entertainment" },
    { value: "Health" },
  ];
  const dispatch = useDispatch();
  const findAllNews = useSelector((state) => state.news);
  const [filterCategory, setFilterCategory] = useState("");
  const { currentPage, totalPages, limitPage } = useSelector(
    (state) => state.pagination
  );
  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };
  const url = `top-headlines?country=id&category=${filterCategory}&page=${currentPage}&pageSize=${limitPage}`;

  useEffect(() => {
    dispatch(fetchNewsData(url));
  }, [dispatch, url]);

  useEffect(() => {
    dispatch(setTotalPages(findAllNews?.data.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Buletin | Indonesia</title>
      </Head>
      <Navigation />
      <div className="w-9/12 py-10 mx-auto">
        <TabsFilter
          lists={category}
          filterCategory={filterCategory}
          onClick={(item) => {
            dispatch(fetchNewsData(url)), setFilterCategory(item.value);
          }}
        />
        <News title="Indonesian News" data={findAllNews?.data} />
        <div className="mt-8">
          <Pagination handlePageChange={handlePageChange} pages={totalPages} />
        </div>
      </div>
    </>
  );
}
