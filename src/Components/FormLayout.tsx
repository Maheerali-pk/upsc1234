import { icons } from "../utils/icons";
import logoMob from "../assets/logo-mob.png";

interface FormLayoutProps {
   children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
   return (
      <div className="grid grid-flow-col md:grid-cols-[60%_40%] h-full ">
         <div className="bg-gray-400 h-full hidden md:block"></div>
         <div className="flex flex-col w-full bg-white px-8 md:px-28  my-auto h-full  py-5 relative overflow-auto">
            <div className="flex justify-between mb-12 md:hidden">
               <img src={logoMob}></img>
               <div className="cursor-pointer">{icons.close}</div>
            </div>
            <div className="flex-col flex h-full md:h-fit">{children}</div>
         </div>
      </div>
   );
};

export default FormLayout;
