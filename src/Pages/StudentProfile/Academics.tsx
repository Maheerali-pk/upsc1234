import { type } from "os";
import { useState } from "react";
import DegreeForm from "../../Components/DegreeForm";
import FormLayout from "../../Components/FormLayout";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { host } from "../../utils/utils";

interface IBoard {
   text: string;
   value: string;
}
const boards: IBoard[] = [
   { text: "Board 1", value: "b1" },
   { text: "Board 2", value: "b2" },
   { text: "Board 3", value: "b3" },
];

const Academics: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const { values: boardValues1, onChangeEvents: onChangeEventsBoard1 } = useForm<
      "board" | "yearOfGard" | "percentage"
   >({
      inputs: { board: { type: "text" }, percentage: { type: "number" }, yearOfGard: { type: "number" } },
   });
   const { values: boardValues2, onChangeEvents: onChangeEventsBoard2 } = useForm<
      "board" | "yearOfGard" | "percentage"
   >({
      inputs: { board: { type: "text" }, percentage: { type: "number" }, yearOfGard: { type: "number" } },
   });
   const [degrees, setDegrees] = useState<(IDegree & { id: string })[]>([
      { college: "", currentStudying: "", degree: "", id: "0", marks: "0", stream: "", yearOfGrad: "" },
   ]);
   const onClickOnNext = () => {
      const dataToSend = { boardExams: [boardValues1, boardValues2], grads: [...degrees] };
      console.log(dataToSend, "data");
      fetch(`${host}candidate/update-work-exp/`, {
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
         <div className="font-bold font-serif text-lg mb-10 text-center md:text-2xl mt-20">Academics</div>

         <div className="flex flex-col gap-5 mb-12">
            <div className="flex gap-2 flex-col w-full">
               <div className="text-base font-normal">Class X</div>
               <select className="w-full" onChange={(e) => onChangeEventsBoard1.onBoardChange(e.target.value)}>
                  <option value=""> Class X Board</option>
                  {boards.map((x) => (
                     <option value={x.value}>{x.text}</option>
                  ))}
               </select>
            </div>
            <div className="flex w-full  gap-4">
               <input
                  type="text"
                  placeholder="Year"
                  className="w-full"
                  value={boardValues1.yearOfGard as string}
                  onChange={(e) => onChangeEventsBoard1.onYearOfGardChange(e.target.value)}
               ></input>
               <input
                  type="text"
                  placeholder="%"
                  className="w-full"
                  value={boardValues1.percentage as string}
                  onChange={(e) => onChangeEventsBoard1.onPercentageChange(e.target.value)}
               ></input>
            </div>
         </div>
         <div className="flex flex-col gap-5 mb-12">
            <div className="flex gap-2 flex-col w-full">
               <div className="text-base font-normal">Class XII</div>
               <select className="w-full" onChange={(e) => onChangeEventsBoard2.onBoardChange(e.target.value)}>
                  <option value=""> Class X Board</option>
                  {boards.map((x) => (
                     <option value={x.value}>{x.text}</option>
                  ))}
               </select>
            </div>
            <div className="flex w-full  gap-4">
               <input
                  type="text"
                  placeholder="Year"
                  className="w-full"
                  value={boardValues2.yearOfGard as string}
                  onChange={(e) => onChangeEventsBoard2.onYearOfGardChange(e.target.value)}
               ></input>
               <input
                  type="text"
                  className="w-full"
                  placeholder="%"
                  value={boardValues2.percentage as string}
                  onChange={(e) => onChangeEventsBoard2.onPercentageChange(e.target.value)}
               ></input>
            </div>
         </div>
         <div className="gap-10">
            {degrees.map((deg) => (
               <DegreeForm
                  id={deg.id}
                  onChange={(data) => {
                     const index = degrees.findIndex((a) => a.id === deg.id);
                     const newArray = [
                        ...degrees.slice(0, index),
                        { ...degrees[index], ...data },
                        ...degrees.slice(index + 1),
                     ];
                     setDegrees(newArray);
                  }}
                  onClose={(id: string) => {
                     setDegrees([...degrees.filter((y, j) => y.id !== id)]);
                  }}
               ></DegreeForm>
            ))}
         </div>
         <div
            className="btn-outlined mb-16"
            onClick={() =>
               setDegrees([
                  ...degrees,
                  {
                     id: Math.random().toString(),
                     college: "",
                     currentStudying: "",
                     degree: "",
                     marks: "0",
                     stream: "",
                     yearOfGrad: "",
                  },
               ])
            }
         >
            Add another experience
         </div>
         <div className="flex items-center mt-20 h-full justify-end flex-col gap-7 w-full">
            <div className="btn w-full" onClick={onClickOnNext}>
               Next
            </div>
         </div>
      </FormLayout>
   );
};

export default Academics;
