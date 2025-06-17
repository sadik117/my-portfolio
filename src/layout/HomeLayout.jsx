import { Link } from "react-router-dom";
import { Spotlight } from "../components/ui/Spotlight";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
      <Helmet>
        <title>Welcome Home | Sadik The Developer</title>
      </Helmet>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-80"
        fill="#dec8ff99"
      />
      <div className="md:h-[40rem] h-[30rem] w-full bg-primary  bg-grid-gray-500/[0.2]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <h1 className="md:text-6xl text-4xl flex flex-col items-center w-10/12 text-center font-bold">
          Life doesn't get better by chance, it gets better by change.{" "}
          <span className="text-xs md:text-sm pt-2">(Jim Rohn : American Author & Motivational Speaker)</span>
          <Link
            to="/home"
            className="btn bg-transparent  hover:text-pColor px-[2px] py-[2px] explore-btn  rounded-full mt-20 md:mt-40 h-max min-h-max   border-none hover:border-none"
          >
            <span className="bg-primary text-xs md:text-[14px] py-2 md:py-3 flex items-center gap-1 border-t border-[#8636ff]/50 px-10 hover:px-16  duration-300  rounded-full relative ">
              Welcome Home <BsChevronDown />
            </span>
          </Link>
        </h1>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
