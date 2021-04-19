export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607cf8731d8fad33ef5fa8d8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jaohj4se',
                  apiId: '12ee1534-1961-48e0-8df1-0fe803abcc1f'
                },
                {
                  buildHookId: '607cf873a4ca12d544773c88',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8kb7dvh4',
                  apiId: '1378860e-a35d-4b5e-912f-da85c66c8fc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/h4rtomo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8kb7dvh4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
