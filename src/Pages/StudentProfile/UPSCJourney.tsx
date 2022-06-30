import { useState } from "react";
import DegreeForm from "../../Components/DegreeForm";
import FormLayout from "../../Components/FormLayout";
import UPSCAttemptForm from "../../Components/UPSCAttemptForm";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { host } from "../../utils/utils";

const UPSCJourney: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const [upscAttempts, setUpscAttempts] = useState<(IUPSCAttempt & { id: string })[]>([
      {
         id: "0",
         language: "",
         optSubject: "",
         qualifiedForInterview: false,
         qualifiedForMains: false,
         yearOfAttempt: "",
      },
   ]);
   const onClickOnNext = () => {
      const dataToSend = [...upscAttempts];
      fetch(`${host}candidate/update-upsc-attempts/`, {
         method: "POST",
         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("auth-token")}` },
         body: JSON.stringify(dataToSend),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data === null || data.statusCode === undefined) {
               dispatch({ setState: { error: { title: "", message: "" } } });
               console.log("Academics updated", data);
            } else {
               dispatch({ setState: { error: { title: data.error, message: data.message } } });
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return (
      <FormLayout>
         <div className="font-bold font-serif text-lg mb-10 text-center md:text-2xl mt-20">UPSC Journey</div>

         <div className="gap-10">
            {upscAttempts.map((deg) => (
               <UPSCAttemptForm
                  id={deg.id}
                  onChange={(data) => {
                     const index = upscAttempts.findIndex((a) => a.id === deg.id);
                     const newArray = [
                        ...upscAttempts.slice(0, index),
                        { ...upscAttempts[index], ...data },
                        ...upscAttempts.slice(index + 1),
                     ];
                     setUpscAttempts(newArray);
                  }}
                  onClose={(id: string) => {
                     setUpscAttempts([...upscAttempts.filter((y, j) => y.id !== id)]);
                  }}
               ></UPSCAttemptForm>
            ))}
         </div>
         <div
            className="btn-outlined mb-16"
            onClick={() =>
               setUpscAttempts([
                  ...upscAttempts,
                  {
                     id: Math.random().toString(),
                     language: "",
                     optSubject: "",
                     qualifiedForInterview: false,
                     qualifiedForMains: false,
                     yearOfAttempt: "",
                  },
               ])
            }
         >
            Add another attempt
         </div>
         <div className="flex items-center mt-20 h-full justify-end flex-col gap-7 w-full">
            <div className="btn w-full" onClick={onClickOnNext}>
               Next
            </div>
         </div>
      </FormLayout>
   );
};

export default UPSCJourney;
