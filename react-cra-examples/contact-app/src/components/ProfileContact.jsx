import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom"
import {useEffect, useState} from 'react';
import axios from "axios";
const  BASE_URL = 'http://localhost:9999';

export function ProfileSuccess() {
    let {id} = useParams();
    let [profile, setProfile]=useState({});
    useEffect(()=>{
            axios.get(`${BASE_URL}/profile/${id}`).then(value=>setProfile(value.data));
        
    },[id]);

    return (<div className="row">
        <div className="col-4">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACUCAMAAADS8YkpAAAAM1BMVEXk5ueutLfr7O3n6eqqsLTh4+S3vL/d4OHU19nKztCnrrHb3d/GysyyuLvY29zR1da/xMYIdtfNAAAEIklEQVR4nO2c2a7jIAxAQ8wSSEj4/68d6KJppxtgYhNNzkul+3RkOWaz7zCcnJycnJycnJycnJyc/MdAglsigySpzLpZaxc7GXX9S6/AMG+LFs7JC84JvWxzr8ajssFLKZ6QwodtGLndXgEI4iNLbzEGY5387CulVR0ZA1j/xTbh9NSNMAxB/NC9JAW35w1Y/W/ZlBS+i5yA7d+a8JmJWzbq2lzZxMYe4SJdITfeUgzWFfkKx1omYCrUjax8wjDnVYZHpFZsvoMu1k3CXAGGJbuQPeIsjzCsVboRwyIM5cl7I7Do2trw8iwbpuZju6HpdQdEeIVcyXUVIrwR6mW5ZmV7wM3EGTxqRDpEAnGAARVeITztqowpZldoSxrgvrZYIQKpr6pe2+5oQ6gLE9pXzJS+Zaegd0jKs2flTvLJ1xL6qi93Zbm+lB8cZq9zh/KYYfCfmxCEvnMDXUGnC2sDXUm3Itef3B5whDuIg/keL754Xcr8HSruoV6h0z1c/T3a+na0/cPR9mdN9r+U8c18wvqCpzxfNDi/BdIDPf58vNCe5zfsB0f8TnSw+51hxCWEJL8/Q95P0j9qoQKsyZ9lYUPoMtyvYy7YJccDEaaksTx615cI2rvUO2BqA8zUF1Pc/HDF8TWZ1GzbiXcOj0DFOY61/wHm8owg3fe+CE+F35yjfLZ4R+EyN3G3qpYtGx00URZcpknW3L0DKvMtmaPr4R2gso73lBcOP4DJ/yhsTlN3EHwFwH5tAfZbdx3hYPV7ZSm07c02AWpaXucDpF+moUPbBAxqtlqm+YtkGn+1nVWvtjfGEcy0RVYDI/dq9ps0ODRe6XuIKFrCYNY0O7RcsTYGeU5R7i3MMYyrDdo/1ISHX6+XyfQR6WihzLZo576uF+nb88s2K8WqPQ7GhiC+TeI8Sjuhg125hjBgNEvMgLL9uhTeh4k+yJD2OLXHeSnDOhBWZYgFNmQmwQdcXEioopzyoDq2f4Psw0phDCZrGCsLv/fxKGbCgkuEZ5ye9iwX0bZZbG9IvVu1yJgirCKoXZZrWHexFZcbteYhTgOl+9iKlMath6BgQvZ//6LtpeWIf4//gdTtCgWosG9wr7QqxrDunAt32uTEOJHIikZ1Aj8JUCCMf5ej1L0I4yI8kupeuqYwwvi2jHLhQ+mihJu0JZcLL7XbH+DQre9MQ/dAVVN1tU1byZ6oegJt0uNbh6yYqObLBlHTew3bftvzDHxxgDltRfH44bgw+5Z9cjWNDW0p++QYa9ndt+jxFt/ei8aVzB/imiPbUNCyOPKHt6glVHUQ3vjF5QaYY9v7huyBEmQvcit8bhNrB9XhQmYJbjBc0YTcRsAGwyttyBzRaDAc1IbcfwmAH75qRF77V4vhtiZkdrn345u5hbj3W7DTRQvC/8UfBdc41lCfqbMAAAAASUVORK5CYII=" width="150" height="150"></img>
            <p><b>Name: </b> {profile?.name}</p>
            <p><b>Profile Id: </b>{profile?._id}</p>
            <p><b>Birthday: </b>{new Date(profile?.dob).toLocaleDateString()}</p>
            <p><b>Phone: </b>{profile?.phone}</p>
        </div>
       
        <div className="col-8">
            <Link to="dashboard" className="btn btn-primary">Dashboard</Link> &nbsp;&nbsp;
            <Link to="addContacts" className="btn btn-primary">Add Contacts</Link> &nbsp;&nbsp;
            <Link to="viewContacts" className="btn btn-primary">View Contacts</Link> &nbsp;&nbsp;
            <Link to="/signin" className="m-5">Log Out</Link>   
            <h3 className="text-primary">Total Contacts: {profile.contactList?.length}</h3>
            <hr />
            <Routes>
                <Route path="" element={<div><h3>Dashboard Component</h3></div>} />
                <Route path="dashboard" element={<div><h3>Dashboard Component</h3></div>} />
                <Route path="addContacts" element={<div><h3>Add Contacts Form</h3></div>} />
                <Route path="viewContacts" element={<ContactList contactList={profile.contactList} />} />
            </Routes>
        </div>
    </div>)
}
function ContactList(props) {
    let contactList = props.contactList ?? [];
    return (<div>
        <table className='table'>
            <thead>
                <tr>
                    <th>SL No</th><th>Name</th><th>Phone</th><th>X</th>
                </tr>
            </thead>
            <tbody>
                {
                    contactList?.map((value, index)=><tr key={value.name}>
                        <td>{index+1}</td><td>{value.name}</td><td>{value.phone}</td>
                        <td>
                        <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>)
}
export function ProfileLogin() {
    let [id, setId] = useState("");
    let [password, setPassword] = useState("");
    let nav = useNavigate(); // to go to the success programatically
    let handleSubmit = (e) => {
        e.preventDefault();
        let url = `${BASE_URL}/login`;
        let body = {"_id":parseInt(id), "password": password};
        axios.post(url, body)
            .then(value=>nav(`/success/${value.data._id}`))
            .catch(err=>{
                setId(''); setPassword(''); 
                alert('Invalid credentials, please login again');
            });
    }
    return (<div className='w-25'>
        <h3 className='text-primary'>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <input type="number" value={id} onChange={e=>setId(e.target.value)} placeholder="Enter user id" className="form-control form-control-lg" required /> <br />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}  placeholder="Enter password" className="form-control form-control-lg" required/> <br />
            <input type="submit" value="Login"
            className="w-100 btn btn-primary btn-lg"></input>
        </form>
        <hr /> 
        <Link to="/signup" className="btn btn-info btn-lg w-100">Create Account</Link>
    </div>)
}
// add this component to the root component keep all your application components including routers in this
export function ProfileContact() {
    return (<div className="container">
            <Routes>
                <Route path="" element={<ProfileLogin />}></Route>
                <Route path="login" element={<ProfileLogin />}></Route>
                <Route path="signup" element={<div>Registration</div>}></Route>
                <Route path="success/:id/*" element={<ProfileSuccess />}></Route>
            </Routes>
    </div>);
}