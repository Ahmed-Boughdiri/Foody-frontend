import Axios from "./Axios";
import { saveToken } from "./SaveToken";

export async function register(username:String,email:String,password:String) {
    const req = await Axios.post("/api/auth/register",{ username,email,password });
    const res = await req.data;
    if(req.status === 201) {
        await saveToken(res.token);
        return res.token
    } else {
        return {
            error: res.error
        }
    }
}

export async function login(username:String,email:String,password:String) {
    const req = await Axios.post("/api/auth/login",{ email,password,username })
    const res = await req.data;
    if(req.status === 400) {
        // Return An Error
        return {
            error: res.error
        }
    } else {
        await saveToken(res.token)
        return res.token
    }
}

export async function loginWithToken(token:String){
    const req = await Axios.post("/api/auth/token",{ token });
    const res = await req.data;
    if(req.status === 400) {
        if(res.error === "Invalid") {
            return false
        }
    } else {
        return true
    }
}
