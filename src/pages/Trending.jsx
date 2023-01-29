import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Trending = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const moviesPerPage = 20;
  const endOffset = offset + moviesPerPage;

  useEffect(() => {
    if (homeMovies.length < 1) {
      setLoader(true);
    }
    axios
      .get("/Top250TVs/k_b5q415l5")
      .then((res) => {
        setHomeMovies(res.data.items);
      })
      .then(() => setLoader(false))
      .catch((error) => console.log("Error:", error))
      .finally(() => setLoader(false));
  }, [offset, moviesPerPage]);

  const trending = homeMovies
    .slice(offset, endOffset)
    .map((currentHomeMovie) => (
      <div
        key={currentHomeMovie.id}
        className="rounded-md h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack hover:scale-105 ease-in-out duration-500"
      >
        <img
          src={currentHomeMovie.image}
          alt={currentHomeMovie.title}
          className="min-h-[150px] md:min-h-[300px] flex-1 w-full"
        />
        <button
          type="button"
          onClick={() => navigate(`/trending/${currentHomeMovie.id}`)}
          className="text-[18px] font-medium text-center"
        >
          {currentHomeMovie.title}
        </button>
      </div>
    ));

  function handlePageClick(e) {
    const newOffset = (e.selected * moviesPerPage) % homeMovies.length;
    setOffset(newOffset);
  }

  const pageCount = Math.ceil(homeMovies.length / moviesPerPage);

  return (
    <main className="relative p-4 w-full h-full min-h-[85vh]">
      <div className={loader ? "block absolute top-[40%] left-1/2" : "hidden"}>
        <FontAwesomeIcon
          icon={faRefresh}
          className="animate-spin text-[20px] text-navlinkPrimaryColor"
        />
      </div>

      <section className="flex flex-col justify-between gap-4 w-full min-h-[85vh]">
        <div className="popOver grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mb-12">
          {trending}
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
export default Trending;
