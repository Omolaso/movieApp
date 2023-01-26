import React, { Suspense } from "react";
import { appUrl } from "./URL";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Router = () => {
  const SharedLayout = React.lazy(() => import("./pages/SharedLayout"));
  const Trending = React.lazy(() => import("./pages/Trending"));
  const SingleTrendingMovie = React.lazy(() =>
    import("./pages/SingleTrendingMovie")
  );
  const Movies = React.lazy(() => import("./pages/Movies"));
  const SingleMovies = React.lazy(() => import("./pages/SingleMovie"));
  const TvSeries = React.lazy(() => import("./pages/TvSeries"));
  const SingleTvSeries = React.lazy(() => import("./pages/SingleTvSeries"));
  const Search = React.lazy(() => import("./pages/Search"));
  const SingleSearch = React.lazy(() => import("./pages/SingleSearch"));

  //for axios
  axios.defaults.baseURL = "https://imdb-api.com/en/API";

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <FontAwesomeIcon icon={faRefresh} className="animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path={appUrl.landingPage} element={<SharedLayout />}>
            <Route index element={<Trending />} />
            <Route
              path={appUrl.singleTrendingMovie}
              element={<SingleTrendingMovie />}
            />
            <Route path={appUrl.movies} element={<Movies />} />
            <Route path={appUrl.singleMovies} element={<SingleMovies />} />
            <Route path={appUrl.tvSeries} element={<TvSeries />} />
            <Route path={appUrl.singleTvSeries} element={<SingleTvSeries />} />
            <Route path={appUrl.search} element={<Search />} />
            <Route path={appUrl.singleSearch} element={<SingleSearch />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
