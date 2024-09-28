import { Component2 } from "./Component2";


export function Component1() {
    return (<div>
        <h2>Component1 nesting Component2</h2>
        <Component2/>
    </div>)
}