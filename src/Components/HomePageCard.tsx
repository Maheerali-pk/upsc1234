interface HomePageCardProps {
   title: string;
   desc: string;
}

const HomePageCard: React.FC<HomePageCardProps> = ({ desc, title }) => {
   return (
      <div className="flex flex-col gap-2">
         <div className="font-serif font-bold text-xl md:text-2xl md:w-72 w-full">{desc}</div>
         <div className="font-normal  text-6xl md:text-8xl">{title}</div>
         <div className="h-2 md:h-4 w-28 bg-blue-400"></div>
      </div>
   );
};

export default HomePageCard;
