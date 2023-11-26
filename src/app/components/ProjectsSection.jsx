"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Sosial App",
    description:
      "Sosial network application using next.js 13 and postgreSQL as database management",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ipanirtiano/next-sosial-app",
    previewUrl: "https://next-sosial-app.vercel.app/",
  },
  {
    id: 2,
    title: "Next.js e-commerce App",
    description: "E-commerce front end using next.js 13",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Next.js Booking App Hotel",
    description: "Booking Hotel aplication using next.js 13",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ipanirtiano/booking-app-hotel",
    previewUrl: "https://booking-app-hotel.vercel.app/",
  },
  {
    id: 4,
    title: "React Netflix Clone",
    description: "React Netflix clone application",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ipanirtiano/react-netflix",
    previewUrl: "https://react-netflix-rust.vercel.app/",
  },
  {
    id: 5,
    title: "React Youtube Clone",
    description: "React Youtube clone application",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ipanirtiano/react-youtube",
    previewUrl: "https://react-youtube-git-main-ipanirtiano.vercel.app/",
  },
  {
    id: 6,
    title: "React Github User Explorer App",
    description: "Application github user explorer using react.js",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ipanirtiano/Github-repositories-explorer",
    previewUrl:
      "https://github-repositories-explorer-typescript-lyc3.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-10">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2">
        My Projects
      </h2>
      <p className="text-center text-white mb-8">
        Here my last project so far.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
