import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [movieSearch, setMovieSearch] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!inputValue) {
      return;
    }
    if (movieSearch.length < 1) {
      setLoader(true);
    }
    axios
      .get(`/SearchAll/k_wro51ksc/${inputValue}`)
      // .get(`/SearchAll/k_c3g1jac0/${inputValue}`)
      .then((res) => {
        setMovieSearch(res.data.results);
      })
      .then(() => setLoader(false))
      .catch((error) => console.log(error));
  };

  const handleSearchWithEnter = (e) => {
    e.key === "Enter" ? handleSearch() : null;
    !inputValue ? setMovieSearch([]) : null;
  };

  return (
    <main className="flex flex-col gap-8 p-4 w-full">
      <div className="flex flex-row items-center justify-start gap-4 text-[16px] w-full md:max-w-[700px] lg:max-w-[600px]">
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleSearchWithEnter}
          placeholder="Search movies"
          className="flex-1 focus:shadow-[0px_0px_0px_3px_] focus:shadow-buttonBlue duration-300 focus:outline-0 bg-navbarBlack h-[50px] rounded-lg px-4"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-buttonGreen flex-[0.4] md:flex-[0.2] h-[50px] rounded-lg text-backgroundBlack"
        >
          Search
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 scale-1 duration-500">
        {movieSearch.map((searchedMovie) => (
          <div
            className="searched-movie rounded-md min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-between w-full p-5 bg-navbarBlack scale-[1] hover:scale-105 ease-in-out duration-500"
            key={searchedMovie.id}
          >
            <img
              src={searchedMovie.image}
              alt={searchedMovie.title}
              className="min-h-[150px] md:min-h-[300px] flex-1 w-full"
            />
            <button
              type="button"
              onClick={() => navigate(`/search/${searchedMovie.id}`)}
              className="text-[18px] font-medium text-center"
            >
              {searchedMovie.title}
            </button>
          </div>
        ))}
      </section>

      <div
        className={
          loader ? "flex items-center justify-center min-h-[50vh]" : "hidden"
        }
      >
        <FontAwesomeIcon
          icon={faRefresh}
          className="animate-spin text-[20px] text-navlinkPrimaryColor"
        />
      </div>
    </main>
  );
};

export default Search;
