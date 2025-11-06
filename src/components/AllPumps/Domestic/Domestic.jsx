import React, { useState } from "react";
import "./Domestic.css"; 
import Pump_Image_Need from "../../../assets/Agriculture/Pump image Needed.webp"
import Dom_V4_Little_Submersible_Pump from "../../../assets/Domestic/V4-Little-Submersible.webp"
import Dom_V4_Flora_Pump from "../../../assets/Domestic/V4-Flora-Pump.webp"
import SS_Horizontal_OpenWell_Pump from "../../../assets/Agriculture/SS_MS_OpenWell_Pump.webp"
import SS_Vertical_OpenWell_Pump from "../../../assets/Agriculture/SS_MS-Vertical-Pump.webp"
import DomesticBanner from "../../../assets/Agrimage.webp"
import { Link } from "react-router-dom";

export const Domestic = () => {

  const categories = [
    "BOREWELL SUBMERSIBLE PUMPS",
    "OPENWELL SUBMERSIBLE PUMPS",
    "AMPHIBIEN PUMPS",
    "CENTRIFUGAL MONO BLOCKS",
    "SELF PRIMING MONO BLOCK PUMPS",
    "JET PUMPS",
    "WASTE WATER PUMPS",
    "HIGH PRESSURE PUMP",
    "COMPRESSOR PUMPS",
    "TANK COMPRESSOR PUMPS",
    "CONTROL PANELS",
    "FLAT SUBMERSIBLE CABLES",
  ];

  const pumpData = {
    "BOREWELL SUBMERSIBLE PUMPS": {
      sizes: {
        "3' (75MM)": [
          { name: "V3 Sleek Model", img: Pump_Image_Need, link: "/domestic-pump/borewell-v3-sleek-pump" },
        ],
        "4' (100MM)": [
          { name: "V4 LittleSub Pump", img: Dom_V4_Little_Submersible_Pump, link: "/domestic-pump/v4-littlesub-pump" },
          { name: "V4 Flojet, Flora, Taurus, Sakthi Pumps", img: Dom_V4_Flora_Pump, link: "/domestic-pump/v4-flojet-flora-taurus-sakthi-pumps" },
        ],
      },
    },
    "OPENWELL SUBMERSIBLE PUMPS": {
      sizes: {
        "HORIZONTAL OPENWELL": [
          { name: "SS Horizontal Openwell Pumps", img: SS_Horizontal_OpenWell_Pump, link: "/domestic-pump/ss-horizontal-openwell-pumps" },
        ],
        "VERTICAL OPENWELL": [
          { name: "SS Vertical GSV Openwell Pumps", img: SS_Vertical_OpenWell_Pump, link: "/domestic-pump/ss-vertical-gsv-openwell-pumps" },
        ],
      },
    },
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSize(null);
  };

  return (
    <div className="domestic-container">
      <div className="domestic-banner-container">
        <div className="domestic-banner-content">
          <p>Pumps We Serve</p>
          <h2>Domestic & Residential Pumps</h2>
        </div>
        <div className="domestic-banner-image">
          <img src={DomesticBanner} alt="Domestic Banner" className="domestic-image"/>
        </div>
      </div>

      <div className="domestic-content">
        <h2 className="domestic-main-heading">Find Your Pumps</h2>
      </div>

      <div className="domestic-content">
        <div className="domestic-categories">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`domestic-category-item ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="domestic-pump-details">
          {selectedCategory && pumpData[selectedCategory] && (
            <>
              <div className="domestic-size-tabs">
                {Object.keys(pumpData[selectedCategory].sizes).map((size, idx) => (
                  <div
                    key={idx}
                    className={`domestic-size-tab ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="domestic-pump-images">
                {selectedSize &&
                  pumpData[selectedCategory].sizes[selectedSize].map((pump, idx) => (
                    <Link to={pump.link || "#"} key={idx} className="domestic-pump-card-link" onClick={() => window.scrollTo(0, 0)}>
                      <div className="domestic-pump-card">
                        <img src={pump.img} alt={pump.name} />
                        <div className="domestic-pump-content">
                          <p className="domestic-pump-name">{pump.name}</p>
                          <small>{selectedSize}</small>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
