import { useState } from "react";
import FormLayout from "../../Components/FormLayout";
import StatePCAttemptForm from "../../Components/StatePCAttemptForm";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { host } from "../../utils/utils";

const StatePC: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const [attempts, setAttempts] = useState<(IStatePCAttempt & { id: string })[]>([
      {
         id: "0",
         language: "",
         optSubject: "",
         qualifiedForInterview: false,
         qualifiedForMains: false,
         yearOfAttempt: "",
         state: "",
      },
   ]);
   const onClickOnNext = () => {
      const dataToSend = [...attempts];
      fetch(`${host}candidate/update-state-attempts/`, {
         method: "POST",
         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("auth-token")}` },
         body: JSON.stringify(dataToSend),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data === null || data.statusCode === undefined) {
               dispatch({ setState: { error: { title: "", message: "" } } });
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
         <div className="font-bold font-serif text-lg mb-10 text-center md:text-2xl mt-20">State PCs</div>

         <div className="gap-10">
            {attempts.map((deg) => (
               <StatePCAttemptForm
                  id={deg.id}
                  onChange={(data) => {
                     const index = attempts.findIndex((a) => a.id === deg.id);
                     const newArray = [
                        ...attempts.slice(0, index),
                        { ...attempts[index], ...data },
                        ...attempts.slice(index + 1),
                     ];
                     setAttempts(newArray);
                  }}
                  onClose={(id: string) => {
                     setAttempts([...attempts.filter((y, j) => y.id !== id)]);
                  }}
               ></StatePCAttemptForm>
            ))}
         </div>
         <div
            className="btn-outlined mb-16"
            onClick={() =>
               setAttempts([
                  ...attempts,
                  {
                     id: Math.random().toString(),
                     language: "",
                     optSubject: "",
                     qualifiedForInterview: false,
                     qualifiedForMains: false,
                     yearOfAttempt: "",
                     state: "",
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

export default StatePC;
