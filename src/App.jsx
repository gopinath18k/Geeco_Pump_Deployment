import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Allpumps } from "./components/AllPumps/Allpumps";
import { Contactus } from "./components/Contactus/Contactus";
import { Home } from "./components/Home/Home";
import PumpSelectionTool from "./components/PumpSelectionTool/PumpSelectionTool";
import { RegisterPump } from "./components/Registration/RegisterPump";
import { RegisteredPumps } from "./components/Registration/RegisteredPumps";
import { Agriculture } from "./components/AllPumps/Agriculture/Agriculture";
import { Navbar } from "./components/Home/Header/Navbar";
import Footer from "./components/Home/Footer/Footer";
import { BorewellV4Pumps } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V4_Pump";
import { V4TuffPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/V4_Tuff_Pump/V4_Tuff_Pump";
import { V4BulletPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/V4_Bullet_Pump/V4_Bullet_Pump";
import { V4EnvyPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V4_Envy_Pump/V4_Envy_Pump";
import { V6PremiumPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V6_Pump/Borewell_V6_Premium_Pump/V6_Premium_Pump";
import { V6VincPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V6_Pump/Borewell_V6_Vinc_Pump/V6_Vinc_Pump";
import { V6ActivePump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V6_Pump/Borewell_V6_Active_Pump/V6_Active_Pump";
import { AgricultureZOWOpenwellPump } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/ZOW_Pump/ZOW_Pump";
import { AgriSsMsOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/SS_MS_Openwell_Pump";
import { AgriSsOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/SS_Horizontal_Openwell_Pump/Agri_SS_Horizontal_Openwell_Pump";
import { AgriMsOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/MS_Horizontal_Openwell_Pump/Agri_MS_Horizontal_Openwell_Pump";
import { AgriDolpinBelugaOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Dolpin_Beluga_Openwell_Pump/Agri_Dolpin_Beluga_Openwell_Pump";
import { AgriDolpinOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Dolpin_Beluga_Openwell_Pump/Dolpin_Horizontal_Openwell_Pump/Agri_Dolpin_Openwell_Pump";
import { AgriBelugaOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Dolpin_Beluga_Openwell_Pump/Beluga_Horizontal_Openwell_Pump/Agri_Beluga_Horizontal_Openwell_Pump";
import { AgriJumboOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Jumbo_Openwell_Pump/Agri_Jumbo_Openwell_Pump";
import { AgriSsMsVerticalPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/Agri_SSMS_Vertical_Pump";
import { AgriSsOpenwellVerticalPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/SS_Vertical_Openwell_Pump/Agri_SS_Vertical_Openwell_Pump";
import { AgriMsOpenwellVerticalPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/MS_Vertical_Openwell_Pump/Agri_MS_Vertical_Openwell_Pump";
import { AgriJumboVerticalOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/Jumbo_Vertical_Openwell_Pump/Agri_Jumbo_Vertical_Openwell_Pump";
import { AgriSSMSAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_SSMS_Amphibian_Pump";
import { AgriSSAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_SS_Amphibian_Pump/Agri_SS_Amphibian_Pump";
import { AgriMSAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_MS_Amphibian_Pump/Agri_MS_Amphibian_Pump";
import { AgriJumboAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_Jumbo_Amphibian_Pump/Agri_Jumbo_Amphibian_Pump";
import { AgriMiniMonoblockPumps } from "./components/AllPumps/Agriculture/Self_Priming_Monoblock_Pump/Agri_Mini_Monoblocks_Pump/Agri_Mini_Monoblocks_Pump";
import { AgriGMSPumps } from "./components/AllPumps/Agriculture/Self_Priming_Monoblock_Pump/Agri_GMS_Pump/Agri_GMS_Pump";
import { AgriGMHPumps } from "./components/AllPumps/Agriculture/Self_Priming_Monoblock_Pump/Agri_GHM_Pump/Agri_GMH_Pump";
import { AgriHighPressureMultistagePumps } from "./components/AllPumps/Agriculture/High_Pressure_Pump/Agri_High_Pressure_Multistage_Pump";
import { AgriMonoCompressorPumps } from "./components/AllPumps/Agriculture/Compressor_Pump/Mono_Compressor_Pump/Agri_Mono_Compressor_Pump";
import { AgriDoubleCylinderCompressorPumps } from "./components/AllPumps/Agriculture/Compressor_Pump/Belt_Compressor_Pump/Double_Compressor_Pump/Agri_Double_Compressor_Pump";
import { AgriSingleCylinderCompressorPumps } from "./components/AllPumps/Agriculture/Compressor_Pump/Belt_Compressor_Pump/Single_Compressor_Pump/Agri_Single_Compressor_Pump";
import { AgriSinglePhaseELH } from "./components/AllPumps/Agriculture/Control_Panel/Agri_Single_Phase_Panel/Agri_Single_Phase_ELH_Panel";
import { AgriThreePhaseGNCOne } from "./components/AllPumps/Agriculture/Control_Panel/Agri_Three_Phase_Panel/Agri_Three_Phase_GNC_Panel_One/Agri_Three_Phase_GNC_Panel_One";
import { AgriThreePhaseGNCTwo } from "./components/AllPumps/Agriculture/Control_Panel/Agri_Three_Phase_Panel/Agri_Three_Phase_GNC_Panel_Two/Agri_Three_Phase_GNC_Panel_Two";




function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact-us' element={<Contactus/>}></Route>
        <Route path='/all-pumps-categories' element={<Allpumps/>}></Route>
        <Route path='/pump-selection-tool' element={<PumpSelectionTool/>}></Route>
        <Route path='/warranty-registration' element={<RegisterPump/>}></Route>
        <Route path='/registered-pumps' element={<RegisteredPumps/>}></Route>
        <Route path='/agriculture-pump-categories' element={<Agriculture/>}></Route>
        <Route path='/agriculture-pump/borewell-v4-pumps' element={<BorewellV4Pumps/>}></Route>
        <Route path='/agriculture-pump/borewell-v4-pumps/v4-tuff-pump' element={<V4TuffPump/>}></Route>
        <Route path='/agriculture-pump/borewell-v4-pumps/v4-bullet-pump' element={<V4BulletPump/>}></Route>
        <Route path='/agriculture-pump/V4-Envy-Pump' element={<V4EnvyPump/>}></Route>
        <Route path='/agriculture-pump/V6-Premium-Pump' element={<V6PremiumPump/>}></Route>
        <Route path='/agriculture-pump/V6-Vinc-Pump' element={<V6VincPump/>}></Route>
        <Route path='/agriculture-pump/V6-Active-Pump' element={<V6ActivePump/>}></Route>
        <Route path='/agriculture-pump/Agriculture-ZOW-Horizontal-Openwell-Pump' element={<AgricultureZOWOpenwellPump/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Horizontal-Openwell-Pump' element={<AgriSsMsOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Horizontal-Openwell-Pump/SS-Horizontal-Openwell-Pump' element={<AgriSsOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Horizontal-Openwell-Pump/MS-Horizontal-Openwell-Pump' element={<AgriMsOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Dolphin&Beluga-Horizontal-Openwell-Pump' element={<AgriDolpinBelugaOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Dolphin&Beluga-Horizontal-Openwell-Pump/Agriculture-Dolphin-Horizontal-Openwell-Pump' element={<AgriDolpinOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Dolphin&Beluga-Horizontal-Openwell-Pump/Agriculture-Beluga-Horizontal-Openwell-Pump' element={<AgriBelugaOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Jumbo-Horizontal-Openwell-Pump' element={<AgriJumboOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Vertical-Openwell-Pump' element={<AgriSsMsVerticalPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Vertical-Openwell-Pump/Agriculture-SS-Vertical-Openwell-Pump' element={<AgriSsOpenwellVerticalPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Vertical-Openwell-Pump/Agriculture-MS-Vertical-Openwell-Pump' element={<AgriMsOpenwellVerticalPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Jumbo-Vertical-Openwell-Pump' element={<AgriJumboVerticalOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Amphibian-Pump' element={<AgriSSMSAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Amphibian-Pump/Agriculture-SS-Amphibian-Pump' element={<AgriSSAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-SS&MS-Amphibian-Pump/Agriculture-MS-Amphibian-Pump' element={<AgriMSAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Jumbo-Horizontal-Amphibian-Pump' element={<AgriJumboAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Self-Priming-Monoblock-Mini-Monoblocks-Pump' element={<AgriMiniMonoblockPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Self-Priming-Monoblock-GMS-Pump' element={<AgriGMSPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Self-Priming-Monoblock-GMH-Pump' element={<AgriGMHPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-High-Pressure-Vertical-Multistage-Pump' element={<AgriHighPressureMultistagePumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Mono-Compressor-Pump' element={<AgriMonoCompressorPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Double-Cylinder-Compressor-Pump' element={<AgriDoubleCylinderCompressorPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Single-Cylinder-Compressor-Pump' element={<AgriSingleCylinderCompressorPumps/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Single-Phase-ELH' element={<AgriSinglePhaseELH/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Three-Phase-GNC-Panel-One' element={<AgriThreePhaseGNCOne/>}></Route>
        <Route path='/agriculture-pump/Agriculture-Three-Phase-GNC-Panel-Two' element={<AgriThreePhaseGNCTwo/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
