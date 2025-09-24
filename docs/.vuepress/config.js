import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-HK', // 語言設置

  title: 'Note Sharing', // 網站標題
  description: 'My first VuePress Site', // 網站描述

  // 所有的主題配置都應該在這個 defaultTheme 函數內部
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png', // 網站 Logo

    // 導航欄配置，合併了你兩個 navbar 定義的內容
    navbar: [
      // 首頁和入門指南，如果需要可以保留
      '/',
      '/get-started',

      // NavbarGroup for C Language
      {
        text: 'C Language',
        link: '/C Language/', // 鏈接到 C Language 目錄的索引頁面
        children: [
          '/C Language/Introduction to Programming.md',
          '/C Language/Introduction to C.md'
          
        ],
      }
    ],
  }),

  // Bundler 配置
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
