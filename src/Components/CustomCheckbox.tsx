import classNames from "classnames";

interface CustomCheckboxProps {
   checked: boolean;
   onChange: (checked: boolean) => void;
   text: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, text }) => {
   return (
      <div
         onClick={() => onChange(!checked)}
         className={classNames(
            "border cursor-pointer justify-center rounded-2xl border-gray-500 flex h-18 items-center relative",
            {
               "border-green-400": checked,
               "bg-green-200": checked,
            }
         )}
      >
         <div
            className={classNames(
               "border border-black h-4.5 w-4.5 aspect-square rounded absolute top-1/2 -translate-y-1/2 left-6",
               { "bg-blue-400": checked, "border-blue-400": checked }
            )}
         ></div>
         <div className="text-lg">{text}</div>
      </div>
   );
};

export default CustomCheckbox;
