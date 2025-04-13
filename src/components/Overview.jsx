import { NavLink } from "react-router-dom"

export default function Overview() {
    return(
        <>
            <div>
                <div className="bg-leaves bg-center bg-no-repeat bg-cover w-screen h-32 flex items-center">
                    <h1 className="text-white ml-4 text-base">CT30A2804 User Interfaces and Usability</h1>
                </div>
                <div className="w-screen h-12 grid grid-cols-3 bg-surface border-b-2 border-outlineVariant text-center text-xs xs:text-sm">
                    <div className="grid justify-items-center items-center hover:bg-outlineVariant">
                        <div className="h-full w-fit border-b-4 border-primary grid justify-items-center items-center px-4">
                            <p className=" text-primary semibold-text">Grades</p>
                        </div>
                    </div>
                    <div className="grid justify-items-center items-center hover:bg-outlineVariant">
                        <p className=" text-onSurfaceVariant semibold-text">Participants</p>
                    </div>
                    <div className="grid justify-items-center items-center hover:bg-outlineVariant">
                        <p className=" text-onSurfaceVariant semibold-text">Course Feedback</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-9 mb-2 text-onSurfaceVariant text-sm flex flex-row justify-center">
                    <div className="mr-12 xs:mr-16 flex flex-col items-center justify-center">
                        <p className="semibold-text">Completion, %</p>
                        <div className="drop-shadow-lg mt-4 mb-2 mx-4 h-24 w-24 bg-primary rounded-full grid justify-items-center items-center overflow-hidden">
                            <div className="bg-surfaceContainerLowest h-24 w-24 polygon rounded-full"></div>
                        </div>
                        <p className="semibold-text">90%</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="semibold-text">Course Grade</p>
                        <div className="flex-grow flex items-center justify-center">
                            <h1 className="text-5xl text-center">5</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-4 w-4/5 max-w-2xl h-1 border-b border-outlineVariant"></div>
                <div className="scale-90 xs:scale-100 max-w-3xl justify-self-center mt-8 pb-12 grid grid-cols-2 gap-4 md:grid-cols-4 justify-items-center">
                    <NavLink to="/assignments" className="flex flex-col bg-onPrimary h-40 w-40 items-center justify-around text-onSurface rounded-3xl border shadow-xl hover:bg-surfaceContainerHigh hover:drop-shadow-xl">
                        <h2 className="text-lg">Assignments</h2>
                        <h1 className="text-primary text-3xl">30/40</h1>
                        <p>pts.</p>
                    </NavLink>
                    <NavLink to="/quizzez" className="flex flex-col bg-onPrimary h-40 w-40 items-center justify-around text-onSurface rounded-3xl border shadow-xl hover:bg-surfaceContainerHigh hover:drop-shadow-xl">
                        <h2 className="text-lg">Quizzez</h2>
                        <h1 className="text-primary text-3xl">4/6</h1>
                        <p>pts.</p>
                    </NavLink>
                    <NavLink to="/" className="flex flex-col bg-onPrimary h-40 w-40 items-center justify-around text-onSurface rounded-3xl border shadow-xl hover:bg-surfaceContainerHigh hover:drop-shadow-xl">
                        <h2 className="text-lg">Course Project</h2>
                        <h1 className="text-primary text-3xl">10/10</h1>
                        <p>pts.</p>
                    </NavLink>
                    <NavLink to="/exam" className="flex flex-col bg-onPrimary h-40 w-40 items-center justify-around text-onSurface rounded-3xl border shadow-xl hover:bg-surfaceContainerHigh hover:drop-shadow-xl">
                        <h2 className="text-lg">Exam</h2>
                        <h1 className="text-primary text-3xl">45/50</h1>
                        <p>pts.</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
