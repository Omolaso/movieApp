import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { moviesId } = useParams();

  const handleSingleMovie = () => {
    axios
      .get(`MostPopularMovies/k_b5q415l5/${moviesId}`)
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    handleSingleMovie();
  }, []);

  return <div>{moviesId}</div>;
};

export default SingleMovie;
