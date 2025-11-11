import React from 'react'
import "./Com_ELH_Full_Auto_Panel.css"
import Com_ELH_Pump from "../../../../../../assets/Agriculture/Single-Phase-ELH.webp"
import { Link } from "react-router-dom";

export const ComELHFullAutoPanel = () => {
  return (
    <div className='Commercial_ELH_Full_Auto_Panel_Main_Conatiner'>
        <div className="Commercial_ELH_Full_Auto_Panel_Banner_container">
            <div className="Commercial_ELH_Full_Auto_Panel_Banner_image">
                <img src={Com_ELH_Pump} alt="Commercial_ELH_Full_Auto_Panel Banner" className="Commercial_ELH_Full_Auto_Panel_images"/>
            </div>
            <div className="Commercial_ELH_Full_Auto_Panel_Banner_Content">
                <h3>Control Panels</h3>
                <h2>ELH Full Auto Panel</h2> 
                <p>Single Phase Panel</p>
            </div>
        </div>
        <div className="Commercial_ELH_Full_Auto_Panel_Range_Container_one">
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
        <div className="Commercial_ELH_Full_Auto_Panel_Range_Container_Two">
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
        <div className="Commercial_ELH_Full_Auto_Panel_Descriptions">
            <div className="Commercial_ELH_Full_Auto_Panel_text_conatiner">
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


                <div className="Commercial_ELH_Full_Auto_Panel_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Commercial_ELH_Full_Auto_Panel_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Commercial_ELH_Full_Auto_Panel_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
                        <Link to="/commercial-pump/control-panels/single-phase-panels/mcb-panel" onClick={() => window.scrollTo(0, 0)}><p>1. MCB Panel</p></Link>
                        <Link to="/commercial-pump/control-panels/single-phase-panels/swift-panel" onClick={() => window.scrollTo(0, 0)}><p>2. SWIFT Panel</p></Link>
                        <Link to="/commercial-pump/control-panels/single-phase-panels/elh-panel" onClick={() => window.scrollTo(0, 0)}><p>3. ELH Panel</p></Link>
                        <Link to="/commercial-pump/control-panels/single-phase-panels/elh-auto-panel" onClick={() => window.scrollTo(0, 0)}><p>4. ELH Auto Panel</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}