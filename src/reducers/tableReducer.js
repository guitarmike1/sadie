import faker from "faker";


// Table data as an array of objects
// const list = new Array(3).fill(true).map(() => ({
//     name: faker.name.findName(),
//     description: faker.name.jobTitle(),
//     location: faker.address.city()
//   }));
// const initState = list

const initState = []

    
const tableReducer = (state = initState, action) => {
  console.log('tableReducer action = ',action)
    switch(action.type){
      case "VIDEO_TABLE":
        return action.value
        // return{
        //   // ...state,
        //   list: action.value
        // }
        

    }
    return state
    
  }
  
  export default tableReducer