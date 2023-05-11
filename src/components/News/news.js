import Cards from "../Card/cards";

export default function News({ title, data }) {
  return (
    <div className="max-w-screen-2xl mt-10">
      <h2 className="text-3xl font-semibold mb-5 text-[#24a19d]">{title}</h2>
      <Cards
        className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 gap-5 justify-center relative"
        newsData={data}
      />
    </div>
  );
}
