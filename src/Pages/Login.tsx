import logoMob from "../assets/logo-mob.png";
import ErrorModal from "../Components/ErrorModal";
import FormLayout from "../Components/FormLayout";
import { useForm } from "../hooks/useForm";
import { icons } from "../utils/icons";
import { host } from "../utils/utils";
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
   const onLoginSuccess = (data: { access_token: string }) => {
      localStorage.setItem("auth-token", data.access_token);
   };
   const {
      values,
      onChangeEvents: { onEmailChange, onPasswordChange },
      onSubmit,
   } = useForm<"email" | "password">({
      inputs: {
         email: { value: "", type: "text" },
         password: { type: "text", value: "" },
      },
      onSucess: onLoginSuccess,
      api: "account/login",
   } as const);

   return (
      <FormLayout>
         <div className="font-bold font-serif text-lg mb-20">Login to your account</div>
         <div className="flex flex-col gap-5 mb-2">
            <input
               value={values.email as string}
               type="text"
               onChange={(e) => onEmailChange(e.target.value)}
               placeholder="Email"
            />
            <input
               value={values.password as string}
               type="text"
               onChange={(e) => onPasswordChange(e.target.value)}
               placeholder="Password"
            />
         </div>
         <div className="text-base text-blue-400 cursor-pointer mb-7">Forgot password</div>
         <div className="flex items-center flex-col gap-7 w-full">
            <div className="btn w-full" onClick={onSubmit}>
               Login
            </div>
            <div className="text-lg">or</div>
            <div className="btn-white w-full justify-center flex gap-3">
               {icons.google}
               Continue with Google
            </div>
         </div>
      </FormLayout>
   );
};

export default Login;
