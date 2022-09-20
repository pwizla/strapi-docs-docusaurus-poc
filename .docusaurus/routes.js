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
    path: '/docs',
    component: ComponentCreator('/docs', '969'),
    routes: [
      {
        path: '/docs/dev-docs/controllers',
        component: ComponentCreator('/docs/dev-docs/controllers', '5a1'),
        exact: true,
        sidebar: "devDocsSidebar"
      },
      {
        path: '/docs/dev-docs/dev-docs-intro',
        component: ComponentCreator('/docs/dev-docs/dev-docs-intro', '3a9'),
        exact: true
      },
      {
        path: '/docs/user-docs/intro',
        component: ComponentCreator('/docs/user-docs/intro', '71a'),
        exact: true
      },
      {
        path: '/docs/welcome',
        component: ComponentCreator('/docs/welcome', '9b8'),
        exact: true,
        sidebar: "devDocsSidebar"
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
