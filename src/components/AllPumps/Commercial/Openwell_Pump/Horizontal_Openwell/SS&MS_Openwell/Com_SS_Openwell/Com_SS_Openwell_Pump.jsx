import React from 'react'
import "./Com_SS_Openwell_Pump.css"
import Commercial_SS_OpenWell_Pump from "../../../../../../../assets/Agriculture/SS_MS_OpenWell_Pump.webp"
import { Link } from "react-router-dom";

export const ComSSOpenwellPump = () => {
  return (
    <div className='Com_SS_Horizontal_Pump_Main_Conatiner'>
        <div className="Com_SS_Horizontal_Pump_Banner_container">
            <div className="Com_SS_Horizontal_Pump_Banner_image">
                <img src={Commercial_SS_OpenWell_Pump} alt="Com_SS_Horizontal_Pump Banner" className="Com_SS_Horizontal_Pump_images"/>
            </div>
            <div className="Com_SS_Horizontal_Pump_Banner_Content">
                <h3>SS MS Openwell Submersible Pumps</h3>
                <h2>SS Openwell Pumps</h2> 
                <p>Horizontal Openwell</p>
            </div>
        </div>
        <div className="Com_SS_Horizontal_Pump_Range_Container_one">
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
        <div className="Com_SS_Horizontal_Pump_Range_Container_Two">
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
        <div className="Com_SS_Horizontal_Pump_Descriptions">
            <div className="Com_SS_Horizontal_Pump_text_conatiner">
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


                <div className="Com_SS_Horizontal_Pump_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Com_SS_Horizontal_Pump_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Com_SS_Horizontal_Pump_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
                        <Link to="/commercial-pump/ss-ms-horizontal-openwell-pumps/ms-openwell-pump" onClick={() => window.scrollTo(0, 0)}><p>1. MS Openwell Pumps</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}