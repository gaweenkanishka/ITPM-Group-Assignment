import React from "react";
// import "./App.css";
import "./menu.css";

export function menu() {
  return (
    <div>
      <section className="carousel">
        <h2 className="text-3xl font-extrabold text-black dark:text-#000000 sm:text-4xl justify-center">
          Category
        </h2>
        <div className="carousel__container">
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.unsplash.com/photo-1632988142547-80a567cb36f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="people"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  "HEALTH CARE"
                </span>
              </h5>
              <h6 className="carousel-item__details--subtitle">
                Get Free Service
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.unsplash.com/photo-1564182873128-5052241315bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="people"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  "JOBS AND TRAINING "
                </span>
              </h5>
              <h6 className="carousel-item__details--subtitle">
                Get Free Service
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.unsplash.com/photo-1641683521844-700c456379bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt="people"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  "EDUCATION"
                </span>
              </h5>
              <h6 className="carousel-item__details--subtitle">
                Get Free Service
              </h6>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://www.oneindia.com/ph-big/2020/05/a-boy-wearing-face-mask-receives-food-from-volunteers-during-ongoing-covid-19-lockdown-in-kolkata_158839189180.jpg"
              alt="people"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  "FOOD"
                </span>
              </h5>
              <h6 className="carousel-item__details--subtitle">
                Get Free Service
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default menu;
