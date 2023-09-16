const allenBradleyCourses = [
    {
      code: 'AB-1',
      name: 'Fundamentals of Logix/Studio 5000 Systems',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-2',
      name: 'Basic Ladder Logic Editing',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-3',
      name: 'Development of a Logix/Studio 5000 Project',
      days: 4,
      hours: 30,
    },
    {
      code: 'AB-4',
      name: 'Logix/Studio 5000 Maintenance and Troubleshooting',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-5',
      name: 'AB Function Block Programming in Logix/Studio 5000',
      days: 2,
      hours: 15,
    },
    {
      code: 'AB-6',
      name: 'AB Structured Text Programming in Logix/Studio 5000',
      days: 2,
      hours: 15,
    },
    {
      code: 'AB-7',
      name: 'FactoryTalk View Machine Edition for PVP applications',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-8',
      name: 'FactoryTalk View Site Edition for AB SCADA applications',
      days: 4,
      hours: 30,
    },
    {
      code: 'AB-9',
      name: 'FactoryTalk View ME and PanelView Plus Maintenance and Troubleshooting',
      days: 2,
      hours: 15,
    },
    {
      code: 'AB-10',
      name: 'EtherNet Network Communication',
      days: 2,
      hours: 15,
    },
    {
      code: 'AB-11',
      name: 'ControlNet Network Communication',
      days: 2,
      hours: 15,
    },
    {
      code: 'AB-12',
      name: 'DeviceNet Network Communication',
      days: 2,
      hours: 20,
    },
    {
      code: 'AB-13',
      name: 'Motion Control Fundamentals and Programming (Ultra & Kinetix)',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-14',
      name: 'PowerFlex 750-Series Configuration and Startup',
      days: 2,
      hours: 15,
    },
    {
      code: 'AB-15',
      name: 'PowerFlex 520-Series Configuration and Startup',
      days: 2,
      hours: 15,
    },
];
const condensedTrainingPackages = [
{
    code: 'AB-P1',
    name: 'ControlLogix & CompactLogix Fundamental Maintenance and Troubleshooting',
    content: [
    'Fundamentals of Logix/Studio 5000 Systems',
    'Basic Ladder Logic Editing',
    'Logix/Studio 5000 Maintenance and Troubleshooting',
    ],
    days: 5,
    hours: 30,
},
{
    code: 'AB-P2',
    name: 'Allen Bradley NetLinx Communication',
    content: [
    'EtherNet Network Communication',
    'ControlNet Network Communication',
    'DeviceNet Network Communication',
    ],
    days: 5,
    hours: 30,
},
{
    code: 'AB-P3',
    name: 'ControlLogix Advanced Programming',
    content: [
    'Advanced Ladder Logic Editing',
    'AB Function Block Programming in Logix/Studio 5000',
    ],
    days: 5,
    hours: 30,
},
{
    code: 'AB-P4',
    name: 'Visualization - FactoryTalk (SCADA / HMI)',
    content: [
    'FactoryTalk View Machine Edition for PVP applications',
    'FactoryTalk View Site Edition for AB SCADA applications',
    ],
    days: 5,
    hours: 30,
},
{
    code: 'AB-P5',
    name: 'PowerFlex AC Drives Configuration and Startup (4-Class, 520 Class, and PF-7 Class)',
    content: [
    'PowerFlex 750-Series Configuration and Startup',
    ],
    days: 3,
    hours: 20,
},
];
const allenBradleyLegacyCourses = [
    {
      code: 'AB-L1',
      name: 'PLC5 Maintenance & Troubleshooting',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-L2',
      name: 'PLC 5 Advanced Programming',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-L3',
      name: 'SLC500 Maintenance & Troubleshooting',
      days: 4,
      hours: 30,
    },
    {
      code: 'AB-L4',
      name: 'SLC 500 Advanced Course',
      days: 3,
      hours: 20,
    },
    {
      code: 'AB-L5',
      name: 'RSView32 SCADA',
      days: 2,
      hours: 15,
    },
];
const siemensCourses = [
    {
      code: 'SS-1',
      name: 'Siemens Step 7 300-400 via SIMATIC Manager Level_1',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-2',
      name: 'Siemens Step 7 300-400 via SIMATIC Manager Level_2',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-3',
      name: 'Siemens Step 7 300-400 via SIMATIC Manager Level_3 (Advanced Programming)',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-4',
      name: 'Siemens Step 7 1200-1500 via TIA Portal Level_1',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-5',
      name: 'Siemens Step 7 1200-1500 via TIA Portal Level_2',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-6',
      name: 'Siemens Step 7 1200-1500 via TIA Portal Level_3 (Advanced Programming)',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-7',
      name: 'Variable Speed Drive SIEMENS SINAMICS G120 Operator and Maintenance',
      days: 3,
      hours: 20,
    },
    {
      code: 'SS-8',
      name: 'Human Machine Interface (HMI) WinCC flexible SIEMENS',
      days: 3,
      hours: 20,
    },
    {
      code: 'SS-9',
      name: 'SIEMENS WinCC SCADA',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-P1',
      name: 'Siemens Step 7 300-400 Level 1 & 2',
      days: 7,
      hours: 50,
    },
    {
      code: 'SS-P2',
      name: 'Human Machine Interface (HMI) WinCC flexible SIEMENS + SIEMENS WinCC SCADA',
      days: 5,
      hours: 30,
    },
    {
      code: 'SS-P3',
      name: 'Variable Speed Drive SIEMENS SINAMICS G120 Operator and Maintenance',
      days: 2,
      hours: 15,
    },
];
const electricalPowerCourses = [
    {
      code: 'E-1',
      name: 'Power cables; selection, testing & fault locations',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-2',
      name: 'Fault analysis in power system',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-3',
      name: 'Operation, Maintenance & Troubleshooting Of 3 Phase Induction',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-4',
      name: 'Operation & Maintenance Of Circuit Breakers, LV/ MV panel, ACB, VCB',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-5',
      name: 'Power System Protection and Analysis',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-6',
      name: 'Maintenance Of Electrical Switchgears',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-7',
      name: 'Maintenance of the Power Transformer',
      days: 3,
      hours: 20,
    },
    {
      code: 'E-8',
      name: 'MV Drives and Soft starters',
      days: 2,
      hours: 15,
    },
    {
      code: 'E-9',
      name: 'Motor Control Center (MCC)',
      days: 2,
      hours: 15,
    },
];
const mechanicalCourses = [
    {
      code: 'M-1',
      name: 'Pneumatic & Hydraulic Systems',
      days: 3,
      hours: 20,
    },
    {
      code: 'M-2',
      name: 'Firefighting system',
      days: 3,
      hours: 20,
    },
    {
      code: 'M-3',
      name: 'Piping & Valves System Design',
      days: 3,
      hours: 20,
    },
    {
      code: 'M-4',
      name: 'Plumbing System',
      days: 3,
      hours: 20,
    },
    {
      code: 'M-5',
      name: 'HVAC System',
      days: 3,
      hours: 20,
    },
];
const instrumentationControlCourses = [
    {
      code: 'IC-1',
      name: 'Instrumentation and Controls Fundamentals',
      days: 3,
      hours: 20,
    },
    {
      code: 'IC-2',
      name: 'Boiler Control System',
      days: 2,
      hours: 15,
    },
    {
      code: 'IC-3',
      name: 'Industrial Process Control and Tuning',
      days: 2,
      hours: 15,
    },
    {
      code: 'IC-4',
      name: 'Process Control And Safety System(PLC, DCS, ESD & F&G Systems)',
      days: 2,
      hours: 15,
    },
    {
      code: 'IC-5',
      name: 'Troubleshooting Instrumentation & Control System',
      days: 2,
      hours: 15,
    },
];
const softSkillsCourses = [
    {
      code: 'SK-1',
      name: 'Strategic Management',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-2',
      name: 'Marketing for Non-Marketers',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-3',
      name: 'Contemporary Management',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-4',
      name: 'Quantitative Analysis and Demand Forecast',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-5',
      name: 'Finance for Non-Financial Managers',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-6',
      name: 'Human Resource Management',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-7',
      name: 'Strategic Planning',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-8',
      name: 'Leadership',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-9',
      name: 'Feasibility Studies',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-10',
      name: 'Accounting for Non-Accountants',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-11',
      name: 'Managerial Accounting (Costing)',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-12',
      name: 'Budgeting',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-13',
      name: 'Presentation Skills & Communication Skills',
      days: 3,
      hours: 20,
    },
    {
      code: 'SK-14',
      name: 'Conflict Management and Negotiation Skills',
      days: 2,
      hours: 15,
    },
    {
      code: 'SK-15',
      name: 'Problem Solving & Decision Making',
      days: 2,
      hours: 15,
    },
    {
      code: 'SK-16',
      name: 'Change Management & Team Building',
      days: 2,
      hours: 15,
    },
];

export {allenBradleyCourses ,siemensCourses,electricalPowerCourses,mechanicalCourses,instrumentationControlCourses,softSkillsCourses}