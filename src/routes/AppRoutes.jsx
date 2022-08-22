import React, { useLayoutEffect, Suspense } from 'react'
import { Center, Spinner } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { AppLayout as Layout } from '../layout'
import { Home } from '../pages'

export const routesObject = {
  home: 'home',
}

const {
  home,
} = routesObject

const RoutesDeclaration = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path={`${home}`}
        element={
          <Layout>
            <Home />
          </Layout> 
        }
      />
      <Route
        path="*"
        element={<Navigate to={`${home}`} replace />}
      />
    </Routes>
  )
}

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <Layout>
          <Center height="100%">
            <Spinner h={20} w={20} />
          </Center>
        </Layout>
      }
    >
      <RoutesDeclaration />
    </Suspense>
  </BrowserRouter>
)
