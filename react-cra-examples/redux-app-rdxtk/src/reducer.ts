import { createSlice } from "@reduxjs/toolkit";

let nameSlice = createSlice({
    name : "username",
    initialState : {
        nameValue : "Guest",
        user : {id : 1234, name : "Xyz", phone: 99393}
    },
    reducers : {
        addName(state, action) {
            console.log(state);
            console.log(action);
            state.nameValue = action.payload;
            // earlier: return { ...state, "value":action.payload}
        },
        resetName(state, action) { 
            console.log(state);
            console.log(action)
            state.nameValue = "Guest";
        }
    }
});
console.log("_________ nameSlice=createSlice() _____________")
console.log(nameSlice);
/*
    nameSlice keeps reducers and actions in a property called actions & reducer
    nameSlice = { actions, reducer }
*/
export const {addName, resetName} = nameSlice.actions;
export default nameSlice.reducer;