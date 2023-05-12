import { fetchNewsData } from "@/redux/slice/news-slice";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Button from "../Button";
import Input from "../Input";
import NavLink from "./NavLink";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

export default function Navigation() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    if (keyword !== "") {
      if (path === "/indonesia") {
        dispatch(
          fetchNewsData(`top-headlines?country=id&q=${keyword}&pageSize=${10}`)
        );
      } else {
        dispatch(fetchNewsData(`everything?q=${keyword}&pageSize=${10}`));
        router.replace({
          pathname: `/search/${keyword}`,
        });
      }
    }
  }, [keyword, dispatch]);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setKeyword(query);
  };
  return (
    <Navbar className="sticky top-0 z-50 drop-shadow-md bg-[#111827] dark:bg-[#111827]">
      <h1 className="font-semibold text-xl text-[#24a19c]">
        <Link href="/">Buletin</Link>
      </h1>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink item="Indonesia" href="/indonesia" />
        <NavLink item="Programming" href="/programming" />
        <NavLink item="COVID-19" href="/covid" />
        <NavLink item="Favorites" href="/favorites" />
        <form className="flex justify-center items-center my-1 gap-3">
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" onClick={handleSearchClick}>
            <BsSearch />
          </Button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
}
