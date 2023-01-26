import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faSearch,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { appUrl } from "../URL";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setNavLinks(true);
  }, [pathname]);

  return (
    <main className="flex items-center justify-center text-movieHubWhite bg-navbarBlack w-full sticky top-0 z-50 shadow-md overflow-hidden">
      <section className="hidden lg:flex items-center justify-center text-movieHubWhite w-full min-h-[10vh]">
        <div className="flex flex-row items-center justify-between px-4 lg:justify-start gap-x-0 md:gap-x-5 w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto">
          <Link to={appUrl.landingPage} className="font-bold text-[20px]">
            MoviesHub
          </Link>

          <ul className="flex items-center justify-between flex-1 w-full max-w-[400px]">
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

      <div className="block lg:hidden w-full">
        <Sidebar />
      </div>
    </main>
  );
};

export default Navbar;
