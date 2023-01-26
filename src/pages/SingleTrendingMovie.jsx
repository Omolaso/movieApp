import React from "react";
import { useParams } from "react-router-dom";

const SingleTrendingMovie = () => {
  const { Id } = useParams();
  return <div>{Id}</div>;
};

export default SingleTrendingMovie;
