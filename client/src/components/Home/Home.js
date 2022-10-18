import React, { useEffect, useState } from "react";
import { apiUrl } from "../../utils/apiUrl/apiUrl";
import Card from "../Card/Card";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [searchBy, setSearchBy] = useState("Username");
  const [searchValue, setSearchValue] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function fetchAllUser() {
      try {
        const resp = await fetch(`${apiUrl}/players`);
        const data = await resp.json();
        console.log(data);

        setUserData(data.message);
        setSearchResultData(data.message);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAllUser();
  }, []);

  const toggleHandler = () => {
    return setIsOpen((previousValue) => !previousValue);
  };

  const searchChangeUsername = () => {
    setSearchBy("Username");
  };

  const searchChangeEmail = () => {
    setSearchBy("Email");
  };

  const searchChangeExperience = () => {
    setSearchBy("Experience");
  };

  const searchChangeLvl = () => {
    setSearchBy("Lvl");
  };

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const searchResult = searchResultData.filter((data) => {
      return data[searchBy.toLowerCase()].includes(searchValue);
    });

    if (searchValue === "") {
      return setSearchResultData(userData);
    }

    console.log(searchResult);

    setSearchResultData(searchResult);
  };

  return (
    <div className="container flex flex-col flex-wrap mx-auto py-5">
      <div>
        <form onSubmit={submitHandler}>
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Your Email
            </label>
            <button
              onClick={toggleHandler}
              id="dropdown-button"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              {searchBy}
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              className={`${
                isOpen ? "absolute" : "hidden"
              } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
              style={{
                transform: "translate3d(0px, 50px, 0px)",
              }}
            >
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={searchChangeUsername}
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Username
                  </button>
                </li>
                <li>
                  <button
                    onClick={searchChangeEmail}
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Email
                  </button>
                </li>
                <li>
                  <button
                    onClick={searchChangeExperience}
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={searchChangeLvl}
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Lvl
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Username, Email, Experience, Lvl.."
                required=""
                onChange={searchChangeHandler}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center">
        {searchResultData.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              username={data.username}
              email={data.email}
              experience={data.experience}
              lvl={data.lvl}
            />
          );
        })}
      </div>
    </div>
  );
}
