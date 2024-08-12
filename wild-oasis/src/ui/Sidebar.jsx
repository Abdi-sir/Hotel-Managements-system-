import { NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import Logo from './Logo'
import { TbBrandBooking } from "react-icons/tb";
import { GiWoodCabin } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
function Sidebar() {
    return (<div className="bg-gray-500 p-8 border-r border-gray-100 row-span-full flex flex-col gap-8">
        <div>
           <Logo/>
        </div>
        <div>
            <nav>
                <ul>
                    <li> <NavLink to='/dashboard' className='flex items-center space-x-2'><FaHome /> <span>Home</span></NavLink></li>
                    <li><NavLink to='/bookings' className='flex items-center space-x-2'><TbBrandBooking/> <span>Bookings</span></NavLink></li>
                    <li><NavLink to='/cabins' className='flex items-center space-x-2'><GiWoodCabin/> <span>Cabins</span></NavLink></li>
                    <li><NavLink to='/users' className='flex items-center space-x-2'><CiUser/> <span>Users</span></NavLink></li>
                    <li><NavLink to='/settings' className='flex items-center space-x-2'><CiSettings/> <span>Settings</span></NavLink></li>

                </ul>
            </nav>

           
        </div>
    </div>
    )
}

export default Sidebar
