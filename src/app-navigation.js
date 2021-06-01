export const navigation = [
  {
    text: 'Inicio',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Tasks',
    path: '/tasks',
    icon: 'fields'
  },
  {
    text: 'Reportes',
    icon: 'copy',
    items: [
      {
        text: 'Reporte de Existencias',
        path: '/current-balance-report'
      },
      {
        text: 'Reporte de Costos',
        path: '/costs-report'
      }
    ]
  },
  {
    text: 'Transacciones',
    icon: 'detailslayout',
    items: [
      {
        text: 'Ingresos',
        path: '/inputs'
      },
      {
        text: 'Transformaciones',
        path: '/transformations'
      },
      {
        text: 'Salidas',
        path: '/outputs'
      }
    ]
  },
  {
    text: 'Configuraciones',
    icon: 'preferences',
    items: [
      {
        text: 'Items',
        path: '/items'
      },
      {
        text: 'Categorías',
        path: '/item-categories'
      },
      {
        text: 'Unidades de Medida',
        path: '/measurement-units'
      }
    ]
  },
  {
    text: 'Administración',
    icon: 'group',
    items: [
      {
        text: 'Usuarios',
        path: '/users'
      },
      {
        text: 'Grupos',
        path: '/groups'
      },
      {
        text: 'Permisos',
        path: '/permissions'
      }
    ]
  },
  {
    text: 'Perfil',
    path: '/profile',
    icon: 'user'
  },
  {
    text: 'Salir',
    path: '/signout',
    icon: 'runner'
  }
  ];
