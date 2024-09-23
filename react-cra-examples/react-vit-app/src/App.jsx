import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { DemoComponent, Greetings, HelloComponent, SimpleForm, SimpleLogin, SuccessComponent, UsersList } from './components/MyComponents'
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  
  return (<div>
    <h2 className='alert alert-primary text-center'>React App with Vite</h2>
    <div className='container-fluid'>
      <Link to='/userList' className='btn btn-primary btn-lg m-1'>User List</Link> 
      <Link to='/greetings' className='btn btn-primary btn-lg m-1'>Greetings</Link> 
      <Link to='/simpleForm' className='btn btn-primary btn-lg m-1'>Simple Form</Link> 
      <Link to='/hello' className='btn btn-primary btn-lg m-1'>Hello Component</Link>
      <Link to='/demo' className='btn btn-primary btn-lg m-1'>Demo Component</Link> 
      <Link to='/login' className='btn btn-primary btn-lg m-1'>Login Component</Link> 
    </div>
    <div className='container-fluid'>
      <Routes>
        <Route path='' element={<SimpleLogin />}></Route>
        <Route path='login' element={<SimpleLogin />}></Route>
        <Route path='userList' element={<UsersList />}></Route>
        <Route path='simpleForm' element={<SimpleForm />}></Route>
        <Route path='hello' element={<HelloComponent counter="5"/>}></Route>
        <Route path='demo' element={<DemoComponent counter="20"/>}></Route>
        <Route path='greetings' 
          element={<Greetings name="Atharv" age={20} dob={new Date('2003-10-25')} gender="M"/>}></Route>
        <Route path='success/:user' 
          element={<SuccessComponent />} />
      </Routes>
    </div>
  </div>)
  
}

export default App
