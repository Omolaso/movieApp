import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleTvSeries = () => {
  const { tvSeriesId } = useParams();
  return <div>{tvSeriesId}</div>;
};

export default SingleTvSeries;
