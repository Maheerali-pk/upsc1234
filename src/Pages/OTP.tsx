import logoMob from "../assets/logo-mob.png";
import ChangeNumberDialog from "../Components/ChangeNumberDialog";
import ErrorModal from "../Components/ErrorModal";
import FormLayout from "../Components/FormLayout";
import { useGlobalContext } from "../Contexts/GlobalContext";
import { useForm } from "../hooks/useForm";
import { icons } from "../utils/icons";

const OTP: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const {
      values,
      onChangeEvents: { onOTPChange },
      onSubmit,
   } = useForm<"OTP">({
      inputs: {
         OTP: { type: "text" },
      },
      api: "account/login",
   } as const);

   return (
      <FormLayout>
         <ChangeNumberDialog></ChangeNumberDialog>
         <div className="font-bold font-serif text-lg mb-16 text-center md:text-2xl">Verify your mobile</div>

         <div className="text-base font-normal text-center mb-2">
            An OTP has been sent to your mobile number {state.phoneNumber || ""}
         </div>
         <div
            onClick={() => dispatch({ setState: { showChangeNumberDialog: true } })}
            className="text-base text-blue-400 cursor-pointer mb-10 text-center"
         >
            <u>Change number</u>
         </div>
         <div className="flex flex-col gap-5 mb-5">
            <input
               value={values.OTP as string}
               type="text"
               onChange={(e) => onOTPChange(e.target.value)}
               placeholder="OTP"
            />
         </div>

         <div className="text-base  cursor-pointer mb-10 text-center">
            <u>Resent OTP</u>
         </div>
         <div className="flex items-center flex-col flex-grow justify-end h-full gap-7 w-full">
            <div className="btn w-full" onClick={onSubmit}>
               Verify
            </div>
         </div>
      </FormLayout>
   );
};

export default OTP;
