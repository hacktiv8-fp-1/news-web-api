import { fetchNewsData } from "@/redux/slice/news-slice";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import Input from "../Input";
import NavLink from "./NavLink";

export default function Navigation() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword !== "") {
      dispatch(fetchNewsData(`everything?q=${keyword}&pageSize=${10}`));
    }
  }, [keyword, dispatch]);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setKeyword(query);
  };
  return (
    <Navbar className="bg-[#111827]">
      <h1 className="font-medium text-xl dark:text-white">Buletin</h1>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink item="Indonesia" href="/" />
        <NavLink item="Programming" href="/programming" />
        <NavLink item="Covid" href="/covid" />
        <NavLink item="Favorites" href="/favorites" />
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
