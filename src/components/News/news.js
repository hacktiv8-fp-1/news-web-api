import { dataDummies } from "@/data-dummies";
import Cards from "../Card/cards";

export default function News() {
  return (
    <div className="max-w-screen-2xl m-auto py-5">
      <h2 className="text-3xl font-semibold mb-5">News</h2>

      <Cards
        className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center"
        newsFeed={dataDummies}
      />
    </div>
  );
}
