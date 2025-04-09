export default function Appbar(){
    return(
        <div className="shadow  flex justify-between items-center h-16 w-full  ">
            <div className="flex  w-full items-center justify-between h-full m-2 text-2xl ">
            PayTM App
            </div>
            <span className="flex  w-full items-center  justify-end">
                <div className="flex flex-col  justify-center h-full m-1 ">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  ">
                    <div className="flex  h-full text-2xl justify-center items-center">
                        U
                    </div>
                </div>
            </span>
        </div>
    )
}