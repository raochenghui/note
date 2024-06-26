import { GITHUB } from "../../common";


const themeEnConfig = {
  logo: '/home.svg',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Examples', link: '/md/markdown-examples' },
  ],
  sidebar: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/md/markdown-examples' },
        { text: 'Runtime API Examples', link: '/md/api-examples' }
      ]
    }
  ],
  socialLinks: [{ icon: 'github', link: GITHUB }],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024-06-26',
  },
};

export { themeEnConfig };
