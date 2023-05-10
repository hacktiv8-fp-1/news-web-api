import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "@/redux/slice/news-slice";
import DropDown from "@/components/Dropdown";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import News from "@/components/News/news";
import Skeleton from "@/components/Skeleton";

export default function Pageindonesia() {
  const dispatch = useDispatch();
  const findAllNews = useSelector((state) => state.news);
  console.log("findUsers", findAllNews);
  const category = [
    { value: "business" },
    { value: "entertainment" },
    { value: "health" },
  ];

  useEffect(() => {
    dispatch(fetchNewsData(`top-headlines?country=id`));
  }, [dispatch]);

  if (findAllNews.status === "loading") {
    return <Skeleton />;
  }

  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
        <DropDown
          lists={category}
          onClick={(item) =>
            dispatch(
              fetchNewsData(`top-headlines?country=id&category=${item.value}`)
            )
          }
        />
        {/* <Dropdown label="Dropdown">
          {category.map((item, i) => (
            <Dropdown.Item
              onClick={() =>
                dispatch(
                  fetchNewsData(
                    `top-headlines?country=id&category=${item.value}`
                  )
                )
              }
            >
              {item.value}
            </Dropdown.Item>
          ))}
        </Dropdown> */}
        <News data={findAllNews?.data} />
      </div>
    </>
  );
}
