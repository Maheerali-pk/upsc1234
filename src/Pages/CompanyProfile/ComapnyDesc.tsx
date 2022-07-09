import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLayout from "../../Components/FormLayout";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { icons } from "../../utils/icons";
interface LoginProps {}

const CompanyDescription: React.FC<LoginProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const nav = useNavigate();

   const { values, onChangeEvents, onSubmit } = useForm<"description" | "image">({
      inputs: {
         description: { type: "text" },
         image: { type: "text" },
      },
      api: "account/update-company-desc",
      onSucess: () => {
         nav({ pathname: "/otp" });
      },
   } as const);
   const onClickOnNext = () => {};

   return (
      <FormLayout>
         <div className="font-bold font-serif text-lg mb-14 text-center">Tell us about your compnay</div>
         <div className="flex justify-center w-full mb-18">
            <input type="file" onChange={(e) => {}} className="hidden" id="companyLogo"></input>
            <label className="flex flex-col gap-3 w-fit" htmlFor="companyLogo">
               <div className="flex h-36 w-36 items-center bg-gray-150 justify-center">{icons.dummyLogo}</div>
               <div className="text-blue-400 underline cursor-pointer">Add your company logo</div>
            </label>
         </div>
         <textarea
            rows={8}
            placeholder="Add a description to your company"
            value={values.description as string}
            onChange={(e) => onChangeEvents.onDescriptionChange(e.target.value)}
         ></textarea>
         <div className="flex justify-center mt-18">
            <div className="btn w-full" onClick={onClickOnNext}>
               Next
            </div>
         </div>
      </FormLayout>
   );
};

export default CompanyDescription;
