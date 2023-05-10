import { fetchNewsData } from "@/redux/slice/news-slice";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import Input from "../Input";
import NavLink from "./NavLink";

export default function Navigation({ page, limit }) {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword !== "") {
      dispatch(
        fetchNewsData(`everything?q=${keyword}&page=${page}&pageSize=${limit}`)
      );
    }
  }, [keyword, page]);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setKeyword(query);
  };
  return (
    <Navbar>
      <h1 className="font-medium text-xl dark:text-white">Buletin</h1>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink item="Indonesia" href="/" />
        <NavLink item="Programming" href="/programming" />
        <NavLink item="Favorites" href="/save" />
        <form className="flex gap-3">
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            className="bg-slate-600"
            type="submit" 
            onClick={handleSearchClick}>
            Submit
          </Button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
}
