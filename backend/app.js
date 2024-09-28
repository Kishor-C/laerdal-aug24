import express from 'express';
import cors from 'cors';
import {save, findProfile, authenticate, addContact} from './db-operations.js';

// create an object of express that gives you methods like get, post, put, delete, listen, use
let app = express();
// add cors() & body parser to the express 
app.use(cors());
app.use(express.json()); // parses request body having JSON and converts to Javascript object

// start the server
app.listen(9999, ()=>console.log('server running in 9999'));

// calling save method with post
app.post('/profile', async (request, response)=> {
    let result = await save(request.body);
    if(result.errmsg != undefined) {
        response.status(201).json(result);
    } else {
        response.status(404).json(result);
    }
});
// calling authenticate method with post
app.post('/login', async (request, response) => {
    let {_id, password} = request.body;
    let result = await authenticate(_id, password);
    if(result != null) {
        response.status(200).json(result);
    } else {
        response.status(401).json({"error": "Invalid Credentials"});
    }
});
// calling fetchProfile method with get
app.get('/profile/:id', async (request, response)=> {
    let _id = parseInt(request.params.id); // reads /:id in string form
    let result = await findProfile(_id);
    console.log(result); 
    if(result != null) {
        response.status(200).json(result);
    } else {
        response.status(401).json({"error": "User with an "+_id+" not found"})
    }
});
// calling addContact method with put
app.put('/profile/:id/addContact', async(request, response) => {
    let _id = parseInt(request.params.id);
    let data = request.body;
    let result = await addContact(_id, data);
    response.status(200).json(result);
});