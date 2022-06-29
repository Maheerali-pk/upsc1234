import homepage from "../../assets/homepage.png";
import companyLogo1 from "../../assets/company-logos/logo1.png";
import companyLogo2 from "../../assets/company-logos/logo2.png";
import companyLogo3 from "../../assets/company-logos/logo3.png";
import companyLogo4 from "../../assets/company-logos/logo4.png";
import Tabs from "../../Components/Tabs";
import { useState } from "react";
import HomePageCard from "../../Components/HomePageCard";
import CvLogo from "../../assets/cv-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Scrollbar } from "swiper";

import SuccessStory from "../../Components/SuccessStory";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/scrollbar";
import "../../App.css";
import { icons } from "../../utils/icons";
import Navbar from "../../Components/Navbar";

// import "./styles.css";

const testImage =
   "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg";

interface ICompanyItem {
   url: string;
   image: string;
}

const companyItems: ICompanyItem[] = [
   { url: "/", image: companyLogo1 },
   { url: "/", image: companyLogo2 },
   { url: "/", image: companyLogo3 },
   { url: "/", image: companyLogo4 },
];

interface HomePageProps {}

const optionsObject: { [k in string]: string[] } = {
   jobs: [
      "Sales",
      "Marketing",
      "Teaching",
      "Mentorship",
      "Life",
      "Sales",
      "Marketing",
      "Teaching",
      "Mentorship",
      "Life",
      "Sales",
      "Marketing",
      "Teaching",
      "Mentorship",
      "Life",
   ],
   talent: ["Programmer", "AI", "ML", "Graphics", "Website", "React", "Wordpress"],
};

const HomePage: React.FC<HomePageProps> = () => {
   const [tab, setTab] = useState("jobs");
   return (
      <div className="flex flex-col">
         <Navbar></Navbar>
         <div className="flex flex-col mb-20 md:flex-row md:grid md:items-center md:grid-cols-[1fr_1.3fr] md:px-40">
            <img src={homepage}></img>
            <div className="flex items-center flex-col px-10 pt-12">
               <div className="text-2xl text-center mb-6 font-serif font-bold md:text-left md:text-64 md:mb-14">
                  Connecting country’s top talent with the right opportunities
               </div>
               <div className="flex gap-5 w-full">
                  <button className="btn w-full md:w-56">Find work</button>
                  <button className="btn-dark w-full md:w-56">Hire talent</button>
               </div>
            </div>
         </div>
         <div className="flex flex-col items-center gap-6 md:gap-11 mb-28">
            <div className="text-22">Trusted Companies</div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4 mb">
               <div className="flex gap-2 md:gap-4 items-center">
                  {companyItems.map((x) => (
                     <img className="object-cover cursor-pointer" src={x.image} alt="Comany"></img>
                  ))}
               </div>
               <div className="flex gap-2 md:gap-4 items-center">
                  {companyItems.map((x) => (
                     <img className="object-cover cursor-pointer" src={x.image} alt="Comany"></img>
                  ))}
               </div>
            </div>
         </div>
         <div className="bg-gray-100 py-18 md:px-56 px-12 flex flex-col items-center">
            <div className="flex gap-4 items-center flex-col md:flex-row">
               <div className="text-2xl">I'm looking for</div>
               <Tabs
                  tabs={[
                     { text: "Jobs", value: "jobs" },
                     { text: "Talent", value: "talent" },
                  ]}
                  value={tab}
                  onChange={(val) => setTab(val)}
               ></Tabs>
               <div className="text-2xl">in</div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center text-center mt-11">
               {optionsObject[tab].map((x) => (
                  <div className="text-3xl md:text-64 cursor-pointer font-normal text-gray-700">{x}</div>
               ))}
            </div>
         </div>
         <div className="px-12 py-20 md:px-24 md:py-40 bg-white flex justify-between flex-col md:flex-row gap-16">
            <HomePageCard title="10.6K+" desc="No of quality candidates hired."></HomePageCard>
            <HomePageCard title="2.3K+" desc="No of companies listed."></HomePageCard>
            <HomePageCard title="256" desc="Avg no. of people getting hired in a day"></HomePageCard>
         </div>
         <div className="mb-20 bg-gray-100 md:h-105 flex flex-col justify-center md:items-start md:gap-44 md:flex-row items-center md:justify-start">
            <img src={CvLogo} className="w-[31.25rem]"></img>
            <div className="flex flex-col gap-8  md:w-[38.125rem] md:translate-y-[7rem] px-12 md:px-0 w-full mb-5 md:mb-0 items-center md:items-start">
               <div className="font-bold font-serif text-5xl">Standout from the crowd with a good CV</div>
               <div className="font-normal text-3xl opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ultrices pharetra viverra nisl massa.
               </div>
               <div className="btn-dark w-56">Create CV</div>
            </div>
         </div>
         {/* {nextEl: icons.slideNext, prevEl: icons.slidePrev,  } */}
         <div className="md:mx-20 my-36  hidden md:flex flex-col items-center py-14 md:rounded-xl bg-blue-100">
            <div className="md:w-3/5">
               <Swiper
                  slidesPerView={1}
                  navigation={true}
                  pagination={{ clickable: true }}
                  modules={[Pagination, Navigation]}
               >
                  <SwiperSlide>
                     <SuccessStory
                        img={testImage}
                        text="How UPSC Work helped me bring my career onto the right track invidut un labre et dolore magna aliquyam erat, sed diam voluptua."
                        user="Eakanth Manjo Kurma"
                        userSubtext="Relevant Credential"
                     ></SuccessStory>
                  </SwiperSlide>
                  <SwiperSlide>
                     <SuccessStory
                        img={testImage}
                        text="How UPSC Work helped me bring my career onto the right track invidut un labre et dolore magna aliquyam erat, sed diam voluptua."
                        user="Eakanth Manjo Kurma"
                        userSubtext="Relevant Credential"
                     ></SuccessStory>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
         <div className="w-full h-[50rem] bg-footer"></div>
      </div>
   );
};

export default HomePage;
