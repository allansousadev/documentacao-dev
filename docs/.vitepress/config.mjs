import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentação Dev",
  description: "Documentação pessoal de código",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docker', link: '/docker/descomplicando-docker' },
      { text: 'PHP', link: '/php/introducao' }
    ],

    sidebar: [
      {
        text: 'Docker',
        items: [
          { text: 'Introdução', link: '/docker/introducao' },
          { text: 'Containers', link: '/docker/containers' }
        ]
      },
      {
        text: 'PHP',
        items: [
          { text: 'Introdução', link: '/php/introducao'},
          { text: 'Ambiente de Desenvolvimento Docker', link: '/php/ambiente_de_desenvolvimento' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/allansousadev' }
    ]
  }
})
