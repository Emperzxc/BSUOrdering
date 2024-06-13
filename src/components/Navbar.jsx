import logo from '../assets/Batangas_State_Logo.png';
import {navItems} from '../constants';
import{useState} from 'react';
import {Menu, X} from 'lucide-react';
const Navbar = () => {
    const[hamburger, handleHamburger] = useState(false);
    const toggleNavbar = ()=>(
        handleHamburger(!hamburger)
    );
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neural-700/800">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center">
                <div className="flex item-center flex-shrink-0">
                    <img className="h-10 w-10"src={logo} alt="logo" />
                    <span className="text-xl tracking-tight flex items-center mx-2">BSU Online Ordering</span>
                </div>
                    <ul className="hidden lg:flex ml-14 space-x-12 items-center">
                        {navItems.map((item, index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex ml-14 space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md"> Sign In</a>
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-red-500 to-red-700">Create Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col items-center ">
                        <button onClick={toggleNavbar}>{hamburger ? <X/> : <Menu/>}</button>
                    </div>
            </div>
            {hamburger &&  (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                  <ul className="text-center mb-5">
                    {navItems.map((item, index)=>(
                        <li key={index} className="py-4">
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))}
                  </ul>
                  <div className="md:flex flex  flex-wrap space-x-6 items-center justify-center  " >
                    <a href="#" className="py-2 px-3 border rounded-md sm:mb-6">Sign In</a>
                    <a href="#" className="py-2 px-3 bg-gradient-to-r from-red-500 to-red-700 rounded-md">Create Account</a>

                  </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
