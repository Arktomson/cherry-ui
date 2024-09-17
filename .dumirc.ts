import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cherry-ui',
    nav: [
      { title: '指南', link: '/guide/introduction' },
      { title: '组件', link: '/components/back-top' },
    ],
  },
  styles: [
    `.dumi-default-sidebar .dumi-default-sidebar-group dt { font-size: 20px; text-transform: none; }`,
  ],
  base: '/cherry-ui/',
  publicPath: '/cherry-ui/',
});
