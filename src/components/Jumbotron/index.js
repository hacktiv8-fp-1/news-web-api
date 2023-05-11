import Link from "next/link";

const Jumbotron = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#24A19C] md:text-5xl lg:text-6xl dark:text-[#9cd1cf]">
          Selamat datang di Buletin
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Kami menciptakan ruang berita yang menghubungkan Anda dengan
          perkembangan terkini di dunia, menginspirasi wawasan dan pemahaman
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/indonesia"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white dark:text-slate-800 rounded-lg bg-[#24A19C] hover:bg-[#2ec7c2] dark:bg-[#9cd1cf] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Cari Berita Indonesia
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
          <Link
            href="/save"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Lihat Berita Tersimpan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;