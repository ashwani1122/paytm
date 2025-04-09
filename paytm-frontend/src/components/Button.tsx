export default function Button({onClick, label ,bgcolor}: {onClick: any, label: string, bgcolor?: string}){
    return(
        <div className="flex flex-col justify-center items-center  py-2 px-4 rounded-md ">
        <button style={{bgcolor}}  onClick={onClick} type="button" className=" text-gray-900 hover:text-white border hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2  text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 px-12 w-full text-2xl ">{label}</button>
        </div>
    )
}