import { useEffect, useState } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";

interface ChangeNumberDialogProps {}

const ChangeNumberDialog: React.FC<ChangeNumberDialogProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const [tempPhone, setTempPhone] = useState(state.phoneNumber || "");

   useEffect(() => {
      setTempPhone(state.phoneNumber || "");
   }, [state.phoneNumber]);
   if (!state.showChangeNumberDialog) {
      return null;
   }
   return (
      <div className="shadow-full w-11/12 md:w-1/2 bg-white p-7 z-10 abs-center">
         <div className="font-serif font-bold mb-15 text-lg">Edit mobile number</div>
         <input
            className="mb-8 w-full"
            type="text"
            value={tempPhone}
            onChange={(e) => setTempPhone(e.target.value)}
         ></input>
         <div className="flex">
            <div
               className="text-lg cursor-pointer mr-7"
               onClick={() => dispatch({ setState: { phoneNumber: tempPhone, showChangeNumberDialog: false } })}
            >
               Save
            </div>
            <div
               className="text-lg cursor-pointer"
               onClick={() => {
                  setTempPhone(state.phoneNumber || "");
                  dispatch({ setState: { showChangeNumberDialog: false } });
               }}
            >
               Cancel
            </div>
         </div>
      </div>
   );
};

export default ChangeNumberDialog;
