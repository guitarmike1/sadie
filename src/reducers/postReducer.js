const initState = [
    
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Blah Blah Blah'},
        {id: '2', title: 'Charmander Laid an Egg', body: '123 Blah Blah Blah'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'LBlah Blah Blah'}
]
    
    
    
    const postReducer = (state = initState, action) => {
        console.log(action);
        if(action.type === 'DELETE_POST'){
         let newPosts = state.posts.filter(post => {
           return post.id !== action.id
         });
         return {
           ...state,
           posts: newPosts
         }
        }
        console.log('postReducer post state = ',state)
        return state;
      }
      
      export default postReducer