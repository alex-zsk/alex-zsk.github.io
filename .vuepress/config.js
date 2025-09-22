import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-HK',
  title: '你好， VuePress ！',
  description: '這是我的第一個 VuePress 站點',
  base: "/note-sharing/"
})