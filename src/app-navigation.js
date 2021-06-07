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
        text: 'Entradas',
        path: '/inputs'
      },
      {
        text: 'Salidas',
        path: '/outputs'
      },
      {
        text: 'Traslados',
        path: '/transfers'
      },
      {
        text: 'Transformaciones',
        path: '/transformations'
      },
      {
        text: 'Contabilidad',
        path: '/accounting'
      }
    ]
  },
  {
    text: 'Configuraciones',
    icon: 'preferences',
    items: [
      {
        text: 'Ubicaciones',
        path: '/locations'
      },
      {
        text: 'Items',
        path: '/items'
      },
      {
        text: 'Conversiones',
        path: '/conversions'
      },
      {
        text: 'Costos',
        path: '/costs'
      },
      {
        text: 'Vehículos',
        path: '/vehicles'
      },
      {
        text: 'Conductores',
        path: '/drivers'
      }
    ]
  }
];

// eslint-disable-next-line
const notUsed = {
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
};
