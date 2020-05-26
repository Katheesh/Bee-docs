module.exports = {
  title: 'GitLeaf bee apps',
  description: 'Just create amazing apps',
  themeConfig: {
      smoothScroll: true,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: '/docs/' },
        { text: 'GitLeaf', link: 'https://gitleaf.com' }     
      ],
      sidebar: {
           '/docs/': [
               '',
              'Introduction',
              'Downloads'
           ],
           '/tamil/docs/': [
               '',
              'Introduction',
              'Downloads'
          ]
           
      },
      locales: {
      '/': {
        label: 'English',
        nav: [{ text: 'Home', link: '/' },
        { text: 'Documentation', link: '/docs/' },
        { text: 'GitLeaf', link: 'https://gitleaf.com' }]
      },
      '/tamil/': {
        label: 'தமிழ்',
        nav: [{ text: 'முகப்பு', link: '/tamil/' },
        { text: 'ஆவணப்படுத்தல்', link: '/tamil/docs/' },
        { text: 'GitLeaf', link: 'https://gitleaf.com' }   ]
      },
    }
    },
    locales: {   
      '/': {
        lang: 'English', // this will be set as the lang attribute on <html>
        title: 'GitLeaf bee apps',
        description: 'International Language',
        nav : [
        { text: 'Home', link: '/' },
         { text: 'Documentation', link: '/docs/' },
         { text: 'GitLeaf', link: 'https://gitleaf.com' }
        ]
      },
      '/tamil/': {
        lang: 'தமிழ்',
        title: 'GitLeaf bee apps',
        description: 'தமிழே எங்கள் தாய் மொழி',
        nav: [
          { text: 'முகப்பு', link: '/tamil/' },
          { text: 'ஆவணப்படுத்தல்', link: '/docs/' },
          { text: 'GitLeaf', link: 'https://gitleaf.com' }
        ]
      }
    }
}