interface ITab {
   value: string;
   text: string;
}
interface TabsProps {
   value: string;
   tabs: ITab[];
   onChange: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ onChange, tabs, value }) => {
   const renderTab = (tab: ITab) => {
      if (tab.value === value) {
         return <div className="bg-white text-2xl font-medium px-12 py-3 rounded-full cursor-pointer">{tab.text}</div>;
      } else {
         return (
            <div onClick={() => onChange(tab.value)} className="font-normal px-12 text-2xl cursor-pointer">
               {tab.text}
            </div>
         );
      }
   };
   return (
      <div style={{ color: "rgb(91, 91, 91)" }} className="bg-gray-200 p-3 rounded-full flex items-center">
         {tabs.map(renderTab)}
      </div>
   );
};

export default Tabs;
