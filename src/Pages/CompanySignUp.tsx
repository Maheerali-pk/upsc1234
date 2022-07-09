import { useNavigate } from "react-router-dom";
import FormLayout from "../Components/FormLayout";
import { useGlobalContext } from "../Contexts/GlobalContext";
import { useForm } from "../hooks/useForm";
interface LoginProps {}

const SignupCompany: React.FC<LoginProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const nav = useNavigate();

   const {
      values,
      onChangeEvents: {
         onEmailChange,
         onPasswordChange,
         onCityChange,
         onNameChange,
         onAcceptTermsChange,
         onConfirmPasswordChange,
         onPhoneChange,
      },
      onSubmit,
   } = useForm<"email" | "password" | "name" | "phone" | "city" | "acceptTerms" | "purpose" | "confirmPassword">({
      inputs: {
         email: { value: "", type: "text" },
         password: { type: "text", value: "" },
         acceptTerms: { type: "checkbox", value: "" },
         city: { type: "text", value: "" },
         name: { type: "text", value: "" },
         phone: { type: "text", value: "" },
         purpose: { type: "text", value: "COMPANY" },
         confirmPassword: { type: "text", value: "" },
      },
      api: "account/signup",
      onSucess: () => {
         nav({ pathname: "/otp" });
      },
   } as const);

   return (
      <FormLayout>
         <div className="font-bold font-serif text-lg mb-14 text-center">Create your account</div>
         <div className="flex flex-col gap-5 mb-12">
            <input
               value={values.name as string}
               type="text"
               onChange={(e) => onNameChange(e.target.value)}
               placeholder="Comapny"
            />
            <input
               value={values.email as string}
               type="text"
               onChange={(e) => onEmailChange(e.target.value)}
               placeholder="Email"
            />
            <input
               value={values.phone as string}
               type="text"
               onChange={(e) => onPhoneChange(e.target.value)}
               placeholder="Phone number"
            />
            <input
               value={values.city as string}
               type="text"
               onChange={(e) => onCityChange(e.target.value)}
               placeholder="City"
            />
            <input
               value={values.password as string}
               type="text"
               onChange={(e) => onPasswordChange(e.target.value)}
               placeholder="Create a Password"
            />
            <input
               value={values.confirmPassword as string}
               type="text"
               onChange={(e) => onConfirmPasswordChange(e.target.value)}
               placeholder="Confirm Password"
            />
         </div>
         <div className="mb-18">
            <input
               checked={values.acceptTerms as boolean}
               type="checkbox"
               onChange={(e) => onAcceptTermsChange(e.target.checked)}
               id="terms-conds"
            />
            <label htmlFor="#terms-conds" className="font-normal text-base ml-4">
               I accept the <u>Terms & Conditions</u>
            </label>
         </div>
         <div className="flex items-center flex-col gap-7 w-full">
            <div
               className="btn w-full"
               onClick={() => {
                  dispatch({ setState: { phoneNumber: values.phone as string } });
                  onSubmit();
               }}
            >
               Create Account
            </div>
         </div>
      </FormLayout>
   );
};

export default SignupCompany;
