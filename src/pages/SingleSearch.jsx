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
  const [isActive, setIsActive] = useState(false);
  const [loader, setLoader] = useState(false);

  const getSingleMovie = () => {
    if (!searched || !casts) {
      setLoader(true);
    }

    //getSearchedMovie
    axios
      //   .get(`/SearchAll/k_c3g1jac0/${searchId}`)
      //   .get(`/SearchAll/k_b5q415l5/${searchId}`)
      .get(`/SearchAll/k_wro51ksc/${searchId}`)
      .then((res) => {
        // console.log(res.data.results);
        setSearched(res.data.results);
      })
      .catch((err) => console.log(err));

    // getCast
    axios
      //   // .get(`/FullCast/k_c3g1jac0/${searchId}`)
      //   // .get(`/FullCast/k_b5q415l5/${searchId}`)
      .get(`/FullCast/k_wro51ksc/${searchId}`)
      .then((res) => {
        // console.log(res.data);
        setCasts(res.data.actors);
      })
      .then(() => setLoader(false))
      .catch((err) => console.log(err));

    // getTrailers
    axios
      .get(`/Trailer/k_wro51ksc/${searchId}`)
      // .get(`/Trailer/k_c3g1jac0/${searchId}`)
      // .get(`/Trailer/k_b5q415l5/${searchId}`)
      .then((res) => {
        // console.log(res.data);
        setTrailer(res.data);
      })
      .catch((err) => console.log(err));
  };

  const { videoDescription, linkEmbed, title } = trailer;

  const handleTrailerTrue = () => {
    setIsActive(true);
    isActive ? window.removeEventListener("scroll") : null;
  };
  const handleTrailerFalse = () => {
    setIsActive(false);
    isActive ? window.addEventListener("scroll") : null;
  };

  useEffect(() => {
    // getSingleMovie();
  }, []);

  return (
    // <main className={isActive ? "relative " : "relative"}>
    <main className="relative w-full over">
      <section className="p-4 w-full flex flex-col items-start justify-center gap-20">
        {searched.map((movie) => (
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-10"
            key={movie.id}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="shadow-[0px_0px_2px_2px_] shadow-buttonGreen max-h-[600px] md:max-h-[450px] flex-1 md:flex-[0.5] w-full"
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
                // onClick={() => setIsActive(true)}
                onClick={() => handleTrailerTrue()}
                className="flex items-center justify-center gap-2 focus:outline-0 text-[18px] font-bold w-full min-w-[150px] max-w-[200px] rounded-lg self-start h-[45px] text-navbarBlack bg-buttonGreen"
              >
                <FontAwesomeIcon icon={faFilm} />
                <span>Play Trailer</span>
              </button>
            </div>
          </div>
        ))}

        {/* trailer */}
        <section
          className={
            isActive
              ? "min-h-[450px] bg-navbarBlack flex flex-col gap-4 items-center justify-between p-4 w-full left-0 outline-0 absolute border max-w-[1200px] top-[25px] opacity-1 transition-opacity ease-in-out duration-500"
              : "min-h-[450px] bg-navbarBlack flex flex-col gap-4 items-center justify-between p-4 w-full left-0 outline-0 absolute top-[-100%] ease-in-out opacity-0 transition-all duration-1000"
          }
        >
          <div className="flex flex-col justify-between min-h-[400px] gap-4 w-full">
            <h1 className="text-[25px] text-movieHubWhite font-medium">
              {videoDescription}
            </h1>
            <div className="flex items-center justify-center min-h-[350px] flex-1">
              <iframe
                width="100%"
                height="100%"
                src={linkEmbed}
                title={title}
                // frameBorder="0"
                allowFullScreen
                className="min-h-[350px] border"
              />
            </div>
          </div>
          <button
            type="button"
            className="self-end text-[16px] font-medium text-movieHubWhite rounded-lg min-h-[50px] bg-buttonBlue min-w-[100px] max-w-[150px]"
            onClick={() => handleTrailerFalse()}
          >
            Close
          </button>
        </section>

        {/* casts */}
        <section className="flex flex-col gap-10">
          <h1 className="font-bold text-[30px] md:text-[48px]">Casts</h1>
          <div className="flex flex-row flex-wrap items-center justify-start w-full">
            {casts.map((cast) => (
              <div
                key={cast.id}
                className="flex flex-col items-center text-center gap-4 text-centr w-full max-w-[120px] mb-8"
              >
                <img
                  src={cast.image}
                  alt={cast.name}
                  className="rounded-full h-[70px] w-[70px]"
                />
                <h1 className="font-normal text-[16px] sm:max-w-[100px]">
                  {cast.name}
                </h1>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* loader */}
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

export default SingleSearch;
