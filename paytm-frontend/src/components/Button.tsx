export default function Button({onClick}: {onClick: any}){
    return(
        <div className="flex flex-col justify-center items-center px-4 py-4">
        <button onClick={onClick} type="button" className="text-gray-900 hover:text-white border hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-full text-2xl">Submit</button>
        </div>
    )
}