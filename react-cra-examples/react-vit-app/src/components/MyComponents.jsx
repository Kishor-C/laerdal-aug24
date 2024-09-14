import React, { useState } from "react";


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