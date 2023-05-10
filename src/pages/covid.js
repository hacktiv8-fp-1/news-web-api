import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "@/redux/slice/news-slice";
import ReactPaginate from "react-paginate";
import { lastMounth, monthNow } from "@/utils/Date";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Dropdown from "@/components/Dropdown";
import News from "@/components/News/news";
import { Pagination } from "flowbite-react";

export default function PageCovid() {
  const dispatch = useDispatch();
  const [filterMonth, setFilterMounth] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const limit = 8;

  const findAllNews = useSelector((state) => state.news);
  // setPages()
  const handlePageChange = ({ selected }) => {
    if (selected === 0) {
      setPage(1);
    } else {
      setPage(selected);
    }
  };

  const category = [{ value: monthNow }, { value: lastMounth }];

  useEffect(() => {
    if (filterMonth === lastMounth) {
      dispatch(
        fetchNewsData(
          `everything?q=covid&from=${lastMounth}&page=${page}&pageSize=${limit}`
        )
      );
    } else {
      dispatch(
        fetchNewsData(
          `everything?q=covid&from=${monthNow}&page=${page}&pageSize=${limit}`
        )
      );
    }
  }, [page, dispatch, filterMonth, limit]);

  useEffect(() => {
    setPages(findAllNews?.data.length);
  }, [findAllNews?.data.length]);

  return (
    <>
      <Navigation page={page} limit={limit} />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
        <Dropdown
          lists={category}
          onClick={(item) => {
            dispatch(fetchNewsData(`everything?q=covid&from=${item.value}`)),
              setFilterMounth(item.value);
          }}
        />
        <News data={findAllNews?.data} />
        <div className="mt-8">
          <ReactPaginate
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            breakLabel={<span className="mx-2">...</span>}
            onPageChange={handlePageChange}
            pageCount={Math.min(10, pages)}
            marginPagesDisplayed={2}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}
