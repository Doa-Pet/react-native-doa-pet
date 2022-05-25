import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { AppRoutes } from './app.routes'

import { AuthRoutes } from './auth.routes'

export const Routes = () => {
  const { signed } = useContext(AuthContext)

  return !signed ? <AuthRoutes /> : <AppRoutes />
}
