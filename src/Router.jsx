import React, { Suspense } from "react";
import { appUrl } from "./URL";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const Router = () => {
  const SharedLayout = React.lazy(() => import("./pages/SharedLayout"));
  const Home = React.lazy(() => import("./pages/Home"));
  const SingleTrendingMovie = React.lazy(() =>
    import("./pages/SingleTrendingMovie")
  );
  const Movies = React.lazy(() => import("./pages/Movies"));
  const TvSeries = React.lazy(() => import("./pages/TvSeries"));
  const Search = React.lazy(() => import("./pages/Search"));
  const SingleSearch = React.lazy(() => import("./pages/SingleSearch"));

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
            <Route index element={<Home />} />
            <Route
              path={appUrl.singleTrendingMovie}
              element={<SingleTrendingMovie />}
            />
            <Route path={appUrl.movies} element={<Movies />} />
            <Route path={appUrl.tvSeries} element={<TvSeries />} />
            <Route path={appUrl.search} element={<Search />} />
            <Route path={appUrl.singleSearch} element={<SingleSearch />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
