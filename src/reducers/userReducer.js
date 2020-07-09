const userReducer = ( state = {
    name: "Amer",
    age: 23
  }, action) => {
    switch (action.type){
        //due to promise in action, xx_FULFIFILLED needs to be addressed. 
      case "CHANGE_NAME_FULFILLED": 
        return {
          ...state, 
          name: action.payload
        }
      case "CHANGE_AGE" : {
        return {
          ...state, 
          age: action.payload
        }
      }
      default: 
      return state
    }
  }

  export default userReducer