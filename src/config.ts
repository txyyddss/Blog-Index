/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "Minecraft Server",
    sites: [
      {
        title: "Github Page",
        description: "服务器Github项目地址",
        url: "https://github.com/txyyddss/txmcsv/",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMZaBdCpZe7X8I0xC72H6HSPOvAWxgAAq3FMRsrB7lUaNvrog1LFc0BAAMCAANtAAM2BA.png",
      },
      {
        title: "在线地图",
        description: "服务器3D在线地图",
        url: "http://map.1919801.xyz/",
        icon: "https://img.1919801.xyz/file/BQACAgUAAyEGAASJOwb3AAMaaBdC80lNx_7ZbtxM4d_08aeFjZEAAlwUAAIrB7lUP_jVyNc2mes2BA.ico",
      },
      {
        title: "Wiki",
        description: "服务器Wiki",
        url: "https://txyyds.gitbook.io/mtnetwork",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMbaBdEEz97n8HRlB2h_kabk-vV1lwAArbFMRsrB7lU5JoyB8ImwqwBAAMCAAN4AAM2BA.png",
      },
    ],
  },
  {
    title: "示例分类2",
  },
  {
    title: "示例分类3",
  },
  {
    title: "示例分类4",
  },
  {
    title: "示例分类5",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "TXの小站",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.1919801.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/txyyddss",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMcaBdFfLJ6AmKMQ9JSwv_kscizJMQAArvFMRsrB7lUweB1H14adcMBAAMCAAN3AAM2BA.png",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证114514号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "TX Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal index page.",
  },
};

export default GLOBAL_CONFIG;
