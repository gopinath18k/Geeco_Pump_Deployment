import React, { useState } from "react";
import "./Industrial.css"; 
import Pump_Image_Need from "../../../assets/Agriculture/Pump image Needed.webp"
import Com_V4_Tuff_Bullet_Pump from "../../../assets/Agriculture/Sub-V4-pump.webp"
import Com_V4_Sakthi_Pump from "../../../assets/Agriculture/Sub-V4-Pump-Bullet.webp"
import Com_V6_PVA_Pump from "../../../assets/Agriculture/V6-Premium-Pump.webp"
import Com_SS_MS_OpenWell_Pump from "../../../assets/Agriculture/SS_MS_OpenWell_Pump.webp"
import Com_Jumbo_Pump from "../../../assets/Agriculture/Jumbo_Pump.webp"
import commercial_Hero_Pump from "../../../assets/Domestic/Hero-Pump.webp"
import commercial_Hero_Plus_Pump from "../../../assets/Domestic/Hero-Plus-Pump.webp"
import commercial_Smart_Pump from "../../../assets/Domestic/Smart-Pump.webp"
import commercial_LittleKing_Plus_Pump from "../../../assets/Domestic/Little-King-Plus-Pump.webp"
import commercial_Geeco_Vale_Pump from "../../../assets/Domestic/Geeco-Vale-Pump.webp"
import commercial_Dewatering_Pump from "../../../assets/Domestic/Dewatering-Pump.webp"
import commercial_Pressure_Booster_Pump from "../../../assets/Domestic/Domestic-Pressure-Booster-Pump.webp"
import commercial_swift_Pump from "../../../assets/Agriculture/Three-Phase-GNC-1.webp"
import commercial_ELH_Pump from "../../../assets/Agriculture/Single-Phase-ELH.webp"
import commercial_GNC1_Pump from "../../../assets/Agriculture/Three-Phase-GNC-1.webp"
import commercial_GNC2_Pump from "../../../assets/Agriculture/Three-Phase-GNC-2.webp"
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
          { name: "V4 Tuff,Bullet Pumps", img: Com_V4_Tuff_Bullet_Pump, link: "/industrial-pump/borewell-submersible/v4-tuff-bullet-pumps" },
        ],
      },
    },
    "OPENWELL SUBMERSIBLE PUMPS": {
      sizes: {
        "HORIZONTAL OPENWELL": [
          { name: "SS&MS Openwell Pumps", img: Com_SS_MS_OpenWell_Pump, link: "/industrial-pump/ss-ms-horizontal-openwell-pumps" },
          { name: "Jumbo Horizontal Openwell Pumps", img: Com_Jumbo_Pump, link: "/industrial-pump/jumbo-horizontal-openwell-pump" },
        ],
        "HORIZONTAL AMPHIBIEN": [
          { name: "SS&MS Amphibian Pumps", img: Pump_Image_Need, link: "/industrial-pump/ss-ms-amphibian-pumps" },
        ],
      },
    },
    "CENTRIFUGAL MONO BLOCKS": {
      sizes: {
        "MONOBLOCK PUMPS": [
          { name: "SCM Pumps", img: Pump_Image_Need, link: "/industrial-pump/centrifugal-monoblocks-pumps/scm-pump" },
        ],
      },
    },
    "SELF PRIMING MONO BLOCK PUMPS": {
      sizes: {
        "MINI MONOBLOCKS": [
          { name: "Hero Pump", img: commercial_Hero_Pump, link: "/industrial-pump/self-priming-monoblock/hero-pump" },
          { name: "Hero Plus Pump", img: commercial_Hero_Plus_Pump, link: "/industrial-pump/self-priming-monoblock/hero-plus-pump" },
          { name: "Smart Pump", img: commercial_Smart_Pump, link: "/industrial-pump/self-priming-monoblock/smart-pump" },
          { name: "LittleKing Pump", img: commercial_LittleKing_Plus_Pump, link: "/industrial-pump/self-priming-monoblock/littleking-pump" },
          { name: "LittleKing Plus Pump", img: commercial_LittleKing_Plus_Pump, link: "/industrial-pump/self-priming-monoblock/littleking-plus-pump" },
          { name: "Geeco Vale Pump", img: commercial_Geeco_Vale_Pump, link: "/industrial-pump/self-priming-monoblock/geeco-vale-pump" },
        ],
      },
    },
    "WASTE WATER PUMPS": {
      sizes: {
        "WASTE WATER PUMP": [
          { name: "Dewatering Pump", img: commercial_Dewatering_Pump, link: "/industrial-pump/waste-water-pump/dewatering-pump" },
          { name: "Sewage Pump", img: Pump_Image_Need, link: "/industrial-pump/waste-water-pump/sewage-pump" },
          { name: "Cutter Pump", img: Pump_Image_Need, link: "/industrial-pump/waste-water-pump/cutter-pump" },
        ],
      },
    },
    "HIGH PRESSURE PUMP": {
      sizes: {
        "HIGH PRESSURE PUMP": [
          { name: "Horizontal Multistage Pump", img: commercial_Pressure_Booster_Pump, link: "/industrial-pump/high-pressure-pumps/horizontal-multistage-pump" },
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
          { name: "SWIFT Panel", img: commercial_swift_Pump, link: "/industrial-pump/control-panels/single-phase-panels/swift-panel" },
          { name: "ELH Panel", img: commercial_ELH_Pump, link: "/industrial-pump/control-panels/single-phase-panels/elh-panel" },
          { name: "ELH Auto Panel", img: commercial_ELH_Pump, link: "/industrial-pump/control-panels/single-phase-panels/elh-auto-panel" },
          { name: "ELH Full Auto Panel", img: commercial_ELH_Pump, link: "/industrial-pump/control-panels/single-phase-panels/elh-full-auto-panel" },
        ],
        "THREE PHASE PANEL": [
          { name: "GNC Panel 1", img: commercial_GNC1_Pump, link: "/industrial-pump/control-panels/three-phase-panel/gnc-panel-1" },
          { name: "GNC Panel 2", img: commercial_GNC2_Pump, link: "/industrial-pump/control-panels/three-phase-panel/gnc-panel-2" },
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
