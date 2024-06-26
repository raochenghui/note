import { defineConfig } from 'vitepress'
import { BASE_PATH } from './common'
import { themeEnConfig } from './langs/en'
import { themeCnConfig } from './langs/cn'

export default defineConfig({
  base: '/note/',
  title: "bookroom",
  description: "raochenghui's book room",
  locales: {
    // root: { label: '简体中文', lang: 'zh-CN' },
    // en: {
    //   label: 'English',
    //   lang: 'en',
    //   themeConfig: themeEnConfig,
    // },
    root: {
      label: 'English', lang: 'en',
    },
    cn: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: themeCnConfig
    },
  },

  // markdwon相关配置
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.ico` }],
  ],
  themeConfig: themeEnConfig

})
