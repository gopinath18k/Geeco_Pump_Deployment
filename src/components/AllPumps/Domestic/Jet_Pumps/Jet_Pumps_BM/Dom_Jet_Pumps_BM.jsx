import React from 'react'
import "./Dom_Jet_Pumps_BM.css"
import Domestic_Jet_Pump from "../../../../../assets/Domestic/Jet-Pumps.webp"
import { Link } from "react-router-dom";

export const DomesticJetBMPump = () => {
  return (
    <div className='Domestic_Jet_BM_Pump_Main_Conatiner'>
        <div className="Domestic_Jet_BM_Pump_Banner_container">
            <div className="Domestic_Jet_BM_Pump_Banner_image">
                <img src={Domestic_Jet_Pump} alt="Domestic_Jet_BM_Pump Banner" className="Domestic_Jet_BM_Pump_images"/>
            </div>
            <div className="Domestic_Jet_BM_Pump_Banner_Content">
                <h3>Jet Pumps</h3>
                <h2>Jet Pumps BM</h2> 
                {/* <p>Slowspeed Monoblock</p> */}
            </div>
        </div>
        <div className="Domestic_Jet_BM_Pump_Range_Container_one">
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>HP Range</p>
            </div>
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>HP Range</p>
            </div>
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>HP Range</p>
            </div>
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>HP Range</p>
            </div>
        </div>
        <div className="Domestic_Jet_BM_Pump_Range_Container_Two">
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>0.5 - 1 HP</p>
            </div>
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>0.5 - 1 HP</p>
            </div>
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>0.5 - 1 HP</p>
            </div>
            <div className="Pump_Range_container col-3">
                <p className='Pump_Range_Heading'>0.5 - 1 HP</p>
            </div>
        </div>
        <div className="Domestic_Jet_BM_Pump_Descriptions">
            <div className="Domestic_Jet_BM_Pump_text_conatiner">
                <p>A borewell submersible pump is a specialized water pump designed to operate while fully submerged in water. It is primarily used for extracting water from deep borewells, wells, or underground reservoirs where the water table is significantly below the surface. These pumps are efficient, compact, and built to withstand harsh conditions, often made of corrosion-resistant materials like stainless steel. They deliver high performance with minimal noise, making them ideal for residential, agricultural, and industrial applications.</p>
                <h3>Perfomance Features </h3>
                <p> ➤ Suitable for pumping water up to a head of 93 m<br></br>
                    ➤ Discharge capacity up to 3900 lpm<br></br>
                    ➤ Designed for wide voltage operation – 180 to 240 Volts for single phase, 350 to 440 Volts for three phase<br></br>
                    ➤ Shielded ball bearings that withstand temperatures up to 155 deg C<br></br>
                    ➤ Good suction lift characteristics
                </p>
                <h3>Key Purposes</h3>
                <p> ➤ Domestic Water Supply<br></br>
                    ➤ Agricultural Irrigation<br></br>
                    ➤ Industrial Water Supply<br></br>
                    ➤ Gardens and Mining
                </p>


                <div className="Domestic_Jet_BM_Pump_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Domestic_Jet_BM_Pump_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Domestic_Jet_BM_Pump_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
                        <Link to="/domestic-pump/jet-pumps/shallow-well-jet-king-pump" onClick={() => window.scrollTo(0, 0)}><p>1. Shallow Well Jet King Pump</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}