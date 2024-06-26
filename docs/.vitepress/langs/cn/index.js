import { GITHUB } from "../../common";

const themeCnConfig = {
  logo: '/home.svg',
  nav: [
    { text: '首页', link: '/cn/' },
    { text: '示例', link: '/cn/md/markdown-examples' },
  ],
  sidebar: [
    {
      text: '示例',
      items: [
        { text: 'Markdown 示例', link: '/cn/md/markdown-examples' },
        { text: '运行时API示例', link: '/cn/md/api-examples' }
      ]
    }
  ],
  socialLinks: [{ icon: 'github', link: GITHUB }],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024-06-26',
  },
};

export { themeCnConfig };
