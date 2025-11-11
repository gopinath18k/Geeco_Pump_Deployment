import React from 'react'
import "./Com_SS_MS_Openwell_Pump.css" 
import SS_OpenWell_Pump from "../../../../../../assets/Agriculture/SS_MS_OpenWell_Pump.webp"
import GeecoLogo from "../../../../../../assets/Geeco Logo.webp"
import { Link } from "react-router-dom";

export const ComSSMSHorizontalPump = () => {
  return (
    <div className='Com_SSMS_Horizontal_Pump_Main_Conatiner'>
        <div className="Com_SSMS_Horizontal_Pump_Banner_container">
            <div className="Com_SSMS_Horizontal_Pump_Banner_image">
                <img src={SS_OpenWell_Pump} alt="Com_SSMS_Horizontal_Pump Banner" className="Com_SSMS_Horizontal_Pump_images"/>
            </div>
            <div className="Com_SSMS_Horizontal_Pump_Banner_Content">
                <h3>Openwell Submersible Pumps</h3>
                <h2>SS & MS Openwell Pumps</h2> 
                <p>Horizontal Openwell</p>
            </div>
        </div>
        <div className="Com_SSMS_Horizontal_Pump_Range_Container_one">
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
        <div className="Com_SSMS_Horizontal_Pump_Range_Container_Two">
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
        <div className="Com_SSMS_Horizontal_Pump_Descriptions">
            <div className="Com_SSMS_Horizontal_Pump_text_conatiner">
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
                <h3>SS MS Horizontal Openwell Pumps</h3>

                <div className="Com_SSMS_Horizontal_Pump_Category_Container">
                    <Link to="/commercial-pump/ss-ms-horizontal-openwell-pumps/ss-openwell-pump" className="Com_SSMS_Horizontal_Pump_Inner_Container col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3" onClick={() => window.scrollTo(0, 0)}>
                         
                            <img src={SS_OpenWell_Pump} alt="Com_SSMS_Horizontal_Pump Model One" className='Com_SSMS_Horizontal_Pump_Model_Image'/>
                            <div className="Com_SSMS_Horizontal_Pump_Model_Content">
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border">
                                    <p>SS Openwell Pump</p>
                                    <img src={GeecoLogo} alt="GeecoLogo" className='GeecoLogo_image'/>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_One">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Motor power</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>3hp to 20hp</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_two">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Speed</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>2900 RPM</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_three">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Power source</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>415 Volts</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_two">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Maximum outer dia</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_four">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Type of duty</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_five">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Winding type</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_six">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Pump Type</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_seven">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Maximum Head</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_seven">
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                        <p>Maximum Discharge</p>
                                    </div>
                                    <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                
                            </div>
                        
                    </Link>
                    <Link to="/commercial-pump/ss-ms-horizontal-openwell-pumps/ss-openwell-pump" className="Com_SSMS_Horizontal_Pump_Inner_Container col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3" onClick={() => window.scrollTo(0, 0)}>
                        <img src={SS_OpenWell_Pump} alt="Com_SSMS_Horizontal_Pump Model One" className='Com_SSMS_Horizontal_Pump_Model_Image'/>
                        <div className="Com_SSMS_Horizontal_Pump_Model_Content">
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border">
                                <p>MS Openwell Pump</p>
                                <img src={GeecoLogo} alt="GeecoLogo" className='GeecoLogo_image'/>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_One">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Motor power</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>3hp to 20hp</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_two">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Speed</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>2900 RPM</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_three">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Power source</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>415 Volts</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_two">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Maximum outer dia</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_four">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Type of duty</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_five">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Winding type</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_six">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Pump Type</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_seven">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Maximum Head</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Com_SSMS_Horizontal_Pump_Title_container Com_SSMS_Horizontal_Pump_border_seven">
                                <div className="Com_SSMS_Horizontal_Pump_Inner_content col-6">
                                    <p>Maximum Discharge</p>
                                </div>
                                <div className="Com_SSMS_Horizontal_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                   
                   
                </div>


                <div className="Com_SSMS_Horizontal_Pump_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Com_SSMS_Horizontal_Pump_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Com_SSMS_Horizontal_Pump_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
                        <Link to="/commercial-pump/jumbo-horizontal-openwell-pump" onClick={() => window.scrollTo(0, 0)}><p>1.Jumbo Horizontal Openwell Pumps</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}