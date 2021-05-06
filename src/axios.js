import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-discord-clone.herokuapp.com",
});

export default instance;
