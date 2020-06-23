import { combineReducers } from 'redux'
import postReducer from './postReducer'
import tableReducer from './tableReducer'
    
    
    
    const rootReducer = combineReducers({
      posts: postReducer,
      list:   tableReducer
    })
    
    
      
      export default rootReducer