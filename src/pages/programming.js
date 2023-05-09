import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "@/redux/slice/news-slice";
import { lastMounth, monthNow } from "@/utils/Date";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import News from "@/components/News/news";
import Dropdown from "@/components/Dropdown";

export default function Pageindonesia() {
  const dispatch = useDispatch();
  const [filterMonth, setFilterMounth] = useState("");
  const findAllNews = useSelector((state) => state.news);

  const category = [{ value: monthNow }, { value: lastMounth }];
  // everything?q=programming&from=2023-05-07&sortBy=popularity

  useEffect(() => {
    if (filterMonth === lastMounth) {
      dispatch(fetchNewsData(`everything?q=programming&from=${lastMounth}`));
    } else {
      dispatch(fetchNewsData(`everything?q=programming&from=${monthNow}`));
    }
  }, [dispatch, lastMounth, monthNow]);

  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
        <Dropdown
          lists={category}
          onClick={(item) => {
            dispatch(
              fetchNewsData(`everything?q=programming&from=${item.value}`)
            ),
              setFilterMounth(item.value);
          }}
        />
        {/* <Dropdown label="Dropdown">
          {category.map((item, i) => (
            <Dropdown.Item
              key={i}
              onClick={() => {
                dispatch(
                  fetchNewsData(`everything?q=programming&from=${item.value}`)
                ),
                  setFilterDate(item.value);
              }}
            >
              {item.value}
            </Dropdown.Item>
          ))}
        </Dropdown> */}
        {/* <div className="dropdown my-5">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {category.map((item, i) => (
              <li>
                <button
                  onClick={() => {
                    dispatch(
                      fetchNewsData(
                        `everything?q=programming&from=${item.value}`
                      )
                    ),
                      setFilterDate(item.value);
                  }}
                >
                  {item.value}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-blue-400 p-4 w-full flex items-center justify-between text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
          >
            Dropdown
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
          {isOpen && (
            <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
              {category.map((item, i) => (
                <div className="flex w-full p-4 justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                  <button
                    onClick={() => {
                      dispatch(
                        fetchNewsData(
                          `everything?q=programming&from=${item.value}`
                        )
                      ),
                        setFilterDate(item.value);
                    }}
                  >
                    {item.value}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div> */}
        {/* <DropDown list={category} setFilter={setFilter} /> */}
        <News data={findAllNews?.data} />
      </div>
    </>
  );
}
