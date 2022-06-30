/// <reference types="react-scripts" />
interface IInput {
   type: "number" | "text" | "select" | "checkbox" | "multiple-checkbox" | "radio";
   value?: IInputValue;
}

type IInputValue = string | string[] | boolean;
type UseFormProps<Names extends string> = { [k in Names]: IInput };

type ValueObject<Names extends string> = { [k in Names]: IInputValue };

type IExperience = ValueObject<"compName" | "startDate" | "endDate" | "description" | "role">;
type IDegree = ValueObject<"currentStudying" | "degree" | "stream" | "college" | "yearOfGrad" | "marks">;
type IUPSCAttempt = ValueObject<
   "yearOfAttempt" | "qualifiedForMains" | "qualifiedForInterview" | "optSubject" | "language"
>;
