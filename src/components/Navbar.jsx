import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faSearch,
  faFire,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { appUrl } from "../URL";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setNavLinks(true);
  }, [pathname]);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const removeSideBar = () => {
    setSidebar(false);
  };

  window.addEventListener("resize", removeSideBar);
  window.addEventListener("scroll", removeSideBar);

  return (
    <main className="bg-navbarBlack">
      <section className="flex items-center justify-center min-h-[8vh] w-full sticky top-0 shadow-md overflow-hidden text-movieHubWhite">
        <div className="flex flex-row items-center justify-between px-4 lg:justify-start gap-x-0 md:gap-x-5 w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto">
          <Link to={appUrl.landingPage} className="font-bold text-[20px]">
            MoviesHub
          </Link>

          <button
            type="button"
            onClick={handleSidebar}
            className=" block lg:hidden bg-movieHubWhite px-4 py-2 focus:outline-0 rounded-md text-navbarBlack"
          >
            <FontAwesomeIcon icon={faBars} className="font-bold text-[20px]" />
          </button>

          <ul className="hidden lg:flex items-center justify-between flex-1 w-full max-w-[400px]">
            <li>
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

            <li>
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

            <li>
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

            <li>
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
        </div>
      </section>

      {/* SIDEBAR */}

      <ul
        className={
          sidebar
            ? "flex flex-col gap-5 fixed top-[0%] ease-in-out duration-500 bg-navbarBlack overflow-y-scroll text-movieHubWhite w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto p-4"
            : "flex flex-col gap-5 fixed top-[-100%] ease-in-out duration-500 bg-navbarBlack w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto p-4"
        }
      >
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </main>
  );
};

export default Navbar;
