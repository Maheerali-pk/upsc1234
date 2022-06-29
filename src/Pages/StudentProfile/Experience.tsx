import logoMob from "../assets/logo-mob.png";
import ErrorModal from "../../Components/ErrorModal";
import FormLayout from "../../Components/FormLayout";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { icons } from "../../utils/icons";
import ExperienceForm from "../../Components/ExperienceForm";
import { useState } from "react";
import exp from "constants";
import { METHODS } from "http";
import { host } from "../../utils/utils";
interface LoginProps {}

const Experience: React.FC<LoginProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const [exps, setExps] = useState<(IExperience & { id: string })[]>([
      { compName: "", description: "", endDate: "", role: "", startDate: "", id: Math.random().toString() },
   ]);

   const onClickOnNext = () => {
      fetch(`${host}candidate/update-work-exp/`, {
         method: "POST",
         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("auth-token")}` },
         body: JSON.stringify(exps),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data, "from exp on next");
            if (data.statusCode === undefined) {
               dispatch({ setState: { error: { title: "", message: "" } } });
               console.log("Experience updated");
               console.log();
            } else {
               dispatch({ setState: { error: { title: data.error, message: data.message } } });
            }
         })
         .catch((err) => {});
   };
   return (
      <FormLayout>
         <div className="font-bold font-serif text-lg mb-14 text-center">Professional Experience</div>
         <div className="flex flex-col gap-10 mb-12">
            {exps.map((x, i) => (
               <ExperienceForm
                  key={x.id}
                  showCloseBtn={i !== 0}
                  onChange={(data) => {
                     const index = exps.findIndex((a) => a.id === x.id);
                     const newArray = [...exps.slice(0, index), { ...exps[index], ...data }, ...exps.slice(index + 1)];
                     setExps(newArray);
                  }}
                  id={x.id}
                  onClose={(id: string) => {
                     setExps([...exps.filter((y, j) => y.id !== id)]);
                  }}
               ></ExperienceForm>
            ))}
         </div>

         <div
            className="btn-outlined mb-16"
            onClick={() =>
               setExps([
                  ...exps,
                  { id: Math.random().toString(), compName: "", description: "", endDate: "", role: "", startDate: "" },
               ])
            }
         >
            Add another experience
         </div>
         <div className="flex items-center flex-col gap-7 w-full">
            <div className="btn w-full" onClick={onClickOnNext}>
               Next
            </div>
         </div>
      </FormLayout>
   );
};

export default Experience;
