import { useSelector } from "react-redux";

/*
    This must read the store
*/
export function ReadStore() {
    // component subscribing to the store
    let name = useSelector((state: any)=>state.username);

    return (<div>
        <h2>Reading Store: {name}</h2>
    </div>);
}