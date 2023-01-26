import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faRefresh } from "@fortawesome/free-solid-svg-icons";

const SingleSearch = () => {
  const { searchId } = useParams();
  const [searched, setSearched] = useState([]);
  const [casts, setCasts] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const [loader, setLoader] = useState(false);

  const getSingleMovie = () => {
    if (!searched || !casts) {
      setLoader(true);
    }

    axios
      // .get(`https://imdb-api.com/en/API/SearchAll/k_c3g1jac0/${searchId}`)
      .get(`https://imdb-api.com/en/API/SearchAll/k_b5q415l5/${searchId}`)
      .then((res) => {
        // console.log(res.data.results);
        setSearched(res.data.results);
      })
      .catch((err) => console.log(err));

    axios
      // .get(`https://imdb-api.com/en/API/FullCast/k_c3g1jac0/${searchId}`)
      .get(`https://imdb-api.com/en/API/FullCast/k_b5q415l5/${searchId}`)
      .then((res) => {
        // console.log(res.data);
        setCasts(res.data.actors);
      })
      .catch((err) => console.log(err));

    if (searched || casts) {
      setLoader(false);
    }
  };

  //VIDEO SCR
  // const scr = "https://www.imdb.com/video/vi2333017881";
  // const handleMovieTrailer = () => {
  // axios.get(`https://imdb-api.com/API/Trailer/k_b5q415l5/${searchId}`)
  // }

  useEffect(() => {
    getSingleMovie();
  }, []);

  return (
    <>
      <main
        className={
          trailer
            ? "p-4 w-full flex flex-col items-start justify-center gap-20 bg-[rgba(0, 0, 0, 0.2)]"
            : "p-4 w-full flex flex-col items-start justify-center gap-20"
        }
      >
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
                onClick={() => setTrailer(!trailer)}
                className="flex items-center justify-center gap-2 text-[18px] font-bold w-full min-w-[150px] max-w-[200px] rounded-lg self-start h-[45px] text-navbarBlack bg-buttonGreen"
              >
                <FontAwesomeIcon icon={faFilm} />
                <span>Play Trailer</span>
              </button>
            </div>

            <video src=""></video>
          </div>
        ))}

        <section className="flex flex-col gap-10">
          <h1 className="font-bold text-[30px] md:text-[48px]">Casts</h1>
          <div className="flex flex-row flex-wrap items-center justify-between w-full">
            {casts.map((cast) => (
              <div
                key={cast.id}
                className="flex flex-col items-center gap-4 text-center w-full max-w-[150px] mb-8"
              >
                <img
                  src={cast.image}
                  alt={cast.name}
                  className="rounded-full h-[70px] w-[70px]"
                />
                <h1 className="font-normal text-[16px]">{cast.name}</h1>
              </div>
            ))}
          </div>
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

export default SingleSearch;
