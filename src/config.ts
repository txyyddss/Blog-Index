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
        url: "https://mtn.1919801.xyz/",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMbaBdEEz97n8HRlB2h_kabk-vV1lwAArbFMRsrB7lU5JoyB8ImwqwBAAMCAAN4AAM2BA.png",
      },
      {
        title: "内网穿透",
        description: "服务器IPV4直连面板",
        url: "https://v4mc.1919801.xyz/",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMmaF0nGy9TYHWwwqszaJND2qmkousAAh3FMRuprOhWot6fRNoCsJABAAMCAANtAAM2BA.png",
      },
      {
        title: "Status",
        description: "服务状态监控",
        url: "https://status.1919801.xyz/",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMnaF0ngB1pL4wCeMOHcyocVHXHnBoAAh_FMRuprOhWiPNrW4qGAAETAQADAgADbQADNgQ.png",
      },
      {
        title: "哪吒面板",
        description: "服务器状态监控",
        url: "https://nezha.1919801.xyz/",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMgaBdLNZqLyb_BZeRq6sN7V1zZMVUAAsrFMRsrB7lUdcSKVLqbfZUBAAMCAANtAAM2BA.png",
      },
    ],
  },
  {
    title: "实用工具",
    sites: [
      {
        title: "免费图床",
        description: "TX公益免费图床",
        url: "https://img.1919801.xyz",
        icon: "",
      },
      {
        title: "免费节点",
        description: "复制链接，导入代理软件即可",
        url: "https://txsub.1919801.xyz/auto",
        icon: "",
      },
      {
        title: "TX网盘",
        description: "TX的Onedrive文件全部公开,可下载",
        url: "https://pan.1919801.xyz",
        icon: "",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "精苏的博客",
        description: "一个精苏的博客",
        url: "https://www.jingsublog.top/",
        icon: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANLaH-q_0gdatFD1ItPgvAjp0-wOWIAAnfLMRvd-PlXMt6zuENOAAFSAQADAgADeAADNgQ.png",
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
  LOGO_URL: "https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAMgaBdLNZqLyb_BZeRq6sN7V1zZMVUAAsrFMRsrB7lUdcSKVLqbfZUBAAMCAANtAAM2BA.png",
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
  ICP: "感谢访问！",
  ICP_URL: "https://1919801.xyz/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "坐和放宽",
    "滚回到以前的版本",
    "做轰！嚓-嚓-嚓推-推的事",
    "头抬起",
    "嗨，别来无恙啊",
    "好东西就要来了！",
    "最近还好吗？",
    "海内存知己，天涯若比邻",
    "微软边缘有新面貌！我们走吧",
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
    description: "TX's personal index page.",
  },
};

export default GLOBAL_CONFIG;
