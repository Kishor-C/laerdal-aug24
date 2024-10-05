import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/*
    This must write the store
*/
export function WriteStore() {
    // component subscribing to the store
    let name = useSelector((state: any)=>state.username);
    let dispatch = useDispatch();
    // create a state to store the input value
    let [username, setUsername] = useState<string>("");
    // this callback passes value to the store
    let changeName = () => {
        dispatch({type:'UPDATE_NAME', payload : username});
    }
    let resetName = () => 
        dispatch({type:'RESET'});    

    return (<div>
        <h2>Write Store: {name}</h2>
        <input type = 'text' 
            onChange={e=>setUsername(e.target.value)}/>
        <button onClick={changeName}>Update Name</button>
        <br />
        <button onClick={resetName}>Reset Name</button>
        <br />
        <input type = 'text' placeholder="Change name on each input"
            onChange={e=>dispatch({type:'UPDATE_NAME', payload:e.target.value})}/>
    </div>);
}