
import React from 'react'
import "./Agri_SSMS_Vertical_Pump.css" 
import Openwell_SS_MS_Pump from "../../../../../../assets/Agriculture/SS_MS-Vertical-Pump.webp"
import GeecoLogo from "../../../../../../assets/Geeco Logo.webp"
import { Link } from "react-router-dom";

export const AgriSsMsVerticalPumps = () => {
  return (
    <div className='Agri_Openwell_Vertical_SsMs_Pump_Main_Conatiner'>
        <div className="Agri_Openwell_Vertical_SsMs_Pump_Banner_container">
            <div className="Agri_Openwell_Vertical_SsMs_Pump_Banner_image">
                <img src={Openwell_SS_MS_Pump} alt="Agri_Openwell_Vertical_SsMs_Pump Banner" className="Agri_Openwell_Vertical_SsMs_Pump_images"/>
            </div>
            <div className="Agri_Openwell_Vertical_SsMs_Pump_Banner_Content">
                <h3>Openwell Submersible Pumps</h3>
                <h2>SS & MS Openwell Pumps</h2> 
                <p>Vertical Openwell</p>
            </div>
        </div>
        <div className="Agri_Openwell_Vertical_SsMs_Pump_Range_Container_one">
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
        <div className="Agri_Openwell_Vertical_SsMs_Pump_Range_Container_Two">
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
        <div className="Agri_Openwell_Vertical_SsMs_Pump_Descriptions">
            <div className="Agri_Openwell_Vertical_SsMs_Pump_text_conatiner">
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
                <h3>SS & MS Vertical Openwell Pumps</h3>

                <div className="Agri_Openwell_Vertical_SsMs_Pump_Category_Container">
                    <Link to="/agriculture-pump/agriculture-ss&ms-vertical-openwell-pump/agriculture-ss-vertical-openwell-pump" className="Agri_Openwell_Vertical_SsMs_Pump_Inner_Container col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3" onClick={() => window.scrollTo(0, 0)}>
                         
                            <img src={Openwell_SS_MS_Pump} alt="Agri_Openwell_Vertical_SsMs_Pump Model One" className='Agri_Openwell_Vertical_SsMs_Pump_Model_Image'/>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Model_Content">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border">
                                    <p>SS Vertical Pump</p>
                                    <img src={GeecoLogo} alt="GeecoLogo" className='GeecoLogo_image'/>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_One">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Motor power</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>3hp to 20hp</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_two">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Speed</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>2900 RPM</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_three">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Power source</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>415 Volts</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_two">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Maximum outer dia</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_four">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Type of duty</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_five">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Winding type</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_six">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Pump Type</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_seven">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Maximum Head</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_seven">
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                        <p>Maximum Discharge</p>
                                    </div>
                                    <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                        <p>142mm</p>
                                    </div>
                                </div>
                                
                            </div>
                        
                    </Link>
                    <Link to="/agriculture-pump/agriculture-ss&ms-vertical-openwell-pump/agriculture-ms-vertical-openwell-pump" className="Agri_Openwell_Vertical_SsMs_Pump_Inner_Container col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3" onClick={() => window.scrollTo(0, 0)}>
                        <img src={Openwell_SS_MS_Pump} alt="Agri_Openwell_Vertical_SsMs_Pump Model One" className='Agri_Openwell_Vertical_SsMs_Pump_Model_Image'/>
                        <div className="Agri_Openwell_Vertical_SsMs_Pump_Model_Content">
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border">
                                <p>MS Vertical Pumps</p>
                                <img src={GeecoLogo} alt="GeecoLogo" className='GeecoLogo_image'/>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_One">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Motor power</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>3hp to 20hp</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_two">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Speed</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>2900 RPM</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_three">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Power source</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>415 Volts</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_two">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Maximum outer dia</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_four">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Type of duty</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_five">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Winding type</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_six">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Pump Type</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_seven">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Maximum Head</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            <div className="Agri_Openwell_Vertical_SsMs_Pump_Title_container Agri_Openwell_Vertical_SsMs_Pump_border_seven">
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_content col-6">
                                    <p>Maximum Discharge</p>
                                </div>
                                <div className="Agri_Openwell_Vertical_SsMs_Pump_Inner_contents col-6">
                                    <p>142mm</p>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    
                </div>


                <div className="Agri_Openwell_Vertical_SsMs_Pump_Form_section">
                    <div className="Pump_Form_Section col-12 col-md-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="Pump_Form_Contact">
                            <h3>Contact Us For More Queries</h3>
                            <form action="" className='Agri_Openwell_Vertical_SsMs_Pump_Contact_Form'>
                                <input type="text" id="name" placeholder="Name" />

                                <input type="number" id="number" placeholder="Number" />

                                <input type="text" id="message" placeholder="Message" />

                                <button className='Agri_Openwell_Vertical_SsMs_Pump_Submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="Related_Pump_Section col-12 col-md-6  col-md-6 col-lg-6 col-xl-6">
                        <h4>Related Pumps</h4>
           
                        <Link to="/agriculture-pump/agriculture-jumbo-vertical-openwell-pump" onClick={() => window.scrollTo(0, 0)}><p>1.Jumbo Vertical Openwell Pump</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}