import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { moviesId } = useParams();
  const [singleMovie, setSingleMovie] = useState([]);

  const handleSingleMovie = () => {
    axios
      .get(`/MostPopularMovies/k_c3g1jac0/${moviesId}`)
      .then((res) => setSingleMovie(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleSingleMovie();
  }, []);

  return <div>{moviesId}</div>;
};

export default SingleMovie;
