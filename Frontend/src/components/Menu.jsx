import React from "react";

export function menu() {
  return (
    <div>
      <section className="bg-white0">
        <div className="container px-6 py-10 mx-auto">
          <h2 className="text-3xl font-extrabold text-black dark:text-#000000 sm:text-4xl">
            <span className="block">SELECT A CATEGORY TO GET GET START</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <img
                className="object-cover w-full rounded-lg h-96 "
                src="https://plus.unsplash.com/premium_photo-1663040337189-fa6906bf2bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Best website collections
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                food
              </p>
            </div>

            <div>
              <img
                className="object-cover w-full rounded-lg h-96 "
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
                alt=""
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Block of Ui kit collections
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                health care
              </p>
            </div>

            <div>
              <img
                className="object-cover w-full rounded-lg h-96 "
                src="https://images.unsplash.com/photo-1565383690591-1ee1b6582cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Ton’s of mobile mockup
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                Jobs and careers
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full rounded-lg h-96 "
                src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Ton’s of mobile mockup
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                education
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default menu;
