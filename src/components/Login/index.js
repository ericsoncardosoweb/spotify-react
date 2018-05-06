import { injectReducer } from '../../store/reducers'

// export default (store) => ({
//   path : '/',
//   getComponent (nextState, cb) {
//     require.ensure([], (require) => {
//       const Login = require('./containers/LoginContainer').default
//       const reducer = require('./modules').default

//       injectReducer(store, { key: 'userAuth', reducer })

//       cb(null, Login)

//     }, 'userAuth')
//   }
// })

import ModalLogin from './components/ModalLogin'

export default ModalLogin