import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTrendingMovie = () => {
  const { Id } = useParams();
  const [trending, setTrending] = useState([]);

  const getSingleTrendingMovie = () => {
    axios
      // .get(`https://imdb-api.com/en/API/Top250TVs/k_c3g1jac0/${Id}`)
      .get(`https://imdb-api.com/en/API/MostPopularMovies/k_b5q415l5/${Id}`)
      .then((res) => {
        console.log(res.data);
        setTrending(res.data);
      });
  };

  useEffect(() => {
    // getSingleTrendingMovie();
  }, []);

  return <div>{Id}</div>;
};

export default SingleTrendingMovie;
