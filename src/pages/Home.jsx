import React, { useState, useEffect, useMemo } from "react";
// import Pagination from "../components/Pagenation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const fetchTrendingMovies = () => {
    axios
      .get("https://imdb-api.com/en/API/Top250TVs/k_c3g1jac0")
      // .get("https://imdb-api.com/en/API/Top250TVs/k_b5q415l5")
      // .get("https://imdb-api.com/en/API/Top250TVs/k_wro51ksc")
      .then((res) => {
        console.log(res.data.items);
        setHomeMovies(res.data.items);
      })
      .catch((error) => console.log("error", error));
  };

  // pagenation
  // let PageSize = 10;
  // const homeMoviesData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return homeMovies.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  // pagenation

  useEffect(() => {
    // fetchTrendingMovies();
    console.log("hi");
  }, []);

  return (
    <>
      <main className="px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {homeMovies &&
            homeMovies.map((movie) => (
              <div
                key={movie.id}
                className="shadow-2xl rounded-md h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack hover:scale-105 ease-in-out duration-500"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="min-h-[150px] md:min-h-[300px] flex-1 w-full"
                />
                <button
                  type="button"
                  onClick={() => navigate(`/trending/${movie.id}`)}
                  className="text-[18px] font-medium text-center"
                >
                  {movie.title}
                </button>
              </div>
            ))}
        </section>
      </main>

      {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={homeMovies.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
    </>
  );
};

export default Home;
