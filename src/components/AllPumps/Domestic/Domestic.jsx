import React, { useState } from "react";
import "./Domestic.css"; 
import Pump_Image_Need from "../../../assets/Agriculture/Pump image Needed.webp"
import Dom_V4_Little_Submersible_Pump from "../../../assets/Domestic/V4-Little-Submersible.webp"
import Dom_V4_Flora_Pump from "../../../assets/Domestic/V4-Flora-Pump.webp"
import SS_Horizontal_OpenWell_Pump from "../../../assets/Agriculture/SS_MS_OpenWell_Pump.webp"
import SS_Vertical_OpenWell_Pump from "../../../assets/Agriculture/SS_MS-Vertical-Pump.webp"
import Domestic_Hero_Pump from "../../../assets/Domestic/Hero-Pump.webp"
import Domestic_Hero_Plus_Pump from "../../../assets/Domestic/Hero-Plus-Pump.webp"
import Domestic_Smart_Pump from "../../../assets/Domestic/Smart-Pump.webp"
import Domestic_LittleKing_Plus_Pump from "../../../assets/Domestic/Little-King-Plus-Pump.webp"
import Domestic_Geeco_Vale_Pump from "../../../assets/Domestic/Geeco-Vale-Pump.webp"
import Domestic_GMS_Pump from "../../../assets/Domestic/GMS-Pump.webp"
import Domestic_GHM_Pump from "../../../assets/Domestic/GHM-Pump.webp"
import Domestic_Shallow_well_Jet_Pump from "../../../assets/Domestic/Shallow-well-Jet-Pump.webp"
import Domestic_Jet_Pump from "../../../assets/Domestic/Jet-Pumps.webp"
import Domestic_Pressure_Booster_Pump from "../../../assets/Domestic/Domestic-Pressure-Booster-Pump.webp"
import Domestic_Dewatering_Pump from "../../../assets/Domestic/Dewatering-Pump.webp"
import Domestic_swift_Pump from "../../../assets/Agriculture/Three-Phase-GNC-1.webp"
import Domestic_ELH_Pump from "../../../assets/Agriculture/Single-Phase-ELH.webp"
import Domestic_GNC_Pump from "../../../assets/Agriculture/Three-Phase-GNC-2.webp"
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
    "CENTRIFUGAL MONO BLOCKS": {
      sizes: {
        "MONO BLOCKS": [
          { name: "Mono Block SCM Pumps", img: Pump_Image_Need, link: "/domestic-pump/centrifugal-monoblock-scm-pump" },
        ],
        
      },
    },
    "SELF PRIMING MONO BLOCK PUMPS": {
      sizes: {
        "MINI MONOBLOCKS": [
          { name: "Hero Pump", img: Domestic_Hero_Pump, link: "/domestic-pump/self-priming-monoblock/hero-pump" },
          { name: "Hero Plus Pump", img: Domestic_Hero_Plus_Pump, link: "/domestic-pump/self-priming-monoblock/hero-plus-pump" },
          { name: "Smart Pump", img: Domestic_Smart_Pump, link: "/domestic-pump/self-priming-monoblock/smart-pump" },
          { name: "LittleKing Pump", img: Domestic_LittleKing_Plus_Pump, link: "/domestic-pump/self-priming-monoblock/littleking-pump" },
          { name: "LittleKing Plus Pump", img: Domestic_LittleKing_Plus_Pump, link: "/domestic-pump/self-priming-monoblock/littleking-plus-pump" },
          { name: "Geeco Vale Pump", img: Domestic_Geeco_Vale_Pump, link: "/domestic-pump/self-priming-monoblock/geeco-vale-pump" },
        ],
        "SLOWSPEED MONOBLOCKS": [
          { name: "GMS2 Pump", img: Domestic_GMS_Pump, link: "/domestic-pump/self-priming-monoblock/gms2-pump" },
          { name: "GMS2 Pro Pump", img: Domestic_GMS_Pump, link: "/domestic-pump/self-priming-monoblock/gms2-pro-pump" },
          { name: "GMS 3 Pump", img: Domestic_GMS_Pump, link: "/domestic-pump/self-priming-monoblock/gms3-pump" },
          { name: "GMH Silver Pump", img: Domestic_GHM_Pump, link: "/domestic-pump/self-priming-monoblock/gmh-silver-pump" },
        ],
      },
    },
     "JET PUMPS": {
      sizes: {
        "JET PUMP": [
          { name: "Shallow Well Jet King Pump", img: Domestic_Shallow_well_Jet_Pump, link: "/domestic-pump/jet-pumps/shallow-well-jet-king-pump" },
          { name: "Jet Pumps BM", img: Domestic_Jet_Pump, link: "/domestic-pump/jet-pumps/jet-pump-bm" },
        ],
        
      },
    },
     "HIGH PRESSURE PUMP": {
      sizes: {
        "HORIZONTAl MULTISTAGE": [
          { name: "Domestic Pressure Booster pump", img: Domestic_Pressure_Booster_Pump, link: "/domestic-pump/high-pressure/horizontal-multistage/domestic-pressure-booster-pump" },
        ],
        "VERTICAL MULTISTAGE": [
          { name: "Domestic RO Pump", img: Domestic_Pressure_Booster_Pump, link: "/domestic-pump/high-pressure/vertical-multistage/domestic-ro-pump" },
        ],
        
      },
    },
      "WASTE WATER PUMPS": {
        sizes: {
          "WASTE WATER PUMP": [
            { name: "Dewatering Pump", img: Domestic_Dewatering_Pump, link: "/domestic-pump/waste-water-pump/dewatering-pump" },
          ],
          
        },
      },
       "CONTROL PANELS": {
      sizes: {
        "SINGLE PHASE PANELS": [
          { name: "MCB Panel", img: Pump_Image_Need, link: "/domestic-pump/control-panels/single-phase-panels/mcb-panel" },
          { name: "SWIFT Panel", img: Domestic_swift_Pump, link: "/domestic-pump/control-panels/single-phase-panels/swift-panel" },
          { name: "ELH Panel", img: Domestic_ELH_Pump, link: "/domestic-pump/control-panels/single-phase-panels/elh-panel" },
          { name: "ELH Auto Panel", img: Domestic_ELH_Pump, link: "/domestic-pump/control-panels/single-phase-panels/elh-auto-panel" },
          { name: "ELH Full Auto Panel", img: Domestic_ELH_Pump, link: "/domestic-pump/control-panels/single-phase-panels/elh-full-auto-panel" },
        ],
        "THREE PHASE PANEL": [
          { name: "GNC Panel 1", img: Domestic_GNC_Pump, link: "/domestic-pump/control-panels/three-phase-panel/gnc-panel-1" },
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
