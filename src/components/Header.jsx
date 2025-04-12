import { NavLink } from "react-router-dom"

export default function Header({title}) {
    return(
        <header className="h-16 flex flex-row items-center justify-center p-4 bg-surface relative">
            <NavLink to='/' className="h-10 w-10 rounded-full hover:shadow-xl absolute top-1/2 -translate-y-1/2 left-4 flex items-center justify-center">
                <svg className="ml-1 h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 19l-7-7 7-7" strokeWidth="2" />
                </svg>
            </NavLink>
            <h2 className="text-xl text-onSurface">{title}</h2>
        </header>
    )
}
