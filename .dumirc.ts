import { defineConfig } from 'dumi';
import { ISidebarGroup } from 'dumi/dist/client/theme-api/types';

const getMenus = (opts: {
  lang?: string;
  base: '/components' | '/docs';
}): ISidebarGroup[] => {
  const menus = {
    '/docs': [
      {
        title: 'Introduce',
        'title_zh-CN': '介绍',
        path: '/docs/guide',
      },
      {
        title: 'FAQ',
        'title_zh-CN': '问题',
        path: '/docs/faq',
      },
    ],
    '/components': [
      {
        title: 'Common',
        'title_zh-CN': '通用',
        children: [
          {
            title: 'Button 按钮',
            link: '/components/button',
          },
          {
            title: 'Icon 图标',
            link: '/components/icon',
          },
          {
            title: 'Tag 标签',
            link: '/components/tag',
          },
        ],
      },
      {
        title: 'Layout',
        'title_zh-CN': '布局',
        children: [
          {
            title: 'Grid 栅栏',
            link: '/components/grid',
          },
        ],
      },
      {
        title: 'Datainput',
        'title_zh-CN': '数据录入',
        children: [
          {
            title: 'Radio 单选框',
            link: '/components/radio',
          },
          {
            title: 'Checkbox 复选框',
            link: '/components/checkbox',
          },
          {
            title: 'Input 输入框',
            link: '/components/input',
          },
          {
            title: 'Switch 开关',
            link: '/components/switch',
          },
        ],
      },
      {
        title: 'Datadisplay',
        'title_zh-CN': '数据展示',
        children: [
          {
            title: 'Avatar 头像',
            link: '/components/avatar',
          },
        ],
      },
      {
        title: 'Other',
        'title_zh-CN': '其他',
        children: [
          {
            title: 'Affix 图钉',
            link: '/components/affix',
          },
        ],
      },
    ],
  };
  return (menus[opts.base] as [])?.map((menu: any) => {
    if (!opts.lang) return menu;
    return {
      ...menu,
      title: menu[`title_${opts.lang}`] || menu.title,
    };
  });
};

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'XYDesign',
    prefersColor: {
      switch: true,
      default: 'auto',
    },
    nav: [
      {
        title: '文档',
        link: '/docs',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      {
        title: 'Github',
        link: 'https://github.com/xiaoxiaoyang-sheep/xiaoyang-design',
      },
    ],
    sidebar: {
      '/zh-CN/docs': getMenus({ lang: 'zh-CN', base: '/docs' }),
      '/docs': getMenus({ base: '/docs' }),
      '/zh-CN/components': getMenus({ lang: 'zh-CN', base: '/components' }),
      '/components': getMenus({ base: '/components' }),
    },
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
});
