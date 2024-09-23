import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export function SuccessComponent() {
    let {user} = useParams(); // success/:user will store value in user parameter

    return (<div>
        <h2>Hello {user} you logged in</h2>
    </div>)
}

export function SimpleLogin() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    // create an instance useNavigate
    let nav = useNavigate();
    let handleSubmit = (e)=> {
        e.preventDefault();
        nav('/success/'+username); // similar to <Link to="/success/dynamicUrl"
    }
    return (<div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' className='form-control form-control-lg w-25' 
                onChange={e=>setUsername(e.target.value)}   placeholder="Enter Username" /> <br />
            <input type='password' className='form-control form-control-lg w-25' 
                onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" />
            <br /> 
            <input type='submit' className='btn btn-primary btn-lg w-25'  value='Login' />
        </form>
    </div>)
}

export function UsersList() {
    const BASE_URL = "https://jsonplaceholder.typicode.com/users";
    let [users, setUsers] = useState([]); // initially empty array
    let [error, setError] = useState('');
    let [id, setId] = useState('');
    let [entity, setEntity] = useState({})
    let fetchUserById = () => {
        axios.get(`${BASE_URL}/${id}`)
        .then(value=>{setEntity(value.data); setUsers([value.data])})
        .catch(err => {setError('User with an id '+id+' not found'); setEntity({}); setUsers([])});
    }
    let loadUsers = () => {
        axios.get(BASE_URL).then(value=>setUsers(value.data)).catch(err=>setError('Something went wrong'))
    }
    return (<div>
        <h2>Loading the users from json placeholder</h2>
        <div>
            <h3>Search User by id</h3>
            <input className='w-25 form-control' type = 'number' onChange={e=>setId(e.target.value)} />
            <button className='btn btn-primary btn-lg' onClick={fetchUserById}>Search</button> <br /><br />
            {(entity.id == undefined) ? 
            <div className='text-danger'><h3>{error}</h3></div> : 
            <div className='text-success'><h3>Hello {entity.username}, you are found</h3></div>}
        </div>
        <button onClick={loadUsers} className='btn btn-primary btn-lg'>Fetch Users</button>
        <table className="table">
            <thead>
                <tr><th>Id</th><th>Username</th><th>Email</th><th>Street</th><th>Zip</th></tr>
            </thead>
            <tbody>
                {
                    users.map((value, index)=>
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.address.street}</td>
                        <td>{value.address.zipcode}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>)
}

// component that uses prop types
export function Greetings(props) {
    // assuming we get name, age, dob, gender via props
    let {name="Guest", age, dob, gender} = props;
    
    return (<div>
       <h2>Greetings component</h2>
       <p>Hello {name}, age: {age}, 
        dob: {dob.toLocaleDateString()}, 
        gender: {gender}
        </p>
    </div>)
}
// wherever you create the component there you need
// to define the prop types, propTypes 'p' is lower case
// while using Greetings.propTypes, however 'p' is upper case
// while accessing the types, because that's what imported
Greetings.propTypes = {
    name : PropTypes.string ,
    age : PropTypes.number,
    dob : PropTypes.instanceOf(Date),
    gender : PropTypes.oneOf(['M', 'F'])
}
//Greetings.defaultProps = { name : "Guest" }


export function DemoComponent(props) {
    let {counter} = props;
    let [name, setName] = useState('Guest');
    // useEffect must be written only in functional compnt
    useEffect(()=>{
        console.log('useEffect with [counter, name]');
    }, [counter, name]);
    useEffect(()=>{
        console.log('useEffect with []')
    }, []);
    useEffect(()=>{
        console.log('useEffect with [counter]')
    }, [counter]);
    useEffect(()=>{
        console.log('useEffect with [name]')
    }, [name]);
    useEffect(()=>{ 
        return ()=>{console.log('component unmount')}
    },[])
    return (<div>
        <h2>Demo Component, counter: {counter}</h2>
        <button onClick={()=>setName('Kishor'+Math.random())}>
            MyButton in child
        </button>
    </div>)

}

export class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor() is called');
    }
    render() {
        
        console.log('render() is called');
        return (<div>
            <h2>Counter: {this.props.counter}</h2>
        </div>)
    }
   
    componentDidUpdate() {
        // called when state or prop changes
        console.log('componentDidUpdate() is called');
    }
    componentWillUnmount() {
        // called when component is removed from the DOM
        console.log('componentWillUnmount() is called');
    }
    componentDidMount() {
        // called once component is added to the DOM
        console.log('componentDidMount called');
    }

    
}


export class MyForm extends React.Component {
    // constructor to initialize the props & state
    constructor(props) {
        super(props);
        this.state = {name : 'Guest', age : '18'}
    }
    // event handler
    handleSubmit = (e) => {
        e.preventDefault();

    }
    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name==='n1') {
            this.setState({name:value});
        }
        if(name==='n2') {
            this.setState({age:value})
        }
    }
    // override render function to write the UI logic
    render() {
        return (<div>
            <h2>Class based component</h2>
            <form onSubmit={this.handleSubmit}>
                <input type = 'text' name = 'n1' onChange = {this.handleInput} />
                <input type = 'number' name = 'n2' onChange = {this.handleInput} />
                <br />
                <input type = "submit" value = "Submit"/>
            </form>
            Hello {this.state.name}, your age is {this.state.age}
        </div>)
    }
}

export function SimpleForm() {
    // Guest is the initial value of name
    let [name, setName] = useState("Guest");// array destructure
    let [dob, setDob] = useState("");
    let [skills, setSkills] = useState([]);

    let handleSubmit = (e) => {
        // call the backend api
        e.preventDefault();
        console.log(`Name=${name} , DOB=${dob} and Skills=${skills} is submitted`);
    }
    let handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name==='n1') { 
            setName(value);
        }
        if(name==='n2') { 
            setDob(value);
        } 
        if(name==='skills') { 
            if(e.target.checked) {
                setSkills([...skills, value]);
            } else {
                setSkills(skills.filter((s) => s != value));
            }
        }
    }
    return (<div>
        <MyForm />
        <h2>Simple Form</h2>
        <form onSubmit = {handleSubmit}>
            <div>
                <input type = "text" placeholder="Enter name" name = "n1" onChange={handleInput}/>
            </div>
            <div>
                <label>Select Birthday:-</label>
                <input type = "date" name = "n2" onChange={handleInput} />
            </div>
            <div>
                <label>Select Skills:-</label>
                HTML <input type = "checkbox" value="HTML" name="skills" 
                    onChange={handleInput}/>  
                Javascript <input type = "checkbox" value="JS" name="skills" 
                    onChange={handleInput} />
                CSS <input type = "checkbox" value="CSS" name="skills" 
                    onChange={handleInput}  />
            </div>
            <input type = "submit" value = "Submit" />
            Hello {name}
        </form>
    </div>)
}