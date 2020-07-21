import { combineReducers } from 'redux'
import postReducer from './postReducer'
import tableReducer from './tableReducer'
    
    
    
  
    console.log("rootReducer**************8")
  const rootReducer = combineReducers({
    posts: postReducer,
    list: tableReducer
  })
      export default rootReducer