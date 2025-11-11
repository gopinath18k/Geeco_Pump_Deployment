import React, { useState } from "react";
import "./Industrial.css"; 
import Pump_Image_Need from "../../../assets/Agriculture/Pump image Needed.webp"
import Ind_V4_Tuff_Bullet_Pump from "../../../assets/Agriculture/Sub-V4-pump.webp"
import Ind_SS_MS_OpenWell_Pump from "../../../assets/Agriculture/SS_MS_OpenWell_Pump.webp"
import Ind_SSMS_Vertical_Pump from "../../../assets/Agriculture/SS_MS-Vertical-Pump.webp"
import Ind_Jumbo_Vertical_Pump from "../../../assets/Agriculture/Jumbo-Vertical-Pump.webp"
import Ind_Dewatering_Pump from "../../../assets/Domestic/Dewatering-Pump.webp"
import Ind_Pressure_Booster_Pump from "../../../assets/Domestic/Domestic-Pressure-Booster-Pump.webp"
import Ind_swift_Pump from "../../../assets/Agriculture/Three-Phase-GNC-1.webp"
import Ind_ELH_Pump from "../../../assets/Agriculture/Single-Phase-ELH.webp"
import Ind_GNC1_Pump from "../../../assets/Agriculture/Three-Phase-GNC-1.webp"
import Ind_GNC2_Pump from "../../../assets/Agriculture/Three-Phase-GNC-2.webp"
import CommercialBanner from "../../../assets/Agrimage.webp"
import { Link } from "react-router-dom";

export const Industrial = () => {

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
          { name: "V4 Tuff,Bullet Pumps", img: Ind_V4_Tuff_Bullet_Pump, link: "/industrial-pump/borewell-submersible/v4-tuff-bullet-pumps" },
        ],
      },
    },
    "OPENWELL SUBMERSIBLE PUMPS": {
      sizes: {
        "HORIZONTAL OPENWELL": [
          { name: "SS&MS Openwell Pumps", img: Ind_SS_MS_OpenWell_Pump, link: "/industrial-pump/industrial-ss-ms-horizontal-openwell-pump" },
          
        ],
        "VERTICAL OPENWELL": [
          { name: "SS & MS Vertical Openwell Pumps", img: Ind_SSMS_Vertical_Pump, link: "/industrial-pump/ss-ms-vertical-openwell-pump" },
          { name: "Jumbo Vertical Openwell Pump", img: Ind_Jumbo_Vertical_Pump, link: "/industrial-pump/jumbo-vertical-openwell-pump" },
        ],
      },
    },
    "WASTE WATER PUMPS": {
        sizes: {
          "WASTE WATER PUMP": [
            { name: "Dewatering Pump", img: Ind_Dewatering_Pump, link: "/industrial-pump/waste-water-pump/dewatering-pump" },
            { name: "Sewage Pump", img: Pump_Image_Need, link: "/industrial-pump/waste-water-pump/sewage-pump" },
            { name: "Cutter Pump", img: Pump_Image_Need, link: "/industrial-pump/waste-water-pump/cutter-pump" },
          ],          
        },
    },
    "HIGH PRESSURE PUMP": {
        sizes: {
          "HIGH PRESSURE PUMP": [
            { name: "Horizontal Multistage Pump", img: Ind_Pressure_Booster_Pump, link: "/industrial-pump/high-pressure-pumps/horizontal-multistage-pump" },
            { name: "Vertical Multistage Pump", img: Pump_Image_Need, link: "/industrial-pump/high-pressure-pumps/vertical-multistage-pump" },
            { name: "Vertical Inline Pump", img: Pump_Image_Need, link: "/industrial-pump/high-pressure-pumps/vertical-inline-pump" },
            { name: "High Pressure Car Wash Pump", img: Pump_Image_Need, link: "/industrial-pump/high-pressure-pumps/high-pressure-car-wash-pump" },
            ],
        },
    },
    "TANK COMPRESSOR PUMPS": {
        sizes: {
          "TANK COMPRESSOR PUMP": [
            { name: "GTCS Pump", img: Pump_Image_Need, link: "/industrial-pump/tank-compressor-pumps/gtcs-pump" },
            { name: "GTCD Pump", img: Pump_Image_Need, link: "/industrial-pump/tank-compressor-pumps/gtcd-pump" },
            { name: "GTCDH Pump", img: Pump_Image_Need, link: "/industrial-pump/tank-compressor-pumps/gtcdh-pump" },  
            ],
         },
    },
    "CONTROL PANELS": {
        sizes: {
          "SINGLE PHASE PANEL": [
            { name: "MCB Panel", img: Pump_Image_Need, link: "/industrial-pump/control-panels/single-phase-panels/mcb-panel" },
            { name: "SWIFT Panel", img: Ind_swift_Pump, link: "/industrial-pump/control-panels/single-phase-panels/swift-panel" },
            { name: "ELH Panel", img: Ind_ELH_Pump, link: "/industrial-pump/control-panels/single-phase-panels/elh-panel" },
            { name: "ELH Auto Panel", img: Ind_ELH_Pump, link: "/industrial-pump/control-panels/single-phase-panels/elh-auto-panel" },
            { name: "ELH Full Auto Panel", img: Ind_ELH_Pump, link: "/industrial-pump/control-panels/single-phase-panels/elh-full-auto-panel" },
            ],
          "THREE PHASE PANEL": [
            { name: "GNC Panel 1", img: Ind_GNC1_Pump, link: "/industrial-pump/control-panels/three-phase-panel/gnc-panel-1" },
            { name: "GNC Panel 2", img: Ind_GNC2_Pump, link: "/industrial-pump/control-panels/three-phase-panel/gnc-panel-2" },
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
    <div className="industrial-container">
      <div className="industrial-banner-container">
        <div className="industrial-banner-content">
          <p>Pumps We Serve</p>
          <h2>Industrial Pumps</h2>
        </div>
        <div className="industrial-banner-image">
          <img src={CommercialBanner} alt="Industrial Banner" className="industrial-image"/>
        </div>
      </div>

      <div className="industrial-content">
        <h2 className="industrial-main-heading">Find Your Pumps</h2>
      </div>

      <div className="industrial-content">
        <div className="industrial-categories">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`industrial-category-item ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="industrial-pump-details">
          {selectedCategory && pumpData[selectedCategory] && (
            <>
              <div className="industrial-size-tabs">
                {Object.keys(pumpData[selectedCategory].sizes).map((size, idx) => (
                  <div
                    key={idx}
                    className={`industrial-size-tab ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="industrial-pump-images">
                {selectedSize &&
                  pumpData[selectedCategory].sizes[selectedSize].map((pump, idx) => (
                    <Link to={pump.link || "#"} key={idx} className="industrial-pump-card-link" onClick={() => window.scrollTo(0, 0)}>
                      <div className="industrial-pump-card">
                        <img src={pump.img} alt={pump.name} />
                        <div className="industrial-pump-content">
                          <p className="industrial-pump-name">{pump.name}</p>
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
