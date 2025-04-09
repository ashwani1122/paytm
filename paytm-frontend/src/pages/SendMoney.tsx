import Button from "../components/Button";
import Heading from "../components/Heading";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function SendMoney(){
        const [searchParams] = useSearchParams();
        const [amount , setAmount] = useState();
        const id = searchParams.get("id");
        const name = searchParams.get("name");
    return(
        <div key={id} className="flex flex-col h-screen justify-center items-center  px-4 py-4  rounded-md">
        
       
        <div className="flex flex-col justify-center px-5  
         items-center gap-5 shadow-lg rounded-md bg-slate-300">
            <Heading Label="Send Money"/>
            <div className="flex justify-center items-center pr-10 gap-1 ">
            <span className="rounded-full h-8 w-8 bg-green-700 flex justify-center items-center text-xl text-white">
                A
            </span>
            <span className=" flex justify-center items-center text-xl">
                {name?.toLocaleUpperCase()}
            </span>
            </div>
            <div>
            <input
            className=" border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-1"
            placeholder="Enter Amount" onChange={(e: any)=>{
                    setAmount(e.target.value)
            }}
            />
            </div>
            <Button color="green" onClick={ async ()=>{
            await axios.post("http://localhost:3000/api/v1/user/transferMoney",{
                    amount: amount,
                    to: id
                },
                {   
                    headers: {
                        'Authorization': localStorage.getItem("token")
                    }
                })
            }} label="Send Money"/>
        </div>
        </div>
    )
}