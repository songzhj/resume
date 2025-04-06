import type { LangType } from './type.ts';

export const EnUS: LangType = {
  name: 'Zhijia Song',
  emailLabel: 'Email: ',
  email: 'songzj.biz@gmail.com',
  ageLabel: 'Age: ',
  genderLabel: 'Gender: ',
  gender: 'Male',
  yearText: 'years',
  monthText: 'months',
  dayText: 'days',
  hourText: 'hours',
  minuteText: 'minutes',
  secondText: 'seconds',
  educationLabel: 'Education',
  educationDuration: '2013/09 - 2017/07',
  educationContent: 'Software Engineering, JiLin University B.Eng.',
  careerLabel: 'Career Experience',
  career: [
    {
      duration: '2018/08 - 2023/11',
      companyAndTitle: 'Frontend Engineer, Yuanfudao(Kanyun Inc.).',
      description: [
        'Participated in the development of three business lines: Zebra English, Feixiang Planet, and ClassUp',
        'Responsible for the development and maintenance of frontend projects across different business lines',
        'Established frontend team coding standards and conducted code reviews',
        'Conducted technical evaluations for product requirements',
        'Mentored new hires and supported their onboarding and growth',
      ],
    },
    {
      duration: '2017/07 - 2018/07',
      companyAndTitle: 'Frontend Engineer, Qunar Inc.',
      description: [
        'Maintained the full sales process for flight booking on both mobile and PC platforms',
        'Developed marketing campaign pages and maintained CMS components',
        'Development QuLang short-form video project from 0 to 1',
      ],
    },
  ],
  projectLabel: 'Project Experience',
  project: [
    {
      duration: '2022/05 - 2023/11',
      name: 'ClassUp (classup.com)',
      description:
        'ClassUp is an overseas business under KanYun Inc. It is an online tutoring platform targeting K-12 students in North America which covers multiple subjects.The business involves include: Customer-facing Website (brand website, purchase flow, and marketing campaign pages); Desktop Application (teacher/student client and live classroom on Mac and Windows); Business-facing Management Console (business admin system, sales and teaching assistant dashboard, and teacher recruitment admin system)',
      highlights: [
        'Optimized the brand website to achieve FCP less than 1s at the tp90, and implemented resource preloading for secondary pages to enable instantaneous navigation',
        'Collaborated with the product team to conduct fine-grained ABT on the lead capture process, consistently and effectively increasing the conversion rate from ad campaigns to leads.',
        'Developed cross-platform applications for Mac and Windows using Electron. Leveraged local socket communication with an in-app QT whiteboard to manage the lifecycle of the QT application during screen sharing',
        'seamless in-app updates for non live classroom modules by a hot update mechanism, reducing the release frequency',
        'Leveraged GitLab CI/CD to implement building, packaging, signing, and notarization for Electron applications on both Mac and Windows',
        'Leveraged a monorepo to reduce the complexity and mental overhead of code reuse',
      ],
    },
    {
      duration: '2021/08 - 2022/05',
      name: 'Feixiang Planet',
      description:
        "Feixiang Planet is Kanyun Inc.'s school-oriented business, featuring a suite of smart education products. The project covers key aspects including: teacher and student management, intelligent scheduling, and smart campus solutions for academic administration; dual-teacher quality classes and online classrooms for classroom instruction; VR virtual classrooms for after-school care; student ability assessments, personalized question grouping, and intelligent homework grading for assignments",
      highlights: [
        'Optimize Electron application to run on low version and low performance devices on schools',
        'Live Classroom supports rendering of PPT courseware',
      ],
    },
    {
      duration: '2019/04 - 2021/08',
      name: 'Zebra AI - 1on1 oral class',
      description:
        "Zebra AI is a children's digital content product for 3-8 year olds under Kanyun Inc. with multiple directions such as reading, thinking, English and art. one-on-one oral class is an additional expansion for English systematic lessons, enabling children learning English systematic lessons to practice one-on-one oral communication with North American foreign teachers in real time. The main contents involved in the project are the teacher/student client of Mac and Windows, live classroom, playback, and the related business admin system",
      highlights: [
        'Gradually migrated in-app modules from Angular to React',
        "Rendering and control logic of the appointment calendar on the teacher's client for different time zones and DST",
        'Built a common business component library and its documentation',
        'Role Authority Control System',
      ],
    },
    {
      duration: '2018/08 - 2019//04',
      name: 'Zebra English - Wechat mini-program',
      description:
        'Zebra English explored building a WeChat-based ecosystem by combining Mini Programs and Official Accounts to form a community-driven user matrix. Some features from the main app were ported to Mini Programs, where lightweight mini-games were also developed for kids. Gamified mechanisms such as daily check-ins and leaderboard competitions were used to boost user stickiness, increase brand loyalty, and encourage organic sharing within social groups. The project included three Mini Programs (Zebra English, Zebra Park, and Zebra Planet) supporting different features such as e-book reading, follow-along pronunciation, user PK challenges, mini-games, marketing campaigns, and course purchases',
      highlights: [
        'Develop mini program template tool, one-click initialization for new projects',
        'Implement mini program development toolset, optimize Page and Component of small program, convenient for business use',
        'Implemented follow-along pronunciation scoring by interacting with the AI platform via WebSocket',
      ],
    },
    {
      duration: '2018/04 - 2018/08',
      name: '趣浪',
      description:
        '趣浪是去哪儿网为迎合抖音、小红书模式的传播形式，在App内上线的一款旅游玩乐类短视频产品',
      highlights: ['实现高性能的视频滑动和预加载'],
    },
  ],
  skillLabel: '专业技能',
  skillDescription: [
    '熟练使用React，有大量使用React及其周边生态的开发经验',
    '有丰富的TypeScript开发经验，熟练使用JavaScript',
    '熟悉RxJS，有大量使用RxJS的异步数据流经验',
    '熟悉Electron和NodeJS，有多个使用Electron进行跨平台桌面端开发的项目经验',
    '有Angular(2+)的大型项目开发经验',
    '有Vue2.x和少量Vue3的开发经验',
    '有限的Astro使用经验',
    '有基于Gitlab CI/CD进行项目持续集成与部署的经验',
  ],
};
