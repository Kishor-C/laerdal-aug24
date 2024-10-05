import axios from "axios";

export default function fetchUsers() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
}