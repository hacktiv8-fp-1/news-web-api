import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageChange, pages }) {
  return (
    <div className="mt-8">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
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
  );
}
