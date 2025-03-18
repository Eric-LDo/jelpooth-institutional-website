'use client'
const Footer = ()=>{
    const style:string = 'm-3 md:m-5 text-2xl md:text-4xl text-shine'
    return(
        <footer className="w-full bg-gray-200 flex justify-center items-center gap-7 flex-row dark:bg-black mt-5">
            <a href="#">
                <i className={`pi pi-facebook ${style} `}></i>
            </a>
            <a href="#">
                <i className={`pi pi-twitter ${style}`}></i>
            </a>
            <a href="#">
                <i className={`pi pi-whatsapp ${style}`}></i>
            </a>
            <a href="#">
                <i className={`pi pi-instagram ${style}`}></i>
            </a>
        </footer>
    )
}
export default Footer