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
import { Domestic } from "./components/AllPumps/Domestic/Domestic";
import { DomV3SleekPump } from "./components/AllPumps/Domestic/Borewell_Pump/V3_Sleek_Model/Dom_V3_Sleek_Model_Pump";
import { DomV4LittleSubPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_LittleSub_Pump/Dom_V4_LittleSub_Pump";
import { DomesticV4FTSPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_FTS_Pump";
import { DomV4FlojetPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Flojet_Pump/Dom_V4_Flojet_Pump";
import { DomV4FloraPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Flora_Pump/Dom_V4_Flora_Pump";
import { DomV4SakthiPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Sakthi_Pump/Dom_V4_Sakthi_Pump";
import { DomV4TaurusPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Taurus_Pump/Dom_V4_Taurus_Pump";
import { DomesticSSHorizontalPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/SS_Horizontal_Openwell";
import { DomVividPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/Domestic_Vivid_Pump/Domestic_Vivid_Pump";
import { DomZipPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/Domestic_Zip_Pump/Domestic_Zip_Pump";
import { DomZowPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/Domestic_Zow_Pump/Domestic_Zow_Pump";
import { DomVerticalGSVPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Vertical_Openwell/SS_Vertical_GSV_Pump";
import { DomScmPump } from "./components/AllPumps/Domestic/Monoblock_Pump/Dom_SCM_Pump";
import { DomesticHeroPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Hero_Pump/Domestic_Hero_Pump";
import { DomesticHeroPlusPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Hero_Plus_Pump/Domestic_Hero_Plus_Pump";
import { DomesticSmartPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Smart_Pump/Domestic_Smart_Pump";
import { DomesticLittleKingPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_LittleKing_Pump/Domestic_LittleKing_Pump";
import { DomesticLittleKingPlusPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_LittleKing_Plus_Pump/Domestic_LittleKing_Plus_Pump";
import { DomesticGeecoValePump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Geeco_Vale_Pump/Domestic_Geeco_Vale_Pump";
import { DomesticGMS2Pump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMS2_Pump/Domestic_GMS2_Pump";
import { DomesticGMS2ProPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMS2_Pro_Pump/Domestic_GMS2_Pro_Pump";
import { DomesticGMS3Pump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMS3_Pump/Domestic_GMS3_Pump";
import { DomesticGMHSilverPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMH_Silver_Pump/Domestic_GMH_Silver_Pump";
import { DomesticJetKingPump } from "./components/AllPumps/Domestic/Jet_Pumps/Jet_King_Pump/Dom_Jet_King_Pump";
import { DomesticJetBMPump } from "./components/AllPumps/Domestic/Jet_Pumps/Jet_Pumps_BM/Dom_Jet_Pumps_BM";
import { DomesticPressureBoosterPump } from "./components/AllPumps/Domestic/High_Pressure_Pump/Horizontal_Multistage/Domestic_Pressure_Booster-Pump";
import { DomesticROPump } from "./components/AllPumps/Domestic/High_Pressure_Pump/Vertical_Multistage/Domestic_RO_Pump";
import { DomesticDewateringPump } from "./components/AllPumps/Domestic/Waste_Water_Pump/Domestic_Dewatering_Pump";
import { DomesticMCBPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_MCB_Panel/Domestic_MCB_Panel";
import { DomesticSWIFTPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_SWIFT_Panel/Domestic_SWIFT_Panel";
import { DomesticELHPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_ELH_Panel/Domestic_ELH_Panel";
import { DomesticELHAutoPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_ELH_Auto_Panel/Domestic_ELH_Auto_Panel";
import { DomesticELHFullAutoPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_ELH_Full_Auto_Panel/Domestic_ELH_Full_Auto_Panel";
import { DomesticGNCPanel } from "./components/AllPumps/Domestic/Control_Panels/Three_Phase_Panel/Domestic_Three_GNC_Panel";
import { Commercial } from "./components/AllPumps/Commercial/Commercial";
import { ComTuffBulletPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Tuff_Bullet_Pumps/Com_V4_Tuff_Bullet_Pumps";
import { ComV4TuffPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Tuff_Bullet_Pumps/Com_V4_Tuff_Pump/Com_V4_Tuff_Pump";
import { ComV4BulletPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Tuff_Bullet_Pumps/Com_V4_Bullet_Pump/Com_V4_Bullet_Pump";
import { ComV4SakthiPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Sakthi_Pump/Com_V4_Sakthi_Pump";
import { ComV6PremiumPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V6_Pump/Com_V6_Premium_Pump/Com_V6_Premium_Pump";
import { ComV6VincPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V6_Pump/Com_V6_Vinc_Pump/Com_V6_Vinc_Pump";
import { ComV6ActivePump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V6_Pump/Com_V6_Active_Pump/Com_V6_Active_Pump";




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

        {/* AGRICULTURE CATEGORY SECTION */}

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

        {/* DOMESTIC CATEGORY SECTION */}

        <Route path='/domestic-pump-categories' element={<Domestic/>}></Route>
        <Route path='/domestic-pump/borewell-v3-sleek-pump' element={<DomV3SleekPump/>}></Route>
        <Route path='/domestic-pump/v4-littlesub-pump' element={<DomV4LittleSubPump/>}></Route>
        <Route path='/domestic-pump/v4-flojet-flora-taurus-sakthi-pumps' element={<DomesticV4FTSPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-flojet-pump' element={<DomV4FlojetPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-flora-pump' element={<DomV4FloraPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-sakthi-pump' element={<DomV4SakthiPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-taurus-pump' element={<DomV4TaurusPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps' element={<DomesticSSHorizontalPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps/vivid-pump' element={<DomVividPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps/zip-pump' element={<DomZipPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps/zow-pump' element={<DomZowPump/>}></Route>
        <Route path='/domestic-pump/ss-vertical-gsv-openwell-pumps' element={<DomVerticalGSVPump/>}></Route>
        <Route path='/domestic-pump/centrifugal-monoblock-scm-pump' element={<DomScmPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/hero-pump' element={<DomesticHeroPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/hero-plus-pump' element={<DomesticHeroPlusPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/smart-pump' element={<DomesticSmartPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/littleking-pump' element={<DomesticLittleKingPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/littleking-plus-pump' element={<DomesticLittleKingPlusPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/geeco-vale-pump' element={<DomesticGeecoValePump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gms2-pump' element={<DomesticGMS2Pump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gms2-pro-pump' element={<DomesticGMS2ProPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gms3-pump' element={<DomesticGMS3Pump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gmh-silver-pump' element={<DomesticGMHSilverPump/>}></Route>
        <Route path='/domestic-pump/jet-pumps/shallow-well-jet-king-pump' element={<DomesticJetKingPump/>}></Route>
        <Route path='/domestic-pump/jet-pumps/jet-pump-bm' element={<DomesticJetBMPump/>}></Route>
        <Route path='/domestic-pump/high-pressure/horizontal-multistage/domestic-pressure-booster-pump' element={<DomesticPressureBoosterPump/>}></Route>
        <Route path='/domestic-pump/high-pressure/vertical-multistage/domestic-ro-pump' element={<DomesticROPump/>}></Route>
        <Route path='/domestic-pump/waste-water-pump/dewatering-pump' element={<DomesticDewateringPump/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/mcb-panel' element={<DomesticMCBPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/swift-panel' element={<DomesticSWIFTPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/elh-panel' element={<DomesticELHPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/elh-auto-panel' element={<DomesticELHAutoPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/elh-full-auto-panel' element={<DomesticELHFullAutoPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/three-phase-panel/gnc-panel-1' element={<DomesticGNCPanel/>}></Route>

      {/* DOMESTIC CATEGORY SECTION */}

        <Route path='/commercial-pump-categories' element={<Commercial/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps' element={<ComTuffBulletPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps/v4-tuff-pump' element={<ComV4TuffPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps/v4-bullet-pump' element={<ComV4BulletPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-sakthi-pump' element={<ComV4SakthiPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v6-premium-pump' element={<ComV6PremiumPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v6-vinc-pump' element={<ComV6VincPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v6-active-pump' element={<ComV6ActivePump/>}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
