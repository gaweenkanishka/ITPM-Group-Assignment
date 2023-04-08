import React from "react";

function Text2() {
  return (
    <div className="bg-white dark:bg-#000000-800 overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-2 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-#000000 sm:text-4xl">
          <span className="block">
            CHANGE THE LIFE OF THOSE, WHO HAVE NO HOPE
          </span>
        </h2>
        <p className="text-md mt-2 text-gray-700">
          Sustainable Development Goals “The Sustainable Development Goals
          (SDGs), otherwise known as the Global Goals, are a universal call to
          action to end poverty, protect the planet and ensure that all people
          enjoy peace and prosperity.” - So when considering poverty it has huge
          scope spread to many aspect. By Our project “MANUSATHKAMA” is a web
          base project. It tries to find all possible solutions under poverty.
          And by concatenating them under main four group we are trying to give
          best solution to them. under this, it contains fundraising services
          and many more such as BELOW,
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow"></div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-84">
        <img
          src="https://images.unsplash.com/photo-1590982257067-6ab55fd8fe2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          className="w-4/5 rounded-lg"
          alt="Tree"
        />
        <div>
          <img
            src="https://images.unsplash.com/photo-1649829969226-fd18c99bbadf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            className="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://images.unsplash.com/photo-1607923287346-6fe63696797c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
}
export default Text2;
