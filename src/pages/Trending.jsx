import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Trending = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchTrendingMovies = () => {
    if (homeMovies.length < 1) {
      setLoader(true);
    }
    axios
      // .get("/Top250TVs/k_c3g1jac0")
      .get("/Top250TVs/k_b5q415l5")
      // .get("/Top250TVs/k_wro51ksc")
      .then((res) => {
        // console.log(res.data);
        setHomeMovies(res.data.items);
      })
      .then(() => setLoader(false))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    // fetchTrendingMovies();
  }, []);

  return (
    <>
      <main className="px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {homeMovies &&
            homeMovies.map((homeMovie) => (
              <div
                key={homeMovie.id}
                className="shadow-2xl rounded-md h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack hover:scale-105 ease-in-out duration-500"
              >
                <img
                  src={homeMovie.image}
                  alt={homeMovie.title}
                  className="min-h-[150px] md:min-h-[300px] flex-1 w-full"
                />
                <button
                  type="button"
                  onClick={() => navigate(`/trending/${homeMovie.id}`)}
                  className="text-[18px] font-medium text-center"
                >
                  {homeMovie.title}
                </button>
              </div>
            ))}
        </section>
      </main>

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
    </>
  );
};

export default Trending;
