const counterReducer = (state = 0,action) => {

    // const action = {type : "INCREMENT",payload : 10}
    switch (action.type){
        case "INCREMENT": 
            return state + action.payload // 0 + 1 = 1
        case "DECREMENT":
            return state - action.payload // 0 - 1 = -1
        case "MULTIPLE":
            return state * action.payload // 0 - 1 = -1
        case "SET":
            return action.payload
        
        default:
            return state
    }
  }

export default counterReducer