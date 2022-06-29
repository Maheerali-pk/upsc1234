import { icons } from "../utils/icons";

interface SuccessStoryProps {
   text: string;
   user: string;
   img: string;
   userSubtext: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ text, img, user, userSubtext }) => {
   return (
      <div className="gap-6 flex  md:w-[40rem] pb-14">
         <div className="mt-18">{icons.qoute}</div>
         <div className="flex flex-col">
            <div className="text-lg text-gray-750 mb-12 font-normal text-left w-full ">Success Stories</div>
            <div className="text-2xl mb-11">{text}</div>
            <div className="flex gap-4 items-center">
               <img src={img} className="h-18 w-18  rounded-full object-cover"></img>
               <div className="text-base">{user}</div>
               <div className="text-base text-gray-350">{userSubtext}</div>
            </div>
         </div>
      </div>
   );
};

export default SuccessStory;
