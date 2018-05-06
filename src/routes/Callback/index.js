import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'callback',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Callback = require('./callback').default
      const reducer = require('./reducer.js').default

      /*  Add the reducer to the store on key 'callback'  */
      injectReducer(store, { key: 'callback', reducer })

      /*  Return getComponent   */
      cb(null, Callback)

      /* Webpack named bundle   */
    }, 'callback')
  }
})
