import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/input";
import SubHeading from "../components/Subheading";
import axios from "axios";
import WarningButton from "../components/WarningButton";
export  default function signup(){
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-slate-200 ">
            
            <div className="border   shadow-lg rounded-md px-2">
                <Heading Label="Signup"/>
                <SubHeading Label="Enter your information to create an account"/>
                <Input onchange={(e: any)=>setFirstName(e.target.value)} Label="First Name" placeholder="Enter your first name"/>
                <Input onchange={(e: any)=>setLastName(e.target.value)} Label="Last Name" placeholder="Enter your last name"/>
                <Input onchange={(e: any)=>setEmail(e.target.value)} Label="Email" placeholder="Enter your email"/>
                <Input onchange={(e: any)=>setPassword(e.target.value)} Label="Password" placeholder="Enter your password"/>
                <Button onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/user/signup",{
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                    })
                }} />
                <WarningButton lable={"Already have an account?"} buttonText={"Signin"} to ={"/signin"}/>
            </div>
        </div>
    )
}