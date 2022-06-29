import CustomCheckbox from "./CustomCheckbox";

interface MultipleCheckboxProps {
   value: string[];
   options: string[];
   onChange: (value: string[]) => void;
}

const MultipleCheckbox: React.FC<MultipleCheckboxProps> = ({ onChange, options, value }) => {
   return (
      <div className="grid gap-2.5">
         {options.map((x) => (
            <CustomCheckbox
               text={x}
               checked={value.includes(x)}
               onChange={(checked) => {
                  const newVal = new Set(value);
                  if (checked) {
                     newVal.add(x);
                  } else {
                     newVal.delete(x);
                  }
                  onChange(Array.from(newVal));
               }}
            ></CustomCheckbox>
         ))}
      </div>
   );
};

export default MultipleCheckbox;
