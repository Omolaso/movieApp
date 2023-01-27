import axios from "axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const getMovies = () => {
    if (movies.length < 1) {
      setLoader(true);
    }
    axios
      .get("/Top250Movies/k_c3g1jac0")
      .then((res) => setMovies(res.data.items))
      .then(() => setLoader(false))
      .catch((err) => console.log(err.data));
  };

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

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col items-start gap-8 p-4 w-full">
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

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="shadow-2xl rounded-md min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack hover:scale-105 ease-in-out duration-500"
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
          ))}
        </section>
      </section>

      <div
        className={
          loader ? "flex items-center justify-center min-h-[50vh]" : "hidden"
        }
      >
        <FontAwesomeIcon
          icon={faRefresh}
          className="animate-spin text-[20px] text-navlinkPrimaryColor"
        />
      </div>
    </main>
  );
};

export default Movies;
