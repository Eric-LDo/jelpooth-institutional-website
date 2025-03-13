
type Props = {
    children: React.ReactNode
}

const Pages=({children}:Props)=>{
    return(
        <div className="pt-12 w-screen h-auto h-min-screen font-sans dark:text-white">
            {children}
        </div>
    )
}
export default Pages