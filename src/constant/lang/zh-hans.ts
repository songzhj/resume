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
      duration: '2017/07 - 2018/07',
      companyAndTitle: '去哪儿网 前端工程师',
      description: [
        '机票业务移动端和PC端售卖全流程的维护和迭代',
        '营销活动落地页的开发和CMS组件的开发与维护',
        '趣浪短视频项目从0到1的快速开发上线',
      ],
    },
    {
      duration: '2017/08 - 2023/11',
      companyAndTitle: '猿辅导（看云控股） 前端工程师',
      description: [
        '先后经历斑马英语、飞象星球、ClassUp三个业务',
        '业务线前端项目的开发与维护',
        '前端团队技术规范的制定和代码审查',
        '产品需求的技术评审',
        '新人入职后的培养和成长',
      ],
    },
  ],
};
