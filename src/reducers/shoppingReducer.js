const shoppingReducer = (state = [
    {item: "chocolate", price: 4, quantity: 5}    
], action) => {
    switch(action.type){
        case "UPDATE_SHOP":
            return {
                ...state, 
                type: "UPDATE_SHOP",
                payload: action.payload
            }
        case "UPDATE_QUANTITY": 
            return state.map(product => {
                if (product.item === action.payload.name){
                    return {...product, quantity: product.quantity - action.payload.quantity}
                }
            })
        default: 
            return state
    }
}

export default shoppingReducer