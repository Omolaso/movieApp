import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { appUrl } from "../URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faFire,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [navLinks, setNavLinks] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const removeSideBar = () => {
    setSidebar(false);
  };

  useEffect(() => {
    setNavLinks(true);
  }, [pathname]);

  window.addEventListener("resize", removeSideBar);
  window.addEventListener("scroll", removeSideBar);

  return (
    <main className="w-full relative bg-navbarBlack sm:max-w-[500px] md:max-w-[700px] mx-auto">
      <div className="flex flex-row items-center justify-between min-h-[10vh] sticky z-50 text-movieHubWhite px-4 lg:justify-start gap-x-0 md:gap-x-5 w-full">
        <Link to={appUrl.landingPage} className="font-bold text-[20px]">
          MoviesHub
        </Link>

        <button
          type="button"
          onClick={handleSidebar}
          className=" block lg:hidden bg-movieHubWhite w-full max-w-[60px] py-2 focus:outline-0 rounded-md text-navbarBlack"
        >
          <FontAwesomeIcon icon={faBars} className="font-bold text-[20px]" />
        </button>
      </div>

      <section
        className={
          sidebar &&
          (document.documentElement.scrollTop > 5 ||
            document.body.scrollTop > 5)
            ? "fixed left-0 flex items-center justify-center h-[100px] bg-navbarBlack ease-in-out duration-500 w-full px-4 -mt-1"
            : sidebar
            ? "left-0 flex items-center justify-center h-[100px] bg-navbarBlack ease-in-out duration-500 w-full px-4 -mt-1"
            : "fixed left-0 flex items-center justify-center h-0 ease-in-out duration-500 w-full bg-navbarBlack px-4"
        }
      >
        <ul
          className={
            sidebar
              ? "ease-in-out duration-500 flex flex-col overflow-y-scroll h-[100px] items-start gap-y-3 text-movieHubWhite mb-2 w-full sm:max-w-[470px] md:max-w-[670px] mx-auto"
              : "ease-in-out duration-500 flex flex-col overflow-y-scroll h-0 items-start gap-y-3 text-movieHubWhite mb-2 w-full sm:max-w-[470px] md:max-w-[670px] mx-auto"
          }
        >
          <li onClick={removeSideBar}>
            <Link
              to={appUrl.landingPage}
              className={
                navLinks && pathname === appUrl.landingPage
                  ? "flex items-center justify-center gap-2 text-[16px] font-bold text-movieHubWhite"
                  : "flex items-center justify-center gap-2 text-[16px] font-normal text-navlinkPrimaryColor"
              }
            >
              <FontAwesomeIcon icon={faFire} />
              <span>Trending</span>
            </Link>
          </li>

          <li onClick={removeSideBar}>
            <Link
              to={appUrl.movies}
              className={
                navLinks && pathname === appUrl.movies
                  ? "flex items-center justify-center gap-2 text-[16px] font-bold text-movieHubWhite"
                  : "flex items-center justify-center gap-2 text-[16px] font-normal text-navlinkPrimaryColor"
              }
            >
              <FontAwesomeIcon icon={faFilm} />
              <span>Movies</span>
            </Link>
          </li>

          <li onClick={removeSideBar}>
            <Link
              to={appUrl.tvSeries}
              className={
                navLinks && pathname === appUrl.tvSeries
                  ? "flex items-center justify-center gap-2 text-[16px] font-bold text-movieHubWhite"
                  : "flex items-center justify-center gap-2 text-[16px] font-normal text-navlinkPrimaryColor"
              }
            >
              <FontAwesomeIcon icon={faTv} />
              <span>TV Series</span>
            </Link>
          </li>

          <li onClick={removeSideBar}>
            <Link
              to={appUrl.search}
              className={
                navLinks && pathname === appUrl.search
                  ? "flex items-center justify-center gap-2 text-[16px] font-bold text-movieHubWhite"
                  : "flex items-center justify-center gap-2 text-[16px] font-normal text-navlinkPrimaryColor"
              }
            >
              <FontAwesomeIcon icon={faSearch} />
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
