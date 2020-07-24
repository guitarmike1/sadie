const initState = []

    
const videoReducer = (state = initState, action) => {
  console.log('videoReducer action = ',action)
    switch(action.type){
      case "VIDEO_SELECT":
        return action.value
        // return{
        //   // ...state,
        //   list: action.value
        // }
        

    }
    return state
    
  }
  
  export default videoReducer