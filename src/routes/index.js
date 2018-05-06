import CoreLayout from '../layouts/Template'
import Home from './Home'
import Callback from './Callback'
import CounterRoute from './Counter'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    Callback(store) 
  ]
})
 
export default createRoutes
