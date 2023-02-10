import { lazy, FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { generateRouter } from './generateRouter'

export interface IRoute {
  path: string
  auth: boolean
  component: React.LazyExoticComponent<FC>
  element?: JSX.Element
  children?: IRoute[]
}

const routes: IRoute[] = [
  {
    path: '/',
    auth: false,
    component: lazy(() => import('@layout')),
    children: [
      {
        path: '/',
        auth: false,
        component: lazy(() => import('@pages/dashboard'))
      },
      {
        path: '/user',
        auth: false,
        component: lazy(() => import('@pages/user'))
      },
      {
        path: '/setting',
        auth: false,
        component: lazy(() => import('@pages/setting'))
      },
      {
        path: '/dataflow',
        auth: false,
        component: lazy(() => import('@pages/dataflow'))
      },
      {
        path: '/datagrid',
        auth: false,
        component: lazy(() => import('@pages/datagrid'))
      },

      {
        path: '*',
        auth: false,
        component: lazy(() => import('@pages/404'))
      }
    ]
  },
  {
    path: '/login',
    auth: false,
    component: lazy(() => import('@pages/sign'))
  }
]

const Router = () => useRoutes(generateRouter(routes))
export { Router }
