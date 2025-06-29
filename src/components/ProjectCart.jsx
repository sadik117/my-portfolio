import { FaGithub } from "react-icons/fa";
import { GoArrowRight, GoLinkExternal } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const ProjectCart = ({ project }) => {
  const { name, image, liveLink, id, githubRepo } = project;
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="md:text-lg text-left px-5 font-bold p-3">{name}</h1>
      <figure className="bg-gradient-bg rounded-2xl shadow-lg p-[1px]">
        <img
          onClick={() => navigate(`/projects/${id}`)}
          className="w-full rounded-2xl h-34 md:h-62 bg-primary hover:p-0 duration-200 cursor-pointer object-cover"
          src={image}
          alt="Project Image"
        />
      </figure>
      <Link
        to={`/projects/${id}`}
        className="btn mx-1 mt-5 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
      >
        <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
          View Details
          <GoArrowRight />
        </span>
      </Link>
      <button
        onClick={() => window.open(`${liveLink}`, "_blank")}
        className="btn mx-1 mt-5 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
      >
        <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
          Preview
          <GoLinkExternal />
        </span>
      </button>
      <button
        onClick={() => window.open(`${githubRepo}`, "_blank")}
        className="btn mx-1 mt-5 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
      >
        <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
          Github Code
          <FaGithub />
        </span>
      </button>
    </div>
  );
};

export default ProjectCart;
