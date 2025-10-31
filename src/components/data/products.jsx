import Pump from "../../assets/Agriculture/Sub-V4-pump.webp"


export const pumps = [


  // ----DOMESTIC PUMP PRODUCTS -----------//
  // Sump/Tank -> Surface Pumps
  {
    id: 'DOM_ST_S_001',
    name: 'Taro AquaFlow 100',
    application: 'domestic',
    waterSource: 'sumpTank',
    installLocation: 'surface_sumpTank',
    headMin: 5, headMax: 20, // meters
    dischargeMin: 50, dischargeMax: 150, // LPM
    deliverySize: ['1inch', '1.5inch'],
    imageUrl: Pump,
    description: 'Compact surface pump for domestic water tanks and garden use.',
  },
  {
    id: 'DOM_ST_S_002',
    name: 'Taro HydroJet 250',
    application: 'domestic',
    waterSource: 'sumpTank',
    installLocation: 'surface_sumpTank',
    headMin: 10, headMax: 30,
    dischargeMin: 100, dischargeMax: 250,
    deliverySize: ['1.5inch', '2inch'],
    imageUrl: Pump,
    description: 'Powerful jet pump for higher head and discharge requirements in domestic settings.',
  },
  // Sump/Tank -> Submerged Pumps
  {
    id: 'DOM_ST_SUB_001',
    name: 'Taro Submersible Mini 10',
    application: 'domestic',
    waterSource: 'sumpTank',
    installLocation: 'submerged_sumpTank',
    headMin: 1, headMax: 15,
    dischargeMin: 20, dischargeMax: 100,
    deliverySize: ['1inch_sub'],
    imageUrl: Pump,
    description: 'Small, efficient submersible pump for clean water sumps and tanks.',
  },
  {
    id: 'DOM_ST_SUB_002',
    name: 'Taro Submersible Power 50',
    application: 'domestic',
    waterSource: 'sumpTank',
    installLocation: 'submerged_sumpTank',
    headMin: 5, headMax: 35,
    dischargeMin: 50, dischargeMax: 300,
    deliverySize: ['1.5inch_sub', '2inch_sub'],
    imageUrl: Pump,
    description: 'Robust submersible pump for demanding domestic applications.',
  },
  // Openwell -> Surface Pumps
  {
    id: 'DOM_OW_S_001',
    name: 'Taro Openwell 1HP',
    application: 'domestic',
    waterSource: 'openwell',
    installLocation: 'surface_openwell',
    headMin: 5, headMax: 25,
    dischargeMin: 80, dischargeMax: 200,
    deliverySize: ['1.5inch_op_s', '2inch_op_s'],
    imageUrl: Pump,
    description: 'Reliable pump for drawing water from open wells for domestic use.',
  },
  {
    id: 'DOM_OW_S_002',
    name: 'Taro Openwell HeavyDuty 2HP',
    application: 'domestic',
    waterSource: 'openwell',
    installLocation: 'surface_openwell',
    headMin: 10, headMax: 40,
    dischargeMin: 150, dischargeMax: 350,
    deliverySize: ['2inch_op_s', '2.5inch_op_s'],
    imageUrl: Pump,
    description: 'High-performance pump for larger open wells and higher water demands.',
  },
  // Openwell -> Submerged Pumps
  {
    id: 'DOM_OW_SUB_001',
    name: 'Taro Openwell Submersible Light',
    application: 'domestic',
    waterSource: 'openwell',
    installLocation: 'submerged_openwell',
    headMin: 3, headMax: 20,
    dischargeMin: 60, dischargeMax: 180,
    deliverySize: ['1.5inch_op_sub','1inch_op_sub'],
    imageUrl: Pump,
    description: 'Compact submersible pump designed for openwell applications.',
  },

  // Borewell -> Surface Pumps
  {
    id: 'DOM_BW_S_001',
    name: 'Taro BoreMaster 1 Phase Surface',
    application: 'domestic',
    waterSource: 'borewell',
    installLocation: 'surface_borewell',
    phase: '1phase_bw_sur',
    depthMin: 10, depthMax: 50,
    headMin: 20, headMax: 60,
    lpmMin: 50, lpmMax: 200,
    imageUrl: Pump,
    description: 'Single phase surface borewell pump for moderate depths.',
  },
  {
    id: 'DOM_BW_S_002',
    name: 'Taro BoreMaster 3 Phase Surface',
    application: 'domestic',
    waterSource: 'borewell',
    installLocation: 'surface_borewell',
    phase: '3phase_bw_sur', 
    depthMin: 20, depthMax: 100,
    headMin: 40, headMax: 120,
    lpmMin: 100, lpmMax: 350,
    imageUrl: Pump,
    description: 'Three phase surface borewell pump for deeper borewells and higher flow.',
  },
  // Borewell -> Submersible Pumps
  {
    id: 'DOM_BW_SUB_001',
    name: 'Taro Submersible Bore 4" 1 Phase',
    application: 'domestic',
    waterSource: 'borewell',
    installLocation: 'Submersible_Borewell',
    borewellSize: '4inch_b_sub',
    phase: '1phase_b_sub',
    totalHeadMin: 30, totalHeadMax: 100, 
    lpmMin: 40, lpmMax: 150,
    imageUrl: Pump,
    description: '4-inch 1 Phase submersible pump for domestic borewell applications.',
  },
  {
    id: 'DOM_BW_SUB_002',
    name: 'Taro Submersible Bore 6" 3 Phase',
    application: 'domestic',
    waterSource: 'borewell',
    installLocation: 'Submersible_Borewell',
    borewellSize: '6inch_b_sub',
    phase: '3phase_b_sub',
    totalHeadMin: 50, totalHeadMax: 250,
    lpmMin: 80, lpmMax: 400,
    imageUrl: Pump,
    description: 'High-power 6-inch 3 Phase submersible pump for demanding borewell conditions.',
  },
  {
    id: 'DOM_BW_SUB_003',
    name: 'Taro Submersible Bore 3" 1 Phase',
    application: 'domestic',
    waterSource: 'borewell',
    installLocation: 'Submersible_Borewell',
    borewellSize: '3inch_b_sub',
    phase: '1phase_b_sub',
    totalHeadMin: 20, totalHeadMax: 80,
    lpmMin: 30, lpmMax: 120,
    imageUrl: Pump,
    description: 'Compact 3-inch 1 Phase submersible pump for narrow borewells.',
  },



  // ----AGRICULTURE PUMP PRODUCTS -----------//
           // ----OPENWELL -----------//

  {
    id: 'AGR_BW_SUB_001',
    name: 'Agri Submersible Bore 4"',
    application: 'agricultural',
    waterSource: 'openwell',
    installLocation: 'surface_irrigation',
    phase: '1phase_b_sub',
    totalHeadMin: 10,
    totalHeadMax: 100,
    dischargeMin: 60,
    dischargeMax: 180,
    deliverySize: ['1inch_sur_ir', '1.5inch_sur_ir'],
    imageUrl: Pump,
    description: 'Submersible borewell pump for agricultural irrigation.',
  },
  {
    id: 'AGR_BW_SUB_0011',
    name: 'Agri Submersible Bore 4"',
    application: 'agricultural',
    waterSource: 'openwell',
    phase: '3phase_b_sub',
    installLocation: 'surface_irrigation',
    installLocationtype:['borewell','surface'],
    totalHeadMin: 100,
    totalHeadMax: 200,
    dischargeMin: 100,
    dischargeMax: 180,
    deliverySize: ['2inch_sur_ir', '2.5inch_sur_ir'],
    imageUrl: Pump,
    description: 'Submersible borewell pump for agricultural irrigation.',
  },

  // ----BOREWELL -----------//
  // ----SUBMERSIBLE -----------//

  {
    id: 'AGR_OP_SUB_0011',
    name: 'Agri Submersible Borewell SUR_IR SUB"',
    application: 'agricultural',
    waterSource: 'borewell',
    phase: '1phase_b_sub',
    installLocation: 'surface_irrigation',
    installLocationtype:'submersible',
    totalHeadMin: 100,
    totalHeadMax: 200,
    dischargeMin: 100,
    dischargeMax: 180,
    deliverySize: ['1inch_sur_ir', '1.5inch_sur_ir'],
    imageUrl: Pump,
    description: 'Submersible borewell pump for agricultural irrigation.',
  },


  // ----SURFACE-----------//

  {
    id: 'AGR_OP_SUR_0011',
    name: 'Agri Submersible Borewell SUR_IR SUF"',
    application: 'agricultural',
    waterSource: 'borewell',
    phase: '1phase_b_sur',
    installLocation: 'surface_irrigation',
    installLocationtype:'surface',
    totalHeadMin: 100,
    totalHeadMax: 200,
    dischargeMin: 100,
    dischargeMax: 180,
    depthMin: 100, 
    depthMax: 250,
    deliverySize: ['1inch_sur_ir', '1.5inch_sur_ir'],
    imageUrl: Pump,
    description: 'Submersible borewell pump for agricultural irrigation.',
  },

  // ------- Canalriverbed -----------//

  {
    id: 'AGR_OP_SUR_0011',
    name: 'Agri Submersible  CR"',
    application: 'agricultural',
    waterSource: 'canalriverbed',
    totalHeadMin: 100,
    totalHeadMax: 200,
    dischargeMin: 100,
    dischargeMax: 180,
    deliverySize: ['1inch_sur_ir', '1.5inch_sur_ir'],
    imageUrl: Pump,
    description: 'Submersible borewell pump for agricultural irrigation.',
  },



];