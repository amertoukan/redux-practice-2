//ASYNC Function
export function setName (name) {
    //async functions need redux-thunk
    // return dispatch => {
        // setTimeout(()=>{
        //     console.log('ASYNC FUNCTION CALLED')
        //     dispatch({
        //         type: "CHANGE_NAME",
        //         payload: name
        //     })
        // }, 2000)

    // }
//WITH PROMISES 
//npm i redux-promise-middleware
    return{
        type: "CHANGE_NAME", 
        payload: new Promise ((resolve,reject) => {
            setTimeout(()=>{
                resolve(name)
            }, 200)
        })
    }
}

//SYNC FUNCTION
export function setAge (age) {
    return {
        type: "CHANGE_AGE",
        payload: age
    }
}