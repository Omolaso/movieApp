import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faRefresh } from "@fortawesome/free-solid-svg-icons";

const SingleSearch = () => {
  const { searchId } = useParams();
  const [searched, setSearched] = useState([]);
  const [loader, setLoader] = useState(false);

  const getSingleMovie = () => {
    if (!searched) {
      setLoader(true);
    }

    axios
      .get(`https://imdb-api.com/en/API/SearchAll/k_c3g1jac0/${searchId}`)
      .then((res) => {
        setSearched(res.data.results);
      })
      .catch((err) => console.log(err));

    if (searched) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getSingleMovie();
  }, []);

  return (
    <>
      <main className="p-4 w-full flex items-start justify-center">
        {searched.map((movie) => (
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-5"
            key={movie.id}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="shadow-[0px_0px_2px_2px_] shadow-buttonGreen max-h-[450px] flex-1 w-full"
            />
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="font-medium text-[33px] md:text-[40px]">
                {movie.title}
              </h1>
              <p className="font-normal text-[16px] text-navlinkPrimaryColor">
                {movie.description}
              </p>
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-[18px] font-bold w-full max-w-[150px] rounded-lg self-start h-[45px] text-navbarBlack bg-buttonGreen"
              >
                <FontAwesomeIcon icon={faFilm} />
                <span>Play Trailer</span>
              </button>
            </div>
          </div>
        ))}
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

export default SingleSearch;
