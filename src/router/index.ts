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
    auth: true,
    component: lazy(() => import('@layout')),
    children: [
      {
        path: '/',
        auth: true,
        component: lazy(() => import('@pages/dashboard'))
      },
      {
        path: '/user',
        auth: true,
        component: lazy(() => import('@pages/user'))
      },
      {
        path: '/setting',
        auth: true,
        component: lazy(() => import('@pages/setting'))
      },
      {
        path: '/dataflow',
        auth: true,
        component: lazy(() => import('@pages/dataflow'))
      },
      {
        path: '/datagrid',
        auth: true,
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
    component: lazy(() => import('@pages/login'))
  },
  {
    path: '/signup',
    auth: false,
    component: lazy(() => import('@pages/signup'))
  }
]

const Router = () => useRoutes(generateRouter(routes))
export { Router }
