import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ data, handlePageChange, tableLimit, initialPage }) => (
  <div className="pagination-container">
    {data && data.totalPages > 1 && (
      <ReactPaginate
        pageCount={data.totalPages}
        pageRangeDisplayed={tableLimit}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        initialPage={initialPage}
      />
    )}
  </div>
);

export default Pagination;
