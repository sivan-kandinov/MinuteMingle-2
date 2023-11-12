import React from "react";

export default function landing() {
    return (
      <div className="bg-gray-200 pt-5">
        <div className="mx-auto w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src={picture}
            alt="picture of a person"
            id="profilePic"
            className="rounded-t-lg transition duration-500 "
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {person && person.basicInfo.firstName}{" "}
              {person && person.basicInfo.lastName},{" "}
              {person && person.basicInfo.age}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Major(s): {person && person.academicInfo.majors}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Minor(s): {person && person.academicInfo.minors}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Courses: {person && person.academicInfo.classes}
            </p>
          </div>
          <button className="absolute top-[25px] left-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>

          <div className="flex mb-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-[#881c1d] rounded-lg hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-gray-400">
              Become Study Buddies with Jeremy!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
