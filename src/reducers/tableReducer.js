import faker from "faker";


// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
    location: faker.address.city()
  }));
const initState = list
    
    
const tableReducer = (state = initState, action) => {
    
    console.log('tableReducer post state = ',state)
    return state;
  }
  
  export default tableReducer