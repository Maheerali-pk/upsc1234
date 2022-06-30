import { useForm } from "../hooks/useForm";

interface UPSCAttempFormProps {
   onChange: (data: IUPSCAttempt) => void;
   onClose: (id: string) => void;
   showCloseBtn?: boolean;
   id: string;
}

const UPSCAttemptForm: React.FC<UPSCAttempFormProps> = ({ onChange, onClose, id, showCloseBtn }) => {
   const { onChangeEvents, values } = useForm<
      "yearOfAttempt" | "qualifiedForMains" | "qualifiedForInterview" | "optSubject" | "language"
   >({
      inputs: {
         yearOfAttempt: { type: "number" },
         language: { type: "text" },
         optSubject: { type: "text" },
         qualifiedForInterview: { type: "checkbox" },
         qualifiedForMains: { type: "checkbox" },
      },
      onAnyChange: (data) => {
         onChange(data);
      },
   });

   return (
      <div className="flex flex-col gap-5 mb-12">
         <div className="flex gap-2 flex-col w-full">
            <div className="text-base font-normal">Start Year</div>
            <input
               type="text"
               onChange={(e) => onChangeEvents.onYearOfAttemptChange(e.target.value)}
               placeholder="Year"
               value={values.yearOfAttempt as string}
            ></input>
         </div>
         <div className="gap-4 flex">
            <input
               type="checkbox"
               checked={values.qualifiedForMains as boolean}
               onChange={(e) => onChangeEvents.onQualifiedForMainsChange(e.target.checked)}
            />
            <label className="text-base font-normal">Qualified for Mains</label>
         </div>
         <div className="gap-4 flex">
            <input
               type="checkbox"
               checked={values.qualifiedForInterview as boolean}
               onChange={(e) => onChangeEvents.onQualifiedForInterviewChange(e.target.checked)}
            />
            <label className="text-base font-normal">Qualified for Interview</label>
         </div>
         <input
            type="text"
            onChange={(e) => onChangeEvents.onOptSubjectChange(e.target.value)}
            placeholder="Optional Subject"
            value={values.optSubject as string}
         ></input>
         <input
            type="text"
            onChange={(e) => onChangeEvents.onLanguageChange(e.target.value)}
            placeholder="Language"
            value={values.language as string}
         ></input>
      </div>
   );
};

export default UPSCAttemptForm;
