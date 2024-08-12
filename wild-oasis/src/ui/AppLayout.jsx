import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

function AppLayout() {
    return (
        <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
            <Sidebar />
            <Header />
            <main className="bg-gray-200 p-16 overflow-scroll">
                <div className='max-w-[120rem] mx-auto flex flex-col gap-8'>
                    <Outlet/>
                </div>
            </main>
            
        </div>
    )
}

export default AppLayout
