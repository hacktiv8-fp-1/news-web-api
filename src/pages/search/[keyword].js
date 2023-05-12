import Navigation from "@/components/Navigation";
import News from "@/components/News/news";
import Pagination from "@/components/Pagination";
import { fetchNewsData } from "@/redux/slice/news-slice";
import { setCurrentPage, setTotalPages } from "@/redux/slice/paginate-slice";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const findAllNews = useSelector((state) => state.news);
  const { keyword } = router.query;

  const { currentPage, totalPages, limitPage } = useSelector(
    (state) => state.pagination
  );

  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };

  useEffect(() => {
    dispatch(
      fetchNewsData(
        `everything?q=${keyword}&page=${currentPage}&pageSize=${limitPage}`
      )
    );
  }, [keyword, currentPage, dispatch, limitPage]);

  useEffect(() => {
    dispatch(setTotalPages(findAllNews?.data.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Buletin | Search</title>
      </Head>
      <Navigation />
      <div className="w-9/12 py-10 mx-auto">
        <News title={`News terkait ${keyword}`} data={findAllNews?.data} />
        <div className="mt-8">
          <Pagination handlePageChange={handlePageChange} pages={totalPages} />
        </div>
      </div>
    </>
  );
}
