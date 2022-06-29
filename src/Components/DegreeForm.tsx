import { useForm } from "../hooks/useForm";

interface DegreeFormProps {
   onChange: (data: IDegree) => void;
   onClose: (id: string) => void;
   showCloseBtn?: boolean;
   id: string;
}

const DegreeForm: React.FC<DegreeFormProps> = ({ onChange, onClose, id, showCloseBtn }) => {
   const { onChangeEvents, values } = useForm<
      "currentStudying" | "degree" | "stream" | "college" | "yearOfGrad" | "marks"
   >({
      inputs: {
         college: { type: "text" },
         degree: { type: "text" },
         marks: { type: "number" },
         stream: { type: "text" },
         yearOfGrad: { type: "number" },
         currentStudying: { type: "checkbox" },
      },
      onAnyChange: (data) => {
         onChange(data);
      },
   });

   return (
      <div className="flex flex-col gap-5 mb-12">
         <input
            type="text"
            placeholder="Degree"
            value={values.degree as string}
            onChange={(e) => onChangeEvents.onDegreeChange(e.target.value)}
         />
         <input
            type="text"
            placeholder="Stream"
            value={values.stream as string}
            onChange={(e) => onChangeEvents.onStreamChange(e.target.value)}
         />
         <input
            type="text"
            placeholder="College"
            value={values.college as string}
            onChange={(e) => onChangeEvents.onCollegeChange(e.target.value)}
         />
         <div className="flex   gap-4">
            <input
               type="text"
               placeholder="Year"
               className="w-full"
               value={values.yearOfGrad as string}
               onChange={(e) => onChangeEvents.onYearOfGradChange(e.target.value)}
            />
            <input
               type="text"
               className="w-full"
               placeholder="Marks"
               value={values.marks as string}
               onChange={(e) => onChangeEvents.onMarksChange(e.target.value)}
            />
         </div>
         <div className="gap-4 flex">
            <input
               type="checkbox"
               checked={values.currentStudying as boolean}
               onChange={(e) => onChangeEvents.onCurrentStudyingChange(e.target.checked)}
            />
            <label className="text-base font-normal">Currently studying</label>
         </div>
      </div>
   );
};

export default DegreeForm;
