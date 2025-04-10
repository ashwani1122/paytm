import Logout from "./logout";

export default function Appbar(){
        
    return(
        <div className="  flex justify-between items-center  w-full bg-pink-400 rounded-md mt-4 ">
            <div className="flex  w-full items-center justify-between h-full m-2 text-2xl ">
            PayTM App
            </div>
            <span className="flex   items-center  justify-end">
            <Logout/>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  ">
                    <div className="flex  h-full text-2xl justify-center items-center">
                        U
                    </div>
                </div>
            </span>
        </div>
    )
}