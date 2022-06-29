import logoMob from "../assets/logo-mob.png";
import ErrorModal from "../../Components/ErrorModal";
import FormLayout from "../../Components/FormLayout";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { icons } from "../../utils/icons";
import ExperienceForm from "../../Components/ExperienceForm";
import { useState } from "react";
import exp from "constants";
import MultipleCheckbox from "../../Components/MultipleCheckbox";

const Preferences: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const { onChangeEvents, onSubmit, values } = useForm<
      "timeAvail" | "location" | "languages" | "strongSub" | "coverLetter" | "roles"
   >({
      inputs: {
         strongSub: { type: "text" },
         coverLetter: { type: "text" },
         languages: { type: "multiple-checkbox", value: [] },
         location: { type: "multiple-checkbox", value: [] },
         roles: { type: "multiple-checkbox", value: [] },
         timeAvail: { type: "multiple-checkbox", value: [] },
      },
      api: "candidate/update-job-pref",
   });

   return (
      <FormLayout>
         <div className="font-bold font-serif text-lg mb-10 text-center md:text-2xl mt-20">Preferences</div>
         <div className="text-base font-bold font-serif text-center mb-5">Choose the timing of job you prefer</div>
         <MultipleCheckbox
            onChange={onChangeEvents.onTimeAvailChange}
            options={["Full-time", "Part-time", "Freelancing"]}
            value={values.timeAvail as string[]}
         ></MultipleCheckbox>

         <div className="text-base font-bold font-serif text-center mt-20 mb-5">
            Choose the location of job you prefer
         </div>
         <MultipleCheckbox
            onChange={onChangeEvents.onLocationChange}
            options={["Work from home", "Work from office", "No Work"]}
            value={values.location as string[]}
         ></MultipleCheckbox>
         <div className="text-base font-bold font-serif text-center mt-20 mb-5">Choose the languages you prefer</div>
         <MultipleCheckbox
            onChange={onChangeEvents.onLanguagesChange}
            options={["English", "Hindi", "Tamil", "Telugu"]}
            value={values.languages as string[]}
         ></MultipleCheckbox>
         <div className="text-base font-bold font-serif text-center mt-20 mb-5">What roles you are looking for?</div>
         <MultipleCheckbox
            onChange={onChangeEvents.onRolesChange}
            options={["Evaluator", "Tutor", "Mentor", "Role 1", "Role 2"]}
            value={values.roles as string[]}
         ></MultipleCheckbox>

         <div className="text-base font-bold font-serif text-center mt-20 mb-5">What is your strong subject?</div>
         <input
            type="text"
            onChange={(e) => onChangeEvents.onStrongSubChange(e.target.value)}
            placeholder="Strong subject"
            value={values.strongSub as string}
         ></input>
         <div className="text-base font-bold font-serif text-center mt-20 mb-5">Write your cover letter</div>
         <textarea
            rows={10}
            onChange={(e) => onChangeEvents.onCoverLetterChange(e.target.value)}
            placeholder="Enter your cover lettter here"
            value={values.coverLetter as string}
         ></textarea>
         {/* <div className="text-base font-normal text-center mb-5">Choose the timing of job you prefer</div>
         <MultipleCheckbox
            onChange={(value) => setPrefs(value)}
            options={["Full-time", "Part-time"]}
            value={prefs}
         ></MultipleCheckbox> */}
         <div className="flex items-center mt-20 h-full justify-end flex-col gap-7 w-full">
            <div className="btn w-full" onClick={onSubmit}>
               Next
            </div>
         </div>
      </FormLayout>
   );
};

export default Preferences;
