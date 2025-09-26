import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US', // 語言設置

  title: 'Note Sharing', // 網站標題
  description: 'My first VuePress Site', // 網站描述

  // 所有的主題配置都應該在這個 defaultTheme 函數內部
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png', // 網站 Logo

    // 導航欄配置
    navbar: [
      '/',
      '/get-started',
      {
        text: 'C Language',
        link: '/C Language/',
        children: [
          '/C Language/Introduction to Programming.md',
          '/C Language/Introduction to C.md'
        ],
      }
    ],

    // ===========================================
    // 新增：側邊欄配置，用於自動生成上一篇/下一篇文章链接
    // ===========================================
    sidebar: {
      // 為 '/C Language/' 路徑下的所有頁面應用此側邊欄
      '/C Language/': [
        {
          text: 'C Language', // 側邊欄組的標題
          collapsible: true, // 可選：是否可折疊
          children: [
            '/C Language/Introduction to Programming.md',
            '/C Language/Introduction to C.md'
            // 如果有更多 C 語言的頁面，可以在這裡添加
          ],
        },
      ],
      // 你可以為其他路徑添加更多側邊欄配置
      // '/': [
      //   {
      //     text: '指南',
      //     children: ['/get-started.md']
      //   }
      // ]
    },
    // ===========================================
    
  }),

  // Bundler 配置
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
