import { createContext, useState } from "react";
import { Component1 } from './Component1';

export const CounterContext = createContext();

export function ComponentRoot() {
    let [counter, setCounter] = useState(0);
    return (<div>
        <h2>Root Component having global state in the context</h2>
        <CounterContext.Provider 
           value = {[counter, setCounter]}>
            <Component1 />
        </CounterContext.Provider>
        <div>
            <button onClick={()=>setCounter(counter+1)} className='btn btn-primary btn-lg'>
                ComponentRootButton
            </button>
        </div>
    </div>);
}