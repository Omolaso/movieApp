import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { appUrl } from "../URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const SingleTrendingMovie = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);

  const getSingleTrendingMovie = () => {
    axios
      .get(`/Top250TVs/k_c3g1jac0/${Id}`)
      .then((res) => {
        console.log(res.data);
        setTrending(res.data);
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    // getSingleTrendingMovie();
  }, []);

  return (
    <>
      <section className="flex items-center justify-center mt-[50px] text-center px-4">
        <div className="flex flex-col gap-5 text-navlinkPrimaryColor">
          <h1 className="font-bold text-[40px] md:text-[60px]">ERROR 404</h1>
          <h2 className="font-semibold text-[20px] md:text-[40px]">
            Movie with ID:{Id} was not found
          </h2>
          <h2 className="font-semibold text-[20px] md:text-[40px]">
            Click the button below to search all movies.
          </h2>
          <button
            type="button"
            onClick={() => navigate(appUrl.search)}
            className="border w-full max-w-[150px] md:max-w-xs hover:opacity-70 active:scale-90 duration-500 ease-linear mx-auto min-h-[50px] md:min-h-[75px] px-4 text-[18px] md:text-[24px] font-medium rounded-lg bg-buttonBlue border-buttonBlue text-navbarBlack"
          >
            Go to search
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-[20px] text-center">
        <h2 className="font-semibold text-[20px] md:text-[40px]">
          Click the button below to go back.
        </h2>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="border w-full max-w-[150px] md:max-w-xs hover:opacity-70 active:scale-90 duration-500 ease-linear mx-auto min-h-[50px] md:min-h-[75px] px-4 text-[18px] md:text-[24px] font-medium rounded-lg bg-buttonBlue border-buttonBlue text-navbarBlack"
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>
      </section>
    </>
  );
};

export default SingleTrendingMovie;
