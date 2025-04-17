import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col  items-center  pb-5">
      <h1 className="text-3xl font-bold py-8 ">Task List</h1>
      <div className="mx-auto ">
        <div className="flex flex-wrap gap-5 pl-36">
          <Link to="/project-1">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 1
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Dynamic Product Management System:
              </p>
              <p className=" text-md text-gray-600">
                In this project, I learned how to add dynamic rows to a table
                where each row acts as a form. Users can add product details
                through the form, and once submitted, the data is displayed in
                the "View Products" section.
              </p>
            </div>
          </Link>
          <Link to="project-2">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 2
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Dynamic Data Table with Server-Side Pagination and Filtering:
              </p>
              <p className=" text-md text-gray-600">
                In this project, I fetched data from an API and displayed it in
                a table. I implemented server-side pagination, allowing data to
                be displayed dynamically as users navigate through pages.
                Additionally, I added a search feature and a filter feature,
                both of which are handled on the server side.
              </p>
            </div>
          </Link>
          <Link to="/project-3">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 3
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Dynamic Data Table with Front-End Pagination, Search, and
                Filtering:
              </p>
              <p className=" text-md text-gray-600">
                In this project, I fetched data from an API and displayed it in
                a table. I implemented pagination, allowing data to be displayed
                dynamically as users navigate through pages. Additionally, I
                added a search feature and a filter feature, all of which are
                handled on the front end.
              </p>
            </div>
          </Link>
          <Link to="/project-4">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 4
              </p>
              <p className=" text-md font-medium text-black pb-2">
                User Data Management Form with Edit Functionality:
              </p>
              <p className=" text-md text-gray-600">
                In this project, I created a form where users can add their
                details. Once added, they can view their names and have the
                ability to edit the data.
              </p>
            </div>
          </Link>
          <Link to="/project-5">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 5
              </p>
              <p className=" text-md font-medium text-black pb-2">
                User Profile Management System with Redux:
              </p>
              <p className=" text-md text-gray-600">
                In this project, I created a form where users can add their
                details. Once added, they can view, edit, and delete their
                details. For state management, I used Redux in a class-based
                component.
              </p>
            </div>
          </Link>
          <Link to="/mapping">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 6
              </p>
              <p className=" text-md font-medium text-black pb-2">Markmap</p>
              <p className=" text-md text-gray-600">
                Markmap for Gin, which includes headers, inventory capture,
                style allocation, and gin details.
              </p>
            </div>
          </Link>
          <Link to="/charts">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 7
              </p>
              <p className=" text-md font-medium text-black pb-2">Chart JS</p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/mainPage">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 8
              </p>
              <p className=" text-md font-medium text-black pb-2">
                QR Code Task
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-9">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 9
              </p>
              <p className=" text-md font-medium text-black pb-2">
                React Strap Table
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-10">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 10
              </p>
              <p className=" text-md font-medium text-black pb-2">
                GIN DOCUMENT
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-11">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 11
              </p>
              <p className=" text-md font-medium text-black pb-2">Bar Code</p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-12">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 12
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Rake Bar Code
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-13">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 13
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Issue Document
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-14">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 14
              </p>
              <p className=" text-md font-medium text-black pb-2">
                QC Document
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-15">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 15
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Assign Roles
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-16">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 16
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Laboratory Report
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
          <Link to="/project-17">
            <div className=" bg-gray-200 w-[300px] h-[330px] rounded-lg px-3 pt-2 pb-3 shadow-md">
              <p className=" text-xl font-bold text-center text-black py-2">
                Task 17
              </p>
              <p className=" text-md font-medium text-black pb-2">
                Laboratory Report
              </p>
              <p className=" text-md text-gray-600">
                Chat.js is a lightweight JavaScript library for building
                interactive, real-time chat interfaces in web applications,
                designed for simplicity and modern front-end integration.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
