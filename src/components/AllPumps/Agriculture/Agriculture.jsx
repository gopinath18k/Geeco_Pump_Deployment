import React, { useState } from "react";
import "./Agriculture.css"; 
import Sub_V4_Tuff_Bullet from "../../../assets/Agriculture/Sub-V4-pump.webp"
import V4_Envy_Pump from "../../../assets/Agriculture/V4-Envy-Pump.webp"
import V6_Premium_Pump from "../../../assets/Agriculture/V6-Premium-Pump.webp"
import Agri_ZOW_Pump from "../../../assets/Agriculture/ZOW-Pump.webp"
import Agri_SSMS_Openwell_Pump from "../../../assets/Agriculture/SS&MS-OpenWell-Pump.webp"
import Agri_DolphinBeluga_Pump from "../../../assets/Agriculture/Dolphin&Beluga-Pump.webp"
import Agri_SSMS_Vertical_Pump from "../../../assets/Agriculture/SS_MS-Vertical-Pump.webp"
import Agri_Jumbo_Vertical_Pump from "../../../assets/Agriculture/Jumbo-Vertical-Pump.webp"
import Agri_Jumbo_Horizontal_Pump from "../../../assets/Agriculture/Jumbo-Pump.webp"
import Pump_Image_Need from "../../../assets/Agriculture/Pump image Needed.webp"
import Agri_GHM_Pump from "../../../assets/Agriculture/GHM-Pump.webp"
import Agri_GMS_Pump from "../../../assets/Agriculture/GMS-Pump.webp"
import Agri_Mono_Compressor_Pump from "../../../assets/Agriculture/Mono-Compressor.webp"
import Agri_Single_Cylinder_Compressor_Pump from "../../../assets/Agriculture/Single-Cylinder-Compressor.webp"
import Agri_Double_Cylinder_Compressor_Pump from "../../../assets/Agriculture/Double-Cylinder-Compressor.webp"
import Agri_Single_Phase_ELH from "../../../assets/Agriculture/Single-Phase-ELH.webp"
import Agri_Three_Phase_GNC_One from "../../../assets/Agriculture/Three-Phase-GNC-1.webp"
import Agri_Three_Phase_GNC_Two from "../../../assets/Agriculture/Three-Phase-GNC-2.webp"
import AgricultureBanner from "../../../assets/Agrimage.webp"
import { Link } from "react-router-dom";

export const Agriculture = () => {

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
            "4' (100MM)": [
              { name: "V4 Tuff,Bullet Pumps", img: Sub_V4_Tuff_Bullet, link: "/agriculture-pump/borewell-v4-pumps" },
              { name: "V4 Envy Pump", img: V4_Envy_Pump, link: "/agriculture-pump/v4-envy-pump" }
            ],
            "6' (150MM)": [
              { name: "V6 Premium Pump", img: V6_Premium_Pump, link: "/agriculture-pump/v6-premium-pump" },
              { name: "V6 Vinc Pump", img: V6_Premium_Pump, link: "/agriculture-pump/v6-vinc-pump" },
              { name: "V6 Active Pump", img: V6_Premium_Pump, link: "/agriculture-pump/v6-active-pump" },
            ],
          },
        },
        "OPENWELL SUBMERSIBLE PUMPS": {
          sizes: {
            "HORIZONTAL OPENWELL": [
              { name: "ZOW Openwell Pump", img: Agri_ZOW_Pump, link: "/agriculture-pump/agriculture-zow-horizontal-openwell-pump" },
              { name: "SS & MS Openwell Pumps", img: Agri_SSMS_Openwell_Pump, link: "/agriculture-pump/agriculture-ss&ms-horizontal-openwell-pump" },
              { name: "Dolphin & Beluga Openwell Pumps", img: Agri_DolphinBeluga_Pump, link: "/agriculture-pump/agriculture-dolphin&beluga-horizontal-openwell-pump" },
              { name: "Jumbo Horizontal Openwell Pump", img: Agri_Jumbo_Horizontal_Pump, link: "/agriculture-pump/agriculture-jumbo-horizontal-openwell-pump" },
              
            ],
            "VERTICAL OPENWELL": [
              { name: "SS & MS Vertical Openwell Pumps", img: Agri_SSMS_Vertical_Pump, link: "/agriculture-pump/agriculture-ss&ms-vertical-openwell-pump" },
              { name: "Jumbo Vertical Openwell Pump", img: Agri_Jumbo_Vertical_Pump, link: "/agriculture-pump/agriculture-jumbo-vertical-openwell-pump" },
            ],
          },
        },
        "AMPHIBIEN PUMPS": {
          sizes: {
            "HORIZONTAL AMPHIBIEN PUMPS": [
              { name: "SS & MS Amphibian Pumps", img: Pump_Image_Need, link: "/agriculture-pump/agriculture-ss&ms-amphibian-pump" },
              { name: "Jumbo Horizontal Amphibian Pump", img: Pump_Image_Need, link: "/agriculture-pump/agriculture-jumbo-horizontal-amphibian-pump" },
            ],
            
          },
        },
        "SELF PRIMING MONO BLOCK PUMPS": {
          sizes: {
            "SELF PRIMING MONOBLOCK PUMPS": [
              { name: "Mini Monoblocks Pump", img: Pump_Image_Need, link: "/agriculture-pump/agriculture-self-priming-monoblock-mini-monoblocks-pump" },
              { name: "GMH Pump", img: Agri_GHM_Pump, link: "/agriculture-pump/agriculture-self-priming-monoblock-gmh-pump" },
              { name: "GMS Pump", img: Agri_GMS_Pump, link: "/agriculture-pump/agriculture-self-priming-monoblock-gms-pump" },
            ],
            
          },
        },
        "HIGH PRESSURE PUMP": {
          sizes: {
            "HIGH PRESSURE PUMP": [
              { name: "Vertical Multistage Pump", img: Pump_Image_Need, link: "/agriculture-pump/agriculture-high-pressure-vertical-multistage-pump" },
            ],
            
          },
        },
        "COMPRESSOR PUMPS": {
          sizes: {
            "MONO COMPRESSOR PUMPS": [
              { name: "Mono Compressor", img: Agri_Mono_Compressor_Pump, link: "/agriculture-pump/agriculture-mono-compressor-pump" },
            ],
            "BELT COMPRESSOR PUMPS": [
              { name: "Single Cylinder Compressor Pump", img: Agri_Single_Cylinder_Compressor_Pump, link: "/agriculture-pump/agriculture-single-cylinder-compressor-pump" },
              { name: "Double Cylinder Compressor Pump", img: Agri_Double_Cylinder_Compressor_Pump, link: "/agriculture-pump/agriculture-double-cylinder-compressor-pump" },
            ],
            
          },
        },
        "CONTROL PANELS": {
          sizes: {
            "SINGLE PHASE PANEL": [
              { name: "ELH Panel", img: Agri_Single_Phase_ELH, link: "/agriculture-pump/agriculture-single-phase-elh" },
            ],
            "THREE PHASE PANEL": [
              { name: "GNC Control Panel 1", img: Agri_Three_Phase_GNC_One, link: "/agriculture-pump/agriculture-three-phase-gnc-panel-one" },
              { name: "GNC Control Panel 2", img: Agri_Three_Phase_GNC_Two, link: "/agriculture-pump/agriculture-three-phase-gnc-panel-two" },
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
    <div className="pumps-container">
      <div className="Agriculutre_Banner_container">
        <div className="Agriculte_Banner_Content">
          <p>Pumps We Serve</p>
         <h2>Agriculture Pumps</h2>
        </div>
        <div className="Agriculture_Banner_image">
          <img src={AgricultureBanner} alt="Agriculture Banner" className="Agriculture_images"/>
        </div>
      </div>

      <div className="pumps-content">
        <h2 className="agriculture_main_heading">Find Your Pumps</h2>
      </div>
      
      <div className="pumps-content">
        {/* Categories */}
        <div className="categories">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`category-item ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Pump Details */}
        <div className="pump-details">
          {selectedCategory && pumpData[selectedCategory] && (
            <>
              {/* Size Tabs */}
              <div className="size-tabs">
                {Object.keys(pumpData[selectedCategory].sizes).map(
                  (size, idx) => (
                    <div
                      key={idx}
                      className={`size-tab ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  )
                )}
              </div>

              
              {/* Pump Images */}
              <div className="pump-images">
                {selectedSize &&
                  pumpData[selectedCategory].sizes[selectedSize].map((pump, idx) => (
                    <Link to={pump.link || "#"} key={idx} className="pump-card-link" onClick={() => window.scrollTo(0, 0)}>
                      <div className="pump-card">
                        <img src={pump.img} alt={pump.name} />
                        <div className="pump_content_conatiner">
                          <p className="pump_name">{pump.name}</p>
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

