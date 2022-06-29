import logo from "../assets/logo.png";
import logoMob from "../assets/logo-mob.png";
import { icons } from "../utils/icons";
import { useState } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";
import classNames from "classnames";
interface NavbarProps {}

interface INavbarItem {
   text: string;
   link: string;
}
const navbarItems: INavbarItem[] = [
   { link: "/", text: "Find Work" },
   { link: "/", text: "Find Talent" },
   { link: "/", text: "Success Stories" },
   { link: "/", text: "Blog" },
];

const Navbar: React.FC<NavbarProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <div className="justify-between md:justify-start py-3 px-5 flex md:items-center md:w-full md:px-15 md:py-12">
         <img src={logo} className="h-10 mr-48 hidden md:block" />
         <img src={logoMob} className="h-8  md:hidden" />
         <div
            className={classNames(
               "md:static fixed p-4 md:flex md:flex-row z-10 top-0 overflow-hidden transition-all ease-in-out delay-200 h-full items-start right-0 w-9/12 shadow-full  md:shadow-none flex-col  md:items-center bg-white md:justify-between flex-grow md:w-full",
               { hidden: !state.showSidebar }
            )}
         >
            <div className="md:hidden flex justify-end w-full">
               <div className="cursor-pointer" onClick={() => dispatch({ setState: { showSidebar: false } })}>
                  {icons.close}
               </div>
            </div>
            <div className="flex md:flex-row gap-5 md:gap-10 flex-col md:items-center mr-auto ">
               {navbarItems.map((x) => (
                  <div className="text-xl md:text-2xl cursor-pointer">{x.text}</div>
               ))}
            </div>
            <div className="flex gap-10 flex-grow md:flex-grow-0 items-center">
               <div className="text-xl md:text-2xl cursor-pointer">Login</div>
               <div className="btn text-xl py-4 px-6 md:text-2xl">Sign up</div>
            </div>
         </div>
         <div onClick={() => dispatch({ setState: { showSidebar: true } })} className="md:hidden cursor-pointer">
            {icons.menu}
         </div>
      </div>
   );
};

export default Navbar;
