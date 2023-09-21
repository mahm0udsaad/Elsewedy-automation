import { ChartBarSquareIcon,CogIcon,CubeIcon,PresentationChartBarIcon,UserIcon, BriefcaseIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/24/outline'; 

const slidesData = [
    {
      imgSrc: '/images/machine.jpg',
      text: 'El Sewedy Automation for Industrial Automation Services',
      parag:
        'El Sewedy Automation Founders have over 25 years of proven technical expertise, they established the Legal Form of El Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since 2009',
    },
    {
      imgSrc: '/images/hardware.jpg',
      text: 'Provide Sustainability and Innovation Engineering and Services Technology.',
      
    }, {
      imgSrc: '/images/idea.jpg',
      text: 'Industrial Automation Solutions/Services Provider',
    },
    {
      imgSrc: '/images/planing.jpg',
      text: 'Supplier for Different Industrial Automation Product Brands',
    },
    {
      imgSrc: '/images/training.jpg',
      text: <>
       El Sewedy Automation Has Privileging to Own the
      <br />
      Top Talented Automation Engineers" in the industrial Markets
    </>
    },
  ];
  const progressData = [
    {
      title: 'Years of Experience',
      number: '26',
      icon: <BriefcaseIcon className="h-6 w-6 text-blue-500" />,
      widthClass: 'w-[60%]',
    },
    {
      title: 'Successful Projects',
      number: '200',
      icon: <ChartBarIcon className="h-6 w-6 text-blue-500" />,
      widthClass: 'w-3/4',
    },
    {
      title: 'Happy Clients',
      number: '1000',
      icon: <UserIcon className="h-6 w-6 text-blue-500" />,
      widthClass: 'w-[90%]',
    },
    {
      title: 'Trainings',
      number: '400',
      icon: <BookOpenIcon className="h-6 w-6 text-blue-500" />,
      widthClass: 'w-1/3',
    },
  ];
  const services =[
    {
      name: 'Offering High Standard Industrial Automation Products',
      description:
        'through different Industrial Automation brands. ',
      icon: PresentationChartBarIcon, 
      to :'/products'
    },
    {
      name: 'Turn-Key Projects for Automated Process Solutions',
      description:
        'for major clients across a variety of industry sectors.',
      icon: CubeIcon, 
      to :'/services'
    },
    {
      name: 'Providing Technical Support Services',
      description:
        'Enhance our client’s business performance by providing great that add value and enhance their return on investments.',
      icon: CogIcon, 
      to :'/services'
  
    },
    {
      name: 'Conducting Outstanding Progressive Training Courses',
      description:
        'customized to different industrial automation fields using the most advanced Rockwell-Automation Workstations. ',
      icon: ChartBarSquareIcon, 
      to:'/training'
  
    },
  ];
  export {services , progressData , slidesData}