import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";

const TVSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const moviesPerPage = 20;
  const endOffset = offset + moviesPerPage;

  useEffect(() => {
    if (tvSeries.length < 1) {
      setLoader(true);
    }
    axios
      .get("/MostPopularTVs/k_b5q415l5")
      .then((res) => {
        setTvSeries(res.data.items);
      })
      .then(() => setLoader(false))
      .catch((error) => console.log("Error:", error))
      .finally(() => setLoader(false));
  }, [offset, moviesPerPage]);

  const trendingTVSeries = tvSeries.slice(offset, endOffset).map((series) => (
    <div
      key={series.id}
      className="rounded-md h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack hover:scale-105 ease-in-out duration-500"
    >
      <img
        src={series.image}
        alt={series.title}
        className="min-h-[150px] md:min-h-[300px] flex-1 w-full"
      />
      <button
        type="button"
        onClick={() => navigate(`/tvSeries/${series.id}`)}
        className="text-[18px] font-medium text-center"
      >
        {series.title}
      </button>
    </div>
  ));

  function handlePageClick(e) {
    const newOffset = (e.selected * moviesPerPage) % tvSeries.length;
    setOffset(newOffset);
  }

  const pageCount = Math.ceil(tvSeries.length / moviesPerPage);

  return (
    <main className="relative p-4 w-full min-h-[85vh]">
      <div className={loader ? "block absolute top-1/2 left-1/2" : "hidden"}>
        <FontAwesomeIcon
          icon={faRefresh}
          className="animate-spin text-[20px] text-navlinkPrimaryColor"
        />
      </div>

      <section className="flex flex-col gap-4 w-full">
        <div className="popOver grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mb-12 min-h-[85vh]">
          {trendingTVSeries}
        </div>

        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          containerClassName={"pagenationContainer"}
          previousClassName={"pagenationPreviousList"}
          nextClassName={"pagenationPreviousList"}
          previousLinkClassName={"pagenationPreviousLink"}
          nextLinkClassName={"pagenationPreviousLink"}
          breakClassName={"pagenationPageList"}
          breakLinkClassName={"pagenationPageLink"}
          activeClassName={"pagenationActive"}
          pageClassName={"pagenationPageList"}
          pageLinkClassName={"pagenationPageLink"}
          disabledClassName={"pagenationDisabled"}
        />
      </section>
    </main>
  );
};
export default TVSeries;
