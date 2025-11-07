import React, { useState } from "react";
import "./Commercial.css"; 
import Pump_Image_Need from "../../../assets/Agriculture/Pump image Needed.webp"
import Com_V4_Tuff_Bullet_Pump from "../../../assets/Agriculture/Sub-V4-pump.webp"
import Com_V4_Sakthi_Pump from "../../../assets/Agriculture/Sub-V4-Pump-Bullet.webp"
import Com_V6_PVA_Pump from "../../../assets/Agriculture/V6-Premium-Pump.webp"
import CommercialBanner from "../../../assets/Agrimage.webp"
import { Link } from "react-router-dom";

export const Commercial = () => {

  const categories = [
    "BOREWELL SUBMERSIBLE PUMPS",
    "OPENWELL SUBMERSIBLE PUMPS",
    "AMPHIBIEN PUMPS",
    "CENTRIFUGAL MONO BLOCKS",
    "SELF PRIMING MONO BLOCK PUMPS",
    "JET PUMPS",
    "TANK COMPRESSOR PUMPS",
    "COMPRESSOR PUMPS",
    "HIGH PRESSURE PUMP",
    "WASTE WATER PUMPS",
    "CONTROL PANELS",
    "FLAT SUBMERSIBLE CABLES",
  ];

  const pumpData = {
    "BOREWELL SUBMERSIBLE PUMPS": {
      sizes: {
        "4' (100MM)": [
          { name: "V4 Tuff,Bullet Pumps", img: Com_V4_Tuff_Bullet_Pump, link: "/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps" },
          { name: "V4 Sakthi Pump", img: Com_V4_Sakthi_Pump, link: "/commercial-pump/borewell-submersible/v4-sakthi-pump" },
        ],
        "6' (150MM)": [
          { name: "V6 Premium Pump", img: Com_V6_PVA_Pump, link: "/commercial-pump/borewell-submersible/v6-premium-pump" },
          { name: "V6 Vinc Pumpp", img: Com_V6_PVA_Pump, link: "/commercial-pump/borewell-submersible/v6-vinc-pump" },
          { name: "V6 Active Pump", img: Com_V6_PVA_Pump, link: "/commercial-pump/borewell-submersible/v6-active-pump" },
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
    <div className="commercial-container">
      <div className="commercial-banner-container">
        <div className="commercial-banner-content">
          <p>Pumps We Serve</p>
          <h2>Commercial Pumps</h2>
        </div>
        <div className="commercial-banner-image">
          <img src={CommercialBanner} alt="Commercial Banner" className="commercial-image"/>
        </div>
      </div>

      <div className="commercial-content">
        <h2 className="commercial-main-heading">Find Your Pumps</h2>
      </div>

      <div className="commercial-content">
        <div className="commercial-categories">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`commercial-category-item ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="commercial-pump-details">
          {selectedCategory && pumpData[selectedCategory] && (
            <>
              <div className="commercial-size-tabs">
                {Object.keys(pumpData[selectedCategory].sizes).map((size, idx) => (
                  <div
                    key={idx}
                    className={`commercial-size-tab ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="commercial-pump-images">
                {selectedSize &&
                  pumpData[selectedCategory].sizes[selectedSize].map((pump, idx) => (
                    <Link to={pump.link || "#"} key={idx} className="commercial-pump-card-link" onClick={() => window.scrollTo(0, 0)}>
                      <div className="commercial-pump-card">
                        <img src={pump.img} alt={pump.name} />
                        <div className="commercial-pump-content">
                          <p className="commercial-pump-name">{pump.name}</p>
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
