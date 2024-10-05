import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addName } from "./reducer";
// reads the store
function ReadStore() {
  let name = useSelector((state: any) => state.username.nameValue);//import useSelector
  return (<div>
    <h2>Read Store: {name}</h2>
  </div>)
} 
// write the store
function WriteStore() { 
  let name = useSelector((state:any) => state.username.nameValue);
  let [text, setText] = useState(''); // import useState
  let dispatch = useDispatch(); // import useDispatch
  let changeName = () => {
    dispatch(addName(text)); // earlier you used display ({ type: '', payload })
  }
  return (<div>
    <h2>Write Store: {name}</h2>
    <input type = "text" onChange = {(e)=>setText(e.target.value)} />
    <button onClick={changeName}>Change Name</button>
  </div>)
}
function App() {  
  return (<div>
      <h2>Root Component</h2><hr />
      <ReadStore />
      <WriteStore />
    </div>
  )
}

export default App
