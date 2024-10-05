import { useState } from "react";
import { ProfileContact } from "./components/ProfileContact";


class Employee {
  constructor(private _id: number, private name : string) { }

  display() : void {
    
  }
}

export type X = { 
  id : number
}

export interface UserType {
  id : number, name : string, phone: number
}

export interface CustomerType extends UserType{

}

function App() {
  let [name, setName] = useState<string>();

  let [profile, setProfile] = useState<UserType>();

 

  return (
    <div>
      <div className='alert alert-primary'>
        <h1 className='text-center'>Profile Contact Application</h1>
      </div>
      <div>
      <ProfileContact />
      </div>
    </div>
  )
}

export default App
