import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const createEvent = payload=> api.post("/event",payload);
export const deleteEvent = id=>api.delete("/event/"+id);
export const getEvents = ()=>api.get("/event/");