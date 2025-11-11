import React from 'react'
import "./Ind_Vertical_Inline_Pump.css"
import Pump_Image_Need from "../../../../../assets/Agriculture/Pump image Needed.webp"
import { Link } from "react-router-dom";

export const IndVerticalInlinePump = () => {
  return (
    <div className='Ind_Vertical_Inline_Pump_Main_Conatiner'>
        <div className="Ind_Vertical_Inline_Pump_Banner_container">
            <div className="Ind_Vertical_Inline_Pump_Banner_image">
                <img src={Pump_Image_Need} alt="Ind_Vertical_Inline_Pump Banner" className="Ind_Vertical_Inline_Pump_images"/>
            </div>
            <div className="Ind_Vertical_Inline_Pump_Banner_Content">
                <h3>High Pressure Pumps</h3>
                <h2>Vertical Inline Pump</h2> 
                {/* <p>Mini Monoblocks</p> */}
            </div>
        </div>
        <div className="Ind_Vertical_Inline_Pump_Range_Container_one">
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
        <div className="Ind_Vertical_Inline_Pump_Range_Container_Two">
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
        <div className="Ind_Vertical_Inline_Pump_Descriptions">
            <div className="Ind_Vertical_Inline_Pump_text_conatiner">
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


                <div className="Ind_Vertical_Inline_Pump_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Ind_Vertical_Inline_Pump_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Ind_Vertical_Inline_Pump_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
                        <Link to="/industrial-pump/high-pressure-pumps/horizontal-multistage-pump" onClick={() => window.scrollTo(0, 0)}><p>1. Horizontal Multistage Pump</p></Link>
                        <Link to="/industrial-pump/high-pressure-pumps/vertical-multistage-pump" onClick={() => window.scrollTo(0, 0)}><p>2. Vertical Multistage Pump</p></Link>
                        <Link to="/industrial-pump/high-pressure-pumps/high-pressure-car-wash-pump" onClick={() => window.scrollTo(0, 0)}><p>3. High pressure Car wash pump</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}