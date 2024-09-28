import { useContext, useState } from "react";
import { Component3 } from "./Component3";
import { CounterContext } from "./ComponentRoot";


export function Component2() {
    let [ctx, setCtx] = useContext(CounterContext);
    return (<div>
        <h2>Component2 nesting Component3</h2>
        <h3>Counter in component2: {ctx}</h3>
        <button className="btn btn-primary btn-lg" onClick={()=>setCtx(ctx+5)}>
            ButtonInComponent2 + 5
        </button>
        <Component3 />
    </div>);
}

export function Component4() {
    let [ctx, setCtx] = useContext(CounterContext);
    let [counter3, setCounter3] = useState(ctx);
    return (<div>
        <h2>This is component3</h2>
        <h3>Counter:{ctx}</h3>
    </div>)
}