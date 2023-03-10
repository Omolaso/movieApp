import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const moviesPerPage = 20;
  const endOffset = offset + moviesPerPage;

  useEffect(() => {
    if (movies.length < 1) {
      setLoader(true);
    }
    axios
      .get("/MostPopularMovies/k_b5q415l5")
      .then((res) => setMovies(res.data.items))
      .then(() => setLoader(false))
      .catch((error) => console.log("Error:", error))
      .finally(() => setLoader(false));
  }, [offset, moviesPerPage]);

  const trendingMovies = movies.slice(offset, endOffset).map((movie) => (
    <div
      key={movie.id}
      className="rounded-md h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack hover:scale-105 ease-in-out duration-500"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="min-h-[150px] md:min-h-[300px] flex-1 w-full"
      />
      <button
        type="button"
        onClick={() => navigate(`/movies/${movie.id}`)}
        className="text-[18px] font-medium text-center"
      >
        {movie.title}
      </button>
    </div>
  ));

  function handlePageClick(e) {
    const newOffset = (e.selected * moviesPerPage) % movies.length;
    setOffset(newOffset);
  }

  const pageCount = Math.ceil(movies.length / moviesPerPage);

  //TOP BUTTON FUNCTIONS
  const mostPopularMovies = () => {
    if (movies.length < 1) {
      setLoader(true);
    }
    axios
      .get("/MostPopularMovies/k_b5q415l5")
      .then((res) => {
        // console.log(res.data.items)
        setMovies(res.data.items);
      })
      .then(() => setLoader(false));
  };

  const comingSoon = () => {
    if (movies.length < 1) {
      setLoader(true);
    }

    axios
      .get("/ComingSoon/k_b5q415l5")
      .then((res) => {
        // console.log(res.data.items)
        setMovies(res.data.items);
      })
      .then(() => setLoader(false));
  };

  const inTheaters = () => {
    if (movies.length < 1) {
      setLoader(true);
    }

    axios
      .get("/InTheaters/k_b5q415l5")
      .then((res) => {
        // console.log(res.data.items);
        setMovies(res.data.items);
      })
      .then(() => setLoader(false));
  };

  const boxOffice = () => {
    if (movies.length < 1) {
      setLoader(true);
    }

    axios
      .get("/BoxOffice/k_b5q415l5")
      .then((res) => {
        // console.log(res.data.items)
        setMovies(res.data.items);
      })
      .then(() => setLoader(false))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="flex flex-col relative gap-8 p-4 w-full min-h-[85vh]">
      <ul className="flex items-start justify-start flex-row flex-wrap gap-4 w-full">
        <li
          onClick={() => comingSoon()}
          className="flex items-center justify-center bg-navbarBlack h-[50px] p-4 rounded-lg text-[20px] font-bold text-movieHubWhite cursor-pointer active:scale-75 duration-200"
        >
          Coming Soon
        </li>
        <li
          onClick={() => mostPopularMovies()}
          className="flex items-center justify-center bg-navbarBlack h-[50px] p-4 rounded-lg text-[20px] font-bold text-movieHubWhite cursor-pointer active:scale-75 duration-200"
        >
          Most Popular
        </li>
        <li
          onClick={() => inTheaters()}
          className="flex items-center justify-center bg-navbarBlack h-[50px] p-4 rounded-lg text-[20px] font-bold text-movieHubWhite cursor-pointer active:scale-75 duration-200"
        >
          In Theaters
        </li>
        <li
          onClick={() => boxOffice()}
          className="flex items-center justify-center bg-navbarBlack h-[50px] p-4 rounded-lg text-[20px] font-bold text-movieHubWhite cursor-pointer active:scale-75 duration-200"
        >
          Box Office
        </li>
      </ul>

      <div className={loader ? "block absolute top-1/2 left-1/2" : "hidden"}>
        <FontAwesomeIcon
          icon={faRefresh}
          className="animate-spin text-[20px] text-navlinkPrimaryColor"
        />
      </div>

      <section className="flex flex-col gap-4 w-full">
        <div className="popOver grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mb-12 min-h-[85vh]">
          {trendingMovies}
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
export default Movies;
