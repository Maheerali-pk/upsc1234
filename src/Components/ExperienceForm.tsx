import { useForm } from "../hooks/useForm";
import { icons } from "../utils/icons";
import FormLayout from "./FormLayout";

interface ExperienceFormProps {
   onChange: (data: IExperience) => void;
   onClose: (id: string) => void;
   showCloseBtn?: boolean;
   id: string;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ onChange, showCloseBtn, onClose, id }) => {
   const { values, onChangeEvents } = useForm<"compName" | "startDate" | "endDate" | "description" | "role">({
      inputs: {
         compName: { type: "text" },
         startDate: { type: "text" },
         endDate: { type: "text" },
         description: { type: "text" },
         role: { type: "text" },
      },
      onAnyChange: (data) => {
         onChange(data);
      },
   });
   return (
      <div className="flex flex-col gap-5 mb-12">
         {showCloseBtn && (
            <div className="flex justify-end w-full">
               <div className="cursor-pointer" onClick={() => onClose(id)}>
                  {icons.close}
               </div>
            </div>
         )}
         {id}
         <input
            value={values.compName as string}
            type="text"
            onChange={(e) => onChangeEvents.onCompNameChange(e.target.value)}
            placeholder="Company"
         />
         <div className="flex gap-4 w-full">
            <div className="flex gap-2 flex-col w-full">
               <div className="text-base font-normal">Start Year</div>
               <input
                  type="date"
                  onChange={(e) => onChangeEvents.onStartDateChange(e.target.value)}
                  placeholder="Start date"
                  value={values.startDate as string}
               ></input>
            </div>
            <div className="flex gap-2 flex-col w-full">
               <div className="text-base font-normal">End Year</div>
               <input
                  type="date"
                  onChange={(e) => onChangeEvents.onEndDateChange(e.target.value)}
                  value={values.endDate as string}
                  placeholder="End date"
               ></input>
            </div>
         </div>
         <input
            value={values.role as string}
            type="text"
            onChange={(e) => onChangeEvents.onRoleChange(e.target.value)}
            placeholder="Role"
         />
         <textarea
            className="resize-none"
            rows={3}
            value={values.description as string}
            onChange={(e) => onChangeEvents.onDescriptionChange(e.target.value)}
            placeholder="Description"
         />
      </div>
   );
};

export default ExperienceForm;
