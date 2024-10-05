
/*
Inside the user[] add user object
having id, name & phone
ReadStore -> displays the user[]
WriteStore -> a form with id, name & phone
*/


let initialState = {
    username : "Guest",
    user : []
}
// a reducer function with action creators
function reducer(state = initialState, action : any) {
    console.log(`reducer fn prints state`);
    console.log(state);
    // action : {type & paylaod}
    // we must use switch or if else to recognize the actions
    if(action.type == 'UPDATE_NAME') {
        return {...state, 
            "username":action.payload}
    }
    if(action.type == 'RESET') {
        return {...state, 
            "username":"Guest"}
    }
    return state;
}
export default reducer;