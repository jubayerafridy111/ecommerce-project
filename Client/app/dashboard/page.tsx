"use client";
import {useEffect} from "react";
import { getme } from "../../services/auth.service";


export default function Dashboard(){
    
    useEffect (() => {
        const fetchdata = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) return ;
        const user = await getme(token);
        console.log(user)
        }
        fetchdata();
    }, []);


    return (
        <div>
            <h1 className = "text-3xl text-black font-bold bg-cyan-100 m-10 p-10">Dashboard</h1>
        </div>
    )
}