'use client'
type Props = {
    children: React.ReactNode
    className?:String
}

const Pages=({children, className}:Props)=>{
    return(
        <div className={`flex flex-col pt-12 w-max-full h-auto h-min-screen  dark:text-white ${className}`}>
            {children}
        </div>
    )
}
export default Pages