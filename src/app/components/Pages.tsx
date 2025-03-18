'use client'
type Props = {
    children: React.ReactNode
}

const Pages=({children}:Props)=>{
    return(
        <div className="flex flex-col pt-12 w-full h-auto h-min-screen font-sans dark:text-white">
            {children}
        </div>
    )
}
export default Pages