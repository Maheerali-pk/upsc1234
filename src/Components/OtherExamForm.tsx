import { useForm } from "../hooks/useForm";

interface OtherExamFormProps {
   onChange: (data: IOtherExam) => void;
   onClose: (id: string) => void;
   showCloseBtn?: boolean;
   id: string;
}

const OtherExamForm: React.FC<OtherExamFormProps> = ({ onChange, onClose, id, showCloseBtn }) => {
   const { onChangeEvents, values } = useForm<OtherExamNames>({
      inputs: {
         title: { type: "text" },
         description: { type: "text" },
         yearOfAttempt: { type: "number" },
      },
      onAnyChange: (data) => {
         onChange(data);
      },
   });

   return (
      <div className="flex flex-col gap-5 mb-12">
         <input
            type="text"
            onChange={(e) => onChangeEvents.onTitleChange(e.target.value)}
            placeholder="Select Exam"
            value={values.title as string}
         ></input>
         <div className="flex gap-2 flex-col w-full">
            <div className="text-base font-normal">Year of attempt</div>
            <input
               type="number"
               onChange={(e) => onChangeEvents.onYearOfAttemptChange(e.target.value)}
               placeholder="Year"
               value={values.yearOfAttempt as string}
            ></input>
         </div>
         <input
            type="text"
            onChange={(e) => onChangeEvents.onDescriptionChange(e.target.value)}
            placeholder="Remarks"
            value={values.description as string}
         ></input>
      </div>
   );
};

export default OtherExamForm;
