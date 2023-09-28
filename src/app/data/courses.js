const coursesCategory =[
  `Allen Bradley ` , 
  `Siemens Courses
  Electrical/Mechanical Courses` , 
  `Instrumentation Courses` , 
  `Soft Skills / Managerial Courses` , 
]
const allenBradleyCourses = {
  color:'black' , 
  data:[
    {
      code: 'AB-1' , 
      title: 'Fundamentals of Logix/Studio 5000 Systems' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'AB-2' , 
      title: 'Basic Ladder Logic Editing' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'AB-3' , 
      title: 'Development of a Logix/Studio 5000 Project' , 
      days: 4 , 
      hours: 30 , 
    } , 
    {
      code: 'AB-4' , 
      title: 'Logix/Studio 5000 Maintenance and Troubleshooting' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'AB-5' , 
      title: 'AB Function Block Programming in Logix/Studio 5000' , 
      days: 2 , 
      hours: 15 , 
    } , 
    {
      code: 'AB-6' , 
      title: 'AB Structured Text Programming in Logix/Studio 5000' , 
      days: 2 , 
      hours: 15 , 
    } , 
    {
      code: 'AB-7' , 
      title: 'FactoryTalk View Machine Edition for PVP applications' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'AB-8' , 
      title: 'FactoryTalk View Site Edition for AB SCADA applications' , 
      days: 4 , 
      hours: 30 ,
    } , 
    {
      code: 'AB-9' , 
      title: 'FactoryTalk View ME and PanelView Plus Maintenance and Troubleshooting' , 
      days: 2 , 
      hours: 15 , 
    } , 
    {
      code: 'AB-10' , 
      title: 'EtherNet Network Communication' , 
      days: 2 , 
      hours: 15 , 
    } , 
    {
      code: 'AB-11' , 
      title: 'ControlNet Network Communication' , 
      days: 2 , 
      hours: 15 , 
    } , 
    {
      code: 'AB-12' , 
      title: 'DeviceNet Network Communication' , 
      days: 2 , 
      hours: 20 , 
    } , 
    {
      code: 'AB-13' , 
      title: 'Motion Control Fundamentals and Programming (Ultra & Kinetix)' , 
      days: 3 , 
      hours: 20 , 
      link:"./pdf/Allen bradley courses/AB-13 Allen Bradley Motion Control Fundamentals (Ultra _  Kinetix ).pdf"
    } , 
    {
      code: 'AB-14' , 
      title: 'PowerFlex 750-Series Configuration and Startup' , 
      days: 2 , 
      hours: 15 , 
    } , 
    {
      code: 'AB-15' , 
      title: 'PowerFlex 520-Series Configuration and Startup' , 
      days: 2 , 
      hours: 15 , 
    } , 
]
}
const condensedTrainingPackages = {
  color: 'black',
  data: [
    {
      code: 'AB-P1',
      title: 'ControlLogix & CompactLogix Fundamental Maintenance and Troubleshooting',
      content: [
        'Fundamentals of Logix/Studio 5000 Systems',
        'Basic Ladder Logic Editing',
        'Logix/Studio 5000 Maintenance and Troubleshooting',
      ],
      days: 5,
      hours: 30,
      link: './pdf/Allen bradley courses/AB-P1 ControlLogix Fundamentals, Maintenance _ Troubleshooting (RSLogix5000).pdf',
    },
    {
      code: 'AB-P2',
      title: 'Allen Bradley NetLinx Communication',
      content: [
        'EtherNet Network Communication',
        'ControlNet Network Communication',
        'DeviceNet Network Communication',
      ],
      days: 5,
      hours: 30,
      link: './pdf/Allen bradley courses/AB-P2 ControlLogix Advanced Programming Course.pdf',
    },
    {
      code: 'AB-P3',
      title: 'ControlLogix Advanced Programming',
      content: [
        'Advanced Ladder Logic Editing',
        'AB Function Block Programming in Logix/Studio 5000',
      ],
      days: 5,
      hours: 30,
      link: './pdf/Allen bradley courses/AB-P3 NetLinx Industrial Communication -EtherNet IP Network, ControlNet _ DeviceNet Communication.pdf',
    },
    {
      code: 'AB-P4',
      title: 'Visualization - FactoryTalk (SCADA / HMI)',
      content: [
        'FactoryTalk View Machine Edition for PVP applications',
        'FactoryTalk View Site Edition for AB SCADA applications',
      ],
      days: 5,
      hours: 30,
    },
    {
      code: 'AB-P5',
      title: 'PowerFlex AC Drives Configuration and Startup (4-Class ,  520 Class ,  and PF-7 Class)',
      content: [
        'PowerFlex 750-Series Configuration and Startup',
      ],
      days: 3,
      hours: 20,
      link: './pdf/Allen bradley courses/AB-P5 PowerFlex Drives Fundamentals, Configurations and Troubleshooting.pdf',
    },
  ],
};
const allenBradleyLegacyCourses = {
  color: 'black',
  data: [
    {
      code: 'AB-L1',
      title: 'PLC5 Maintenance & Troubleshooting',
      days: 3,
      hours: 20,
      link: './pdf/Allen bradley courses/AB-L1 PLC5 Maintenance _ Troubleshooting.pdf',
    },
    {
      code: 'AB-L2',
      title: 'PLC 5 Advanced Programming',
      days: 3,
      hours: 20,
      link: './pdf/Allen bradley courses/AB-L2 PLC 5 Advanced Programming .pdf',
    },
    {
      code: 'AB-L3',
      title: 'SLC500 Maintenance & Troubleshooting',
      days: 4,
      hours: 30,
      link: './pdf/Allen bradley courses/AB-L3 SLC500 Maintenance _ Troubleshooting.pdf',
    },
    {
      code: 'AB-L4',
      title: 'SLC 500 Advanced Course',
      days: 3,
      hours: 20,
      link: './pdf/Allen bradley courses/AB-L4 SLC500 ADVANCED COURSE .pdf',
    },
    {
      code: 'AB-L5',
      title: 'RSView32 SCADA',
      days: 2,
      hours: 15,
      link: './pdf/Allen bradley courses/AB-L5 RSView32 SCADA..pdf',
    },
  ],
};
const siemensCourses = {
  color: '#3e959c',
  data: [
    {
      code: 'SS-1',
      title: 'Siemens Step 7 300-400 via SIMATIC Manager Level_1',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-01 Siemens Step 7 300-400 via SIMATIC Manager Level_1.pdf',
    },
    {
      code: 'SS-2',
      title: 'Siemens Step 7 300-400 via SIMATIC Manager Level_2',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-02 Siemens Step 7 300-400 via SIMATIC Manager Level_2.pdf',
    },
    {
      code: 'SS-3',
      title: 'Siemens Step 7 300-400 via SIMATIC Manager Level_3 (Advanced Programming)',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-03 Siemens Step 7 300-400 via SIMATIC Manager Level_3.pdf',
    },
    {
      code: 'SS-4',
      title: 'Siemens Step 7 1200-1500 via TIA Portal Level_1',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-04 Siemens Step 7 1200-1500 via TIA Portal Level_1.pdf',
    },
    {
      code: 'SS-5',
      title: 'Siemens Step 7 1200-1500 via TIA Portal Level_2',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-05 Siemens Step 7 1200-1500 via TIA Portal Level_2.pdf',
    },
    {
      code: 'SS-6',
      title: 'Siemens Step 7 1200-1500 via TIA Portal Level_3 (Advanced Programming)',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-06 Siemens Step 7 1200-1500 via TIA Portal Level_3.pdf',
    },
    {
      code: 'SS-7',
      title: 'Variable Speed Drive SIEMENS SINAMICS G120 Operator and Maintenance',
      days: 3,
      hours: 20,
      link: './pdf/SIEMENS/SS-07 Variable Speed Drive SIEMENS SINAMICS G120 Operator and Maintenance.pdf',
    },
    {
      code: 'SS-8',
      title: 'Human Machine Interface (HMI) WinCC flexible SIEMENS',
      days: 3,
      hours: 20,
      link: './pdf/SIEMENS/SS-08 Human Machine Interface (HMI) WinCC flexible SIEMENS.pdf',
    },
    {
      code: 'SS-9',
      title: 'SIEMENS WinCC SCADA',
      days: 5,
      hours: 30,
      link: './pdf/SIEMENS/SS-09 SIEMENS WinCC SCADA.pdf',
    },
    {
      code: 'SS-10',
      title: 'Profibus Communication Network',
      days: 3,
      hours: 20,
      link: './pdf/SIEMENS/SS-10 SIEMENS S7 PROFIBUS Network.pdf',
    },
    {
      code: 'SS-11',
      title: 'Profinet Communication Network',
      days: 3,
      hours: 20,
      link: './pdf/SIEMENS/SS-11 Siemens S7 PROFINET Network.pdf',
    },
    {
      text: 'Condensed Training Packages',
      type: 'packages',
      packages: [
        {
          code: 'SS-P1',
          title: 'Siemens Step 7 300-400 Level 1 & 2',
          days: 7,
          hours: 50,
        },
        {
          code: 'SS-P2',
          title: 'Human Machine Interface (HMI) WinCC flexible SIEMENS + SIEMENS WinCC SCADA',
          days: 5,
          hours: 30,
        },
        {
          code: 'SS-P3',
          title: 'Variable Speed Drive SIEMENS SINAMICS G120 Operator and Maintenance',
          days: 2,
          hours: 15,
        },
        {
          code: 'SS-P4',
          title: 'Profibus & Profinet Communication Network',
          days: 5,
          hours: 30,
        },
      ],
    },
  ],
};
const electricalPowerCourses = {
  color: '#e6af00',
  data: [
    {
      code: 'E-1',
      title: 'Power Cables: Selection, Testing & Fault Locations',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-01 Power Cables_ Selection, Testing _ Fault Locations.pdf',
    },
    {
      code: 'E-2',
      title: 'Fault Analysis in Power System',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-02 Fault Analysis in Power System.pdf',
    },
    {
      code: 'E-3',
      title: 'Operation, Maintenance & Troubleshooting of 3 Phase Induction',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-03 Operation, Maintenance _ Troubleshooting of 3 Phase Induction.pdf',
    },
    {
      code: 'E-4',
      title: 'Operation and Maintenance of Circuit Breakers, LV MV Panel, ACB, VCB',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-04 Operation and Maintenance of Circuit Breakers, LV MV Panel, ACB, VCB.pdf',
    },
    {
      code: 'E-5',
      title: 'Power System Protection and Analysis',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-05 Power System Protection and Analysis.pdf',
    },
    {
      code: 'E-6',
      title: 'Maintenance of Electrical Switchgears',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-06 Maintenance of Electrical Switchgears.pdf',
    },
    {
      code: 'E-7',
      title: 'Maintenance of Power Transformer',
      days: 3,
      hours: 20,
      link: './pdf/Electrical courses/E-07 MAINTENANCE OF POWER TRANSFORMER.pdf',
    },
    {
      code: 'E-8',
      title: 'MV Drives and Soft Starters',
      days: 2,
      hours: 15,
      link: 'Your Link Here',
    },
    {
      code: 'E-9',
      title: 'Motor Control Center (MCC)',
      days: 2,
      hours: 15,
      link: 'Your Link Here',
    },
  ],
};

const mechanicalCourses ={
  color:'#404040' , 
  data: [
    {
      code: 'M-1' , 
      title: 'Pneumatic & Hydraulic Systems' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'M-2' , 
      title: 'Firefighting system' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'M-3' , 
      title: 'Piping & Valves System Design' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'M-4' , 
      title: 'Plumbing System' , 
      days: 3 , 
      hours: 20 , 
    } , 
    {
      code: 'M-5' , 
      title: 'HVAC System' , 
      days: 3 , 
      hours: 20 , 
    } , 
]
}
const instrumentationControlCourses = {
  color: '#632b8d',
  data: [
    {
      code: 'IC-1',
      title: 'Instrumentation and Controls Fundamentals',
      days: 3,
      hours: 20,
      link: './pdf/Instrumentation Courses/IC-01 Instrumentation and Controls Fundamentals.pdf',
    },
    {
      code: 'IC-2',
      title: 'Boiler Control System',
      days: 2,
      hours: 15,
      link: './pdf/Instrumentation Courses/IC-02 Boiler Control System.pdf',
    },
    {
      code: 'IC-3',
      title: 'Industrial Process Control and Tuning',
      days: 2,
      hours: 15,
      link: './pdf/Instrumentation Courses/IC-03 Industrial Process Control and tuning.pdf',
    },
    {
      code: 'IC-4',
      title: 'Process Control And Safety System (PLC, DCS, ESD & F&G Systems)',
      days: 2,
      hours: 15,
      link: './pdf/Instrumentation Courses/IC-04 Process Control and Safety System (PLC,DCS,ESD _ F_G Systems) .pdf',
    },
    {
      code: 'IC-5',
      title: 'Troubleshooting Instrumentation & Control System',
      days: 2,
      hours: 15,
      link: './pdf/Instrumentation Courses/IC-05 Troubleshooting Instrumentation _ Control System   .pdf',
    },
  ],
};

const softSkillsCourses = {
  color:'#00b0f0' , 
  data:[
   {
     code: 'SK-1' , 
     title: 'Strategic Management' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-2' , 
     title: 'Marketing for Non-Marketers' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-3' , 
     title: 'Contemporary Management' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-4' , 
     title: 'Quantitative Analysis and Demand Forecast' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-5' , 
     title: 'Finance for Non-Financial Managers' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-6' , 
     title: 'Human Resource Management' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-7' , 
     title: 'Strategic Planning' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-8' , 
     title: 'Leadership' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-9' , 
     title: 'Feasibility Studies' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-10' , 
     title: 'Accounting for Non-Accountants' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-11' , 
     title: 'Managerial Accounting (Costing)' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-12' , 
     title: 'Budgeting' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-13' , 
     title: 'Presentation Skills & Communication Skills' , 
     days: 3 , 
     hours: 20 , 
   } , 
   {
     code: 'SK-14' , 
     title: 'Conflict Management and Negotiation Skills' , 
     days: 2 , 
     hours: 15 , 
   } , 
   {
     code: 'SK-15' , 
     title: 'Problem Solving & Decision Making' , 
     days: 2 , 
     hours: 15 , 
   } , 
   {
     code: 'SK-16' , 
     title: 'Change Management & Team Building' , 
     days: 2 , 
     hours: 15 , 
   } , 
  ]
}

const data = [
  { imgUrl: "/images/partners/partner-tab2.png", color: "black" },
  { imgUrl: "/images/partners/semins-tqp.png", color: "#3e959c" },
  { imgUrl: "/images/training/image-024.png", color: "#e6af00" },
  { imgUrl: "/images/training/image-039.png", color: "#404040" },
  { imgUrl: "/images/training/image-032.png", color: "#632b8d" },
  { imgUrl: "/images/training/image-045.png", color: "#00b0f0" }
];

export {data  ,  coursesCategory , allenBradleyCourses  , allenBradleyLegacyCourses , condensedTrainingPackages  , siemensCourses , electricalPowerCourses , mechanicalCourses , instrumentationControlCourses , softSkillsCourses}