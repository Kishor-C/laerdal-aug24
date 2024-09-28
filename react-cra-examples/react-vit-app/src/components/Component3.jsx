import { useContext } from "react"
import { CounterContext } from "./ComponentRoot"


export function Component3() {
    let [ctx, setCtx] = useContext(CounterContext)
    //let ctx = useContext(CounterContext);
    return (<div>
        <h2>This is component3</h2>
        <h3>Counter:{ctx}</h3>
    </div>)
}