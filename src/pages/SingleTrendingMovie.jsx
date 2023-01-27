import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTrendingMovie = () => {
  const { Id } = useParams();
  const [trending, setTrending] = useState([]);

  const getSingleTrendingMovie = () => {
    axios
      .get(`/Top250TVs/k_c3g1jac0/${Id}`)
      .then((res) => {
        console.log(res);
        setTrending(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleTrendingMovie();
  }, []);

  return <div>{Id}</div>;
};

export default SingleTrendingMovie;
