import { combineReducers } from 'redux'
import postReducer from './postReducer'
import tableReducer from './tableReducer'
import videoSelectReducer from './videoReducer'
    
    
    
  
    console.log("rootReducer**************8")
  const rootReducer = combineReducers({
    posts: postReducer,
    list: tableReducer,
    videoPath:  videoSelectReducer
  })
      export default rootReducer