import classNames from "classnames";
import { useState } from "react";
import FormLayout from "../Components/FormLayout";

interface SelectAccountTypeProps {}

const SelectAccountType: React.FC<SelectAccountTypeProps> = () => {
   const [selected, setSelected] = useState<"candidate" | "company" | "">("");
   const onClickOnNext = () => {};
   return (
      <FormLayout>
         <div className="flex-col flex">
            <div className="font-bold font-serif text-lg mb-10 text-center md:text-2xl mt-20">
               What are you looking for?
            </div>
            <div
               onClick={() => setSelected("candidate")}
               className={classNames(
                  "mh-56 h-56 mb-7 gap-1 rounded-2xl flex flex-col justify-center border border-gray-500 items-center cursor-pointer",
                  { "border-green-500": selected === "candidate", "bg-green-200": selected === "candidate" }
               )}
            >
               <div className="text-lg md:text-2xl text-center">I’m looking for work</div>
               <div className="text-base font-normal w-1/2 text-center">
                  Find jobs on UPSC Work by creating a student profile
               </div>
            </div>
            <div
               onClick={() => setSelected("company")}
               className={classNames(
                  "mh-56 h-56 mb-7 gap-1 rounded-2xl flex flex-col justify-center border border-gray-500 items-center cursor-pointer",
                  { "border-green-500": selected === "company", "bg-green-200": selected === "company" }
               )}
            >
               <div className="text-lg md:text-2xl text-center">I’m looking for Talent</div>
               <div className="text-base font-normal w-1/2 text-center">
                  Hire potential talent for your company by creating a recruiter profile
               </div>
            </div>
         </div>
         <div className="flex items-center mt-20 h-full justify-end flex-col gap-7 w-full">
            <div className="btn w-full" onClick={onClickOnNext}>
               Next
            </div>
         </div>
      </FormLayout>
   );
};

export default SelectAccountType;
