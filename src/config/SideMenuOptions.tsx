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
        to: '/settings',
        label: 'menu.settings',
        icon: 'settings',
        subMenu: [
          {
            to: '/users',
            label: 'menu.users',
            icon: 'person'
          }
        ]
      }
    ]
}
