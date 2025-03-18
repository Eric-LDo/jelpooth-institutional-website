'use client'
const Footer = ()=>{
    const style:string = 'm-5 text-4xl text-shine'
    return(
        <footer className="w-full flex justify-center items-center gap-7 flex-row dark:bg-black bg-white mt-5">
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