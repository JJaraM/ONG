export default {
    options: [
      {
        to: '/dashboard',
        label: 'menu.home',
        icon: 'home'
      },
      {
        to: '/ui',
        label: 'menu.uiElements',
        icon: 'bookmark'
      },
      {
        to: '?',
        label: 'menu.settings',
        icon: 'settings',
        subMenu: [
          {
            to: '/settings/themes',
            label: 'menu.themes',
            icon: 'settings'
          },
          {
            to: '/settings/users',
            label: 'menu.users',
            icon: 'person'
          }
        ]
      }
    ]
}
