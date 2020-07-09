export function updateStore (store, arr){
    return{
        type: "UPDATE_STORE",
        payload: store
    }
} 

export function updateQuantity (payload){
    return {
        type: "UPDATE_QUANTITY", 
        payload: {
            quantity: payload.quantity, 
            name: payload.name
        }
    }
}