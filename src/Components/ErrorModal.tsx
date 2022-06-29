import { useGlobalContext } from "../Contexts/GlobalContext";
import { icons } from "../utils/icons";

interface ErrorModalProps {}

const ErrorModal: React.FC<ErrorModalProps> = () => {
   const [state, dispatch] = useGlobalContext();
   if (state.error.message === "" && state.error.title === "") {
      return null;
   }
   return (
      <div className="rounded-lg pt-4 w-11/12 max-w-3xl pb-9 fixed shadow-full  bg-white abs-center z-10">
         <div className="flex w-full justify-end pr-4">
            <div
               className="cursor-pointer"
               onClick={() => dispatch({ setState: { error: { message: "", title: "" } } })}
            >
               {icons.close}
            </div>
         </div>
         <div className="px-5 md:px-15 pt-6 flex flex-col w-full">
            <div className="mb-3">{icons.error}</div>
            <div className="text-22 font-normal mb-2">{state.error.title}</div>
            <div className="text-base font-normal mb-11">{state.error.message}</div>
            <div className="flex gap-6 w-full flex-col">
               <div className="btn w-full">Action 1</div>
               <div className="btn-white w-full">Action 2</div>
            </div>
         </div>
      </div>
   );
};

export default ErrorModal;
