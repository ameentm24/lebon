import React from "react";
import "./cakes.css";

import Tab from "../../components/tabs/Tab";
import { cakes} from "../../data/cakes.jsx";

const Cakes = () => {
  const handleTabChange = (index) => {
    // console.log(`Active Tab Index: ${index}`);
  };
  return (
    <>
      <section className="dividerImage">
        <img
          className="w-100"
          src="/images/cakesImg.png"
          alt="cakes"
        />
      </section>

      {/* ======= Our Specialities ======== */}

      <section className="container p-3 p-lg-5">
        <div className="our-specialities mb-lg-4">
          <div className="section-heading ">
            <p className="overline  f-4 ls-2">Quality Food For You</p>
            <h2 className="title">Our Specialities</h2>
            <p className="bottomline">
              Authentic food from our restaurant served <br /> with high quality
              ingredients
            </p>
          </div>

          <div className="specialities-tab col-12">
            <Tab tabs={cakes} onTabChange={handleTabChange} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cakes;
