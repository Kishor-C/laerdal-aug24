// MongoClient has functions to esablish connection
import { MongoClient } from "mongodb";
const URL = 'mongodb://127.0.0.1:27017';

async function getConnection() {
    return await MongoClient.connect(URL);
}
export async function save(profileDocument) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw 'DB Connection Error';
    } else {
        let db = connection.db("laerdal_db");
        let promise = await db.collection("profiles").insertOne(profileDocument);
        connection.close();
        return promise;
    }
}
// login method that takes _id and password
export async function authenticate(id, password) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw 'DB Connection Error';
    } else {
        let db = connection.db("laerdal_db");
        let promise = await db.collection("profiles").findOne({$and:[{"_id":id}, {"password":password}]});
        connection.close();
        return promise;
    }
}
// findProfile method that takes _id and returns a promise
export async function findProfile(id) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw 'DB Connection Error';
    } else {
        let db = connection.db("laerdal_db");
        let promise = await db.collection("profiles").findOne({"_id":id});
        connection.close();
        return promise;
    }
}
// addContact method that takes _id and contact then returns a promise
export async function addContact(id, contact) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw 'DB Connection Error';
    } else {
        let db = connection.db("laerdal_db");
        let promise = await db.collection("profiles").updateOne({"_id":id}, {$push:{"contactList": contact}});
        connection.close();
        return promise;
    }
}
// test addContact & comment it
//addContact(1, {"contactId": 1001, "name":"Yuvraj", "phone":9900483939})
//.then(value=>console.log(value)).catch(err=>console.log(err))

// test the authenticate and comment the lines later - returns object or null
//authenticate(2, "brad123").then(value=>console.log(value));

// caller of save - comment this later
// save({_id:5, name:"Frank", password:"frank123", dob: new Date("1998-01-15"), phone:990080080})
// .then(value=>console.log(value))
// .catch(err=>console.log(err.errmsg))
// in command promt : node db-operations.js , use control + C to exit the terminal