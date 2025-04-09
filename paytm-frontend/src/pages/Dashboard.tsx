import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Input from "../components/input";
import UserList from "../components/UserList";
import axios from "axios";
export default function Dashboard(){
    const [ filter, setFilter] = useState("");
    const [ users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
        .then((response)=>{
            //@ts-ignore
            setUsers(response.data.users)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[filter])
    return(
            <div  className=" h-screen">
                <div className="w-full flex ">
                <Appbar/>
                </div>
                <div className=" flex ">
                <Balance  balance={1000}/>
                </div>
                <Input onchange={(e: any)=>{
                    setFilter(e.target.value)
                }}  Label="Users" placeholder="Search for users"/>
                <span className=" flex flex-col justify-center items-center rounded-lg  ">
                <UserList  users={users}/>
                </span>
            </div>
    )
}