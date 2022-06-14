import React from "react";

const CategoryCard = ({ details, index }) => {
  return (
    <div key={index} className="max-w-md self-center mx-auto">
      <div className="w-full">
        <img
          src={details.imageUrl}
          // src="https://images.unsplash.com/photo-1530272423606-173cf40846e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxpbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="category"
          className="rounded object-cover w-full h-60"
        />
        <div
          className="relative h-56 bottom-10 p-4 bg-neutral-100 rounded w-11/12 mx-auto border-2"
          style={{ backgroundColor: "#F7FEE7" }} /* #e1f0ec | #c8facd */
        >
          <h1 className="font-bold text-xl mb-2 text-lime-600">
            {details.name}
          </h1>
          <p className="p-0 m-0">{details.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
