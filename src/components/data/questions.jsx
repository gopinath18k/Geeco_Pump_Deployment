// src/data/questions.js (Example for Domestic Use)
export const pumpSelectionQuestions = [
  {
    id: 'applicationType',
    question: 'What do you need the pump for?',
    options: [
      { id: 'domestic', label: 'Domestic Use (Home, Garden, Water Tanks.)', nextSection: 'domesticUse' },
      { id: 'agricultural', label: 'Agricultural Use (Irrigation, Open Well, Borewell.)', nextSection: 'agriculturalUse' },
      { id: 'commercial', label: 'Commercial/Industrial Use (Utility Water Pumping, Car Wash, Pressure Boosting.)', nextSection: 'commercialUse' },
      { id: 'wastewater', label: 'Wastewater and Drainage Applications.', nextSection: 'wastewaterUse' },
    ],
  },
  {
    id: 'domesticUse_waterSource',
    question: 'What is the Water Source?',
    section: 'domesticUse', // This question belongs to the 'domesticUse' flow
    options: [
      { id: 'sumpTank', label: 'Sump/Tank', nextSection: 'domesticUse_sumpTank' },
      { id: 'openwell', label: 'Openwell (Well)', nextSection: 'domesticUse_openwell' },
      { id: 'borewell', label: 'Borewell', nextSection: 'domesticUse_borewell' },
      { id: 'pressure boosting application', label: 'Pressure Boosting Application', nextSection: 'domesticUse_pressure boosting application' },
    ],
  },

  // --- Sump/Tank branch for Domestic Use ---
  {
    id: 'domesticUse_sumpTank_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'domesticUse_sumpTank',
    options: [
      { id: 'surface_sumpTank', label: 'Surface', nextSection: 'domesticUse_sumpTank_surface' },
      { id: 'submerged_sumpTank', label: 'Submerged in water', nextSection: 'domesticUse_sumpTank_submerged' },
    ],
  },
  // --- Surface installation for Sump/Tank ---
  {
    id: 'domesticUse_sumpTank_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_sumpTank_surface',
    type: 'input', // Indicate this is an input field
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_sumpTank_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_sumpTank_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_sumpTank_surface_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_sumpTank_surface',
    options: [
      { id: '1inch', label: '1"' },
      { id: '1.5inch', label: '1.5"' },
      { id: '2inch', label: '2"' },
      { id: '2.5inch', label: '2.5"' },
    ],
  },
  // --- Submerged installation for Sump/Tank (similar structure) ---
  {
    id: 'domesticUse_sumpTank_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_sumpTank_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_sumpTank_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_sumpTank_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_sumpTank_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_sumpTank_submerged',
    options: [
      { id: '1inch_sub', label: '1"' },
      { id: '1.5inch_sub', label: '1.5"' },
      { id: '2inch_sub', label: '2"' },
      { id: '2.5inch_sub', label: '2.5"' },
    ],
  },

  // --- Open Well Section --- //

  // --- Sump/Tank branch for Domestic Use ---
  {
    id: 'domesticUse_openwell_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'domesticUse_openwell',
    options: [
      { id: 'surface_openwell', label: 'Surface', nextSection: 'domesticUse_openwell_surface' },
      { id: 'submerged_openwell', label: 'Submerged in water', nextSection: 'domesticUse_openwell_submerged' },
    ],
  },

  // --- Surface installation for openwell ---
  {
    id: 'domesticUse_openwell_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_openwell_surface',
    type: 'input', 
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_openwell_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_openwell_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_openwell_surface_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_openwell_surface',
    options: [
      { id: '1.5inch_op_s', label: '1.5"' },
      { id: '2inch_op_s', label: '2"' },
      { id: '2.5inch_op_s', label: '2.5"' },
    ],
  },

  // --- Submerged installation for openwell 
  
  {
    id: 'domesticUse_openwell_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_openwell_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_openwell_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_openwell_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_openwell_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_openwell_submerged',
    options: [
      { id: '1inch_op_sub', label: '1"' },
      { id: '1.5inch_op_sub', label: '1.5"' },
      { id: '2inch_sub', label: '2"' },
      { id: '2.5inch_sub', label: '2.5"' },
    ],
  },

// --- BoreWell Section --- //

// --- Borewell installation location ---


{
  id: 'domesticUse_borewell_installLocation',
  question: 'Where do you want to install the pump?',
  section: 'domesticUse_borewell',
  options: [
    { id: 'surface_borewell', label: 'Surface', nextSection: 'domesticUse_borewell_surface' },
    { id: 'Submersible_Borewell', label: 'Inside the borewell (Submersible)', nextSection: 'domesticUse_borewell_submersible' },
  ],
},

// --- Surface Borewell Questions ---

{
  id: 'domesticUse_borewell_surface_phase',
  question: 'Do you need a 1 phase or 3 phase design? (Single phase recommended for Household and Domestic applications)',
  section: 'domesticUse_borewell_surface',
  options: [
    { id: '1phase_bw_sur', label: '1 Phase', nextSection: 'domesticUse_borewell_surface_1phase' },
    { id: '3phase_bw_sur', label: '3 Phase', nextSection: 'domesticUse_borewell_surface_3phase' },
  ],
},

// --- Surface Borewell Single Phase Questions ---

{
  id: 'domesticUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? (in meters)',
  section: 'domesticUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'domesticUse_borewell_surface_head',
  question: 'What is the total head you want to pump the water in meters?',
  section: 'domesticUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'domesticUse_borewell_surface_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_surface_1phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Surface Borewell Three Phase Questions ---

{
  id: 'domesticUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? (in meters)',
  section: 'domesticUse_borewell_surface_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'domesticUse_borewell_surface_head',
  question: 'What is the total head you want to pump the water in meters?',
  section: 'domesticUse_borewell_surface_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'domesticUse_borewell_surface_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_surface_3phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Submersible Borewell Questions ---

{
  id: 'domesticUse_borewell_submersible_phase',
  question: 'Do you need a  1phase or a 3phase design? (Single phase recommended for Household and domestic applications)',
  section: 'domesticUse_borewell_submersible',
  options: [
    { id: '1phase_b_sub', label: '1 Phase', nextSection: 'domesticUse_borewell_submersible_1phase' },
    { id: '3phase_b_sub', label: '3 Phase', nextSection: 'domesticUse_borewell_submersible_3phase' },
  ],
},

// --- Surface Borewell Single Phase Questions ---

{
    id: 'domesticUse_borewell_submersible_borewellSize',
    question: 'What is the size of your bore well?',
    section: 'domesticUse_borewell_submersible_1phase',
    options: [
      { id: '3inch_b_sub', label: '3"' },
      { id: '4inch_b_sub', label: '4"' },
      { id: '6inch_b_sub', label: '6"' },
    ],
  },

{
  id: 'domesticUse_borewell_submersible_head',
  question: 'What is the total head you want to pump the water in meters? ( Total head= Depth of Bore pump installation + height of the over head tank)',
  section: 'domesticUse_borewell_submersible_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 250,
},

{
  id: 'domesticUse_borewell_submersible_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_submersible_1phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Surface Borewell Three Phase Questions ---

{
    id: 'domesticUse_borewell_submersible_borewellSize',
    question: 'What is the size of your bore well?',
    section: 'domesticUse_borewell_submersible_3phase',
    options: [
      { id: '3inch_b_sub', label: '3"' },
      { id: '4inch_b_sub', label: '4"' },
      { id: '6inch_b_sub', label: '6"' },
    ],
  },

{
  id: 'domesticUse_borewell_submersible_head',
  question: 'What is the total head you want to pump the water in meters? ( Total head= Depth of Bore pump installation + height of the over head tank)',
  section: 'domesticUse_borewell_submersible_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 250,
},

{
  id: 'domesticUse_borewell_submersible_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_submersible_3phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},
 

  


];