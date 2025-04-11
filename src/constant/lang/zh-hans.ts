import type { LangType } from './type.ts';

export const ZhHans: LangType = {
  name: '宋治佳',
  emailLabel: '邮箱：',
  email: 'songzj.biz@gmail.com',
  ageLabel: '年龄：',
  genderLabel: '性别：',
  gender: '男',
  yearText: '年',
  monthText: '个月',
  dayText: '天',
  hourText: '小时',
  minuteText: '分',
  secondText: '秒',
  educationLabel: '教育背景',
  educationDuration: '2013/09 - 2017/07',
  educationContent: '吉林大学 软件工程，本科',
  careerLabel: '工作经验',
  career: [
    {
      duration: '2018/08 - 2023/11',
      companyAndTitle: '猿辅导（看云控股） 前端工程师',
      description: [
        '先后经历斑马英语、飞象星球、ClassUp三个业务',
        '业务线前端项目的开发与维护',
        '前端团队技术规范的制定和代码审查',
        '产品需求的技术评审',
        '新人入职后的培养和成长',
      ],
    },
    {
      duration: '2016/11 - 2018/07',
      companyAndTitle: '去哪儿网 前端工程师',
      description: [
        '机票业务移动端和PC端售卖全流程的维护和迭代',
        '营销活动落地页的开发和CMS组件的开发与维护',
        '趣浪短视频项目从0到1的快速开发上线',
      ],
    },
  ],
  projectLabel: '项目经验',
  project: [
    {
      duration: '2022/05 - 2023/11',
      name: 'ClassUp (classup.com)',
      description:
        'ClassUp是看云控股旗下的出海业务，是一款针对北美K12阶段的全科目在线辅导平台。项目涉及到的内容有C端的品牌官网、售卖流程、营销活动页，Mac与Windows端的老师/学生端、直播课堂，B端的业务后台、销售/助教工作台、老师招聘后台',
      highlights: [
        '快速完成全流程0到1的搭建，实现产品模式的落地与验证',
        '优化官网首屏，秒开率达90%以上；非首屏页面预加载，实现二级页面秒开',
        '配合产品对留资流程进行细粒度的ABT，持续有效的提升投放到leads的转化率',
        'Electron跨平台实现Mac与Windows端，通过本地Socket与端内QT白板通信实现共享屏幕时QT应用的生命周期管理',
        '热更新机制实现端内非直播课堂模块的无感更新，减少双端发版频率',
        '基于Gitlab CI/CD实现Electron双端的打包、签名和公证',
        'monorepo实现多项目同构，降低代码重用的复杂度和心智负担',
      ],
    },
    {
      duration: '2021/08 - 2022/05',
      name: '飞象星球',
      description:
        '飞象星球是看云控股响应双减政策的一款toG进校业务，包含一系列智慧教育相关的产品内容。项目涉及的主要内容有针对教务方面的师资/学生管理、智能排课、智慧校园，针对课堂方面的双师素质课堂、在线课堂，针对课后托管方面的VR虚拟课堂，针对作业方面的学生能力评估、个性化组题、作业智能批改',
      highlights: [
        '优化Electron在校园低版本低配置设备上运行的问题',
        '直播课堂支持PPT课件的渲染',
        'AI数据标注平台低成本快速上线',
      ],
    },
    {
      duration: '2019/04 - 2021/08',
      name: '斑马AI学-外教一对一',
      description:
        '斑马AI学是看云控股旗下一款针对3-8岁幼儿的儿童数字内容产品，拥有阅读、思维、英语、美术等多个方向。外教一对一是针对英语系统课的一个额外拓展，使学习英语系统课的儿童可以实时与北美外教进行一对一的口语交流练习。项目涉及的主要内容有Mac和Windows端的老师/学生端、直播课堂、回放，B端的相关业务后台',
      highlights: [
        '端内Angular到React的平滑迁移',
        '老师端约课日历在不同时区不同冬夏令时的渲染、控制逻辑',
        '建立业务公共组件库和文档',
        'B端完整的角色权限控制系统',
      ],
    },
    {
      duration: '2018/08 - 2019//04',
      name: '斑马英语-小程序',
      description:
        '斑马英语尝试通过微信小程序-公众号的形式打造社群矩阵，将一些功能下放到小程序并且在小程序上为小朋友开发一些迷你小游戏，以签到、竞赛排名等方式增强用户粘性，提高用户对于斑马英语的品牌依赖和社圈间的自主传播。项目涉及的主要内容有斑马英语、斑马乐园、斑马星球三个小程序，分别承载了绘本、跟读、PK、游戏、活动营销和购课的能力',
      highlights: [
        '创建小程序模版工具，新项目一键初始化',
        '实现小程序开发工具集，改造小程序的Page与Component，方便业务使用',
        'Websocket对接AI中台实现跟读打分',
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
