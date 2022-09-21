import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '120'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'da3'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4c6'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '1a3'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '602'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9fc'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'bdd'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e63'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ba5'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '41f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'f34'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '803'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '7bf'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'b1e'),
    exact: true
  },
  {
    path: '/openapi/',
    component: ComponentCreator('/openapi/', 'a25'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', '4ef'),
    routes: [
      {
        path: '/docs/next/dev-docs/api/admin-panel-api',
        component: ComponentCreator('/docs/next/dev-docs/api/admin-panel-api', '462'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/next/dev-docs/development/backend-customization/controllers',
        component: ComponentCreator('/docs/next/dev-docs/development/backend-customization/controllers', '5f6'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/next/dev-docs/development/backend-customization/middlewares',
        component: ComponentCreator('/docs/next/dev-docs/development/backend-customization/middlewares', 'f2b'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/next/hello',
        component: ComponentCreator('/docs/next/hello', '944'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/next/user-docs/content-types-builder/configuring-fields-content-type',
        component: ComponentCreator('/docs/next/user-docs/content-types-builder/configuring-fields-content-type', '51d'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/next/user-docs/content-types-builder/creating-new-content-type',
        component: ComponentCreator('/docs/next/user-docs/content-types-builder/creating-new-content-type', 'e10'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/next/user-docs/content-types-builder/introduction-to-content-types-builder',
        component: ComponentCreator('/docs/next/user-docs/content-types-builder/introduction-to-content-types-builder', 'c7f'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/next/user-docs/content-types-builder/managing-content-types',
        component: ComponentCreator('/docs/next/user-docs/content-types-builder/managing-content-types', '0e7'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/next/user-docs/intro',
        component: ComponentCreator('/docs/next/user-docs/intro', 'e38'),
        exact: true,
        sidebar: "userDocsSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '034'),
    routes: [
      {
        path: '/docs/dev-docs/api/admin-panel-api',
        component: ComponentCreator('/docs/dev-docs/api/admin-panel-api', '480'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/dev-docs/development/backend-customization/controllers',
        component: ComponentCreator('/docs/dev-docs/development/backend-customization/controllers', '95e'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/dev-docs/development/backend-customization/middlewares',
        component: ComponentCreator('/docs/dev-docs/development/backend-customization/middlewares', '8ad'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/hello',
        component: ComponentCreator('/docs/hello', '978'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/user-docs/content-types-builder/configuring-fields-content-type',
        component: ComponentCreator('/docs/user-docs/content-types-builder/configuring-fields-content-type', '4d9'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/user-docs/content-types-builder/creating-new-content-type',
        component: ComponentCreator('/docs/user-docs/content-types-builder/creating-new-content-type', 'bcd'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/user-docs/content-types-builder/introduction-to-content-types-builder',
        component: ComponentCreator('/docs/user-docs/content-types-builder/introduction-to-content-types-builder', '294'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/user-docs/content-types-builder/managing-content-types',
        component: ComponentCreator('/docs/user-docs/content-types-builder/managing-content-types', 'bfb'),
        exact: true,
        sidebar: "userDocsSidebar"
      },
      {
        path: '/docs/user-docs/intro',
        component: ComponentCreator('/docs/user-docs/intro', '54e'),
        exact: true,
        sidebar: "userDocsSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '571'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
