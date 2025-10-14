import React from 'react'
import "./V4_Tuff_Pump.css"
import Borewell_V4_Pump_Tuff from "../../../../../assets/Agriculture/Sub-V4-pump.webp" 
import { Link } from "react-router-dom";

export const V4TuffPump = () => {
  return (
    <div className='Tuff_V4_Pump_Main_Conatiner'>
        <div className="Tuff_V4_Pump_Banner_container">
            <div className="Tuff_V4_Pump_Banner_image">
                <img src={Borewell_V4_Pump_Tuff} alt="Tuff_V4_Pump Banner" className="Tuff_V4_Pump_images"/>
            </div>
            <div className="Tuff_V4_Pump_Banner_Content">
                <h3>Borewell Submersible Pumps</h3>
                <h2>V4 Tuff Pump</h2> 
                <p>4" (100MM)</p>
            </div>
        </div>
        <div className="Tuff_V4_Pump_Range_Container_one">
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
        <div className="Tuff_V4_Pump_Range_Container_Two">
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
        <div className="Tuff_V4_Pump_Descriptions">
            <div className="Tuff_V4_Pump_text_conatiner">
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


                <div className="Tuff_V4_Pump_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Tuff_V4_Pump_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Tuff_V4_Pump_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
                        <Link to="/agriculture-pump/borewell_v4_pumps/v4_bullet_pump" onClick={() => window.scrollTo(0, 0)}><p>1.4" Bullet (100mm) Pumps</p></Link>
                        <Link to="" onClick={() => window.scrollTo(0, 0)}><p>2.6’ (150mm) Pumps</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}