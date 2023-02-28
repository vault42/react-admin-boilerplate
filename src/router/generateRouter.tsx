import { Suspense } from 'react'
import { IRoute } from '@router'
import { AuthRequired } from './helper'

export const generateRouter = (routes: IRoute[]) => {
  return routes.map((route) => {
    if (route.children) {
      route.children = generateRouter(route.children)
    }
    route.element = (
      <Suspense fallback={<div />}>
        {route.auth ? (
          <AuthRequired>
            <route.component />
          </AuthRequired>
        ) : (
          <route.component />
        )}
      </Suspense>
    )
    return route
  })
}
