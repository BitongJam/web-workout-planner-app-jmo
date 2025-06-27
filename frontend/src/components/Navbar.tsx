import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-900 mb-10 px-6 py-6 flex justify-center">
      <ul className="flex space-x-8">
        <li className="text-white hover:font-extrabold cursor-pointer">
          Workout
        </li>
        <li className="text-white hover:font-extrabold cursor-pointer  ">
          Excercises
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
