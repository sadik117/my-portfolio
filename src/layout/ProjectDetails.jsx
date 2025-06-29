import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const currentProject = data.find(
          (project) => project.id === parseInt(id)
        );
        setProject(currentProject);
      });
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lg:w-8/12 w-10/12 mx-auto"
    >
      <Helmet>
        <title>{`Project Details - ${project?.name} | Developer Sadik`}</title>
      </Helmet>
      <h1 className="text-xl md:text-3xl font-bold mx-auto gradient-text py-5 md:py-10">
        Project Details
      </h1>
      <section className="w-full">
        <figure className=" mx-auto bg-gradient-bg rounded-2xl p-[1px]">
          <img
            className="w-full p-2 bg-primary rounded-2xl object-cover"
            src={project?.image}
            alt=""
          />
        </figure>
        <div className="pt-3 md:pt-5">
          <div className="flex items-center flex-wrap gap-1 md:gap-5 pb-2">
            <h1 className="text-lg md:text-2xl font-bold">{project?.name}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => window.open(`${project?.liveLink}`, "_blank")}
                className="btn bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
              >
                <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                  Preview
                  <GoLinkExternal />
                </span>
              </button>
              <button
                onClick={() => window.open(`${project?.githubRepo}`, "_blank")}
                className="btn bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
              >
                <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                  View Code
                  <FaGithub />
                </span>
              </button>
            </div>
          </div>

          <p className="md:text-base text-sm">{project?.description}</p>

          <h2 className="md:text-lg font-bold pt-5">Technologies used:</h2>

          <div className="flex gap-2 py-2 flex-wrap">
            {project?.usedTechnology?.map((item, idx) => (
              <div
                className="bg-gradient-bg font-semibold  text-sm rounded-full "
                key={idx}
              >
                <div className="bg-primary/70  px-3  rounded-full">{item}</div>
              </div>
            ))}
          </div>
          <h2 className="md:text-lg font-bold pt-5">Lacking:</h2>
          <ul className="list-inside text-sm md:text-base list-disc">
            {project?.lackings?.map((lake, idx) => (
              <li key={idx}>{lake}</li>
            ))}
          </ul>
          <h2 className="md:text-lg font-bold pt-5">Challenge: </h2>
          <p className="text-sm md:text-base">{project?.challenge}</p>
          <h2 className="md:text-lg font-bold pt-5">Project Lore: </h2>
          <p className="text-sm md:text-base">{project?.projectLore}</p>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
