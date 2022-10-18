import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, username, email, experience, lvl }) {
  return (
    <>
      <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-[2rem]">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          ></button>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-20 h-20 rounded-full shadow-lg"
            src="https://www.svgrepo.com/show/155944/network-forum-avatar-doodle.svg"
            alt="user"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {username}
          </h5>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {email}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Lvl: {lvl}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Experience: {experience}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              to={`edit-user/${id}`}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </Link>
            <button
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 rounded-lg border focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
