export default function Input({Label, placeholder, onchange}: {Label: string, placeholder: string, onchange: any}){
    return(
        <div className="flex flex-col  justify-center w-full">
            <div className="text-xl  text-left py-5 px-4"> 
                {Label}
                <input onChange={onchange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xl"
                placeholder={placeholder}
                />
            </div>
        </div>
    )
}       