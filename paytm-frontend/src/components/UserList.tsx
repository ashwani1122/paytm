import Button from "./Button";

export default function UserList({users}: {users: any[]}) { 
    return(
        <>
            <div className=" w-full   text-center flex justify-center items-center  ">
            </div>
            <div className="flex flex-col  w-full justify-center items-center gap-2">
                {users.map((user: any) => (
                    <div className=" border   rounded-full  text-center flex  justify-between items-center  w-full  ">
                        <div className=" flex justify-center items-center gap-1  px-2 py-1 rounded-md">
                            <div className="flex   text-xl justify-center items-center  rounded-full h-10 w-10 bg-slate-200 ">
                                {user.firstName[0]}
                                
                            </div>
                            {user.firstName} {user.lastName}
                    </div>
                    
                    <Button onClick={()=>{
                        console.log(user)
                    }} />
                    </div>
                ))}
            </div>
            </>
        
    )
}