import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import ShedSoftware from "@/assets/images/Software_for_Shed.png";
import NotesApp from "@/assets/images/notes-app.png";
import monteCarloSimulation from "@/assets/images/monte_carlo_sim.jpeg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Sisaaraa Group",
    year: "2024",
    title: "Management System Software for Filling Stations",
    results: [
      { title: "Built the full system" },
      { title: "Enhanced user experience by 40%" },
      { title: "Improved system speed by 50%" },
    ],
    link: "https://lnkd.in/gXMsGtjM",
    image: ShedSoftware,
  },
  {
    company: "Portfolio",
    year: "2025",
    title: "Notes App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Improved authentication" },
    ],
    link: "https://www.linkedin.com/in/sisila-dhevasiri/details/projects/2063050131/multiple-media-viewer/?profileId=ACoAAEeNc_4BXNdbZogqr3bwxLx3Ex8LGh8Olr0&treasuryMediaId=1741524806187",
    image: NotesApp,
  },
  {
    company: "University of Plymouth",
    year: "2024",
    title: "Monte Carlo Simulation",
    results: [
      { title: "Simulation Program" },
      { title: "Built for Computational Theory Module" },
      { title: "Second Academic Year" },
    ],
    link: "https://github.com/CTS-Python-simulation-program/Simulations",
    image: monteCarloSimulation,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pd-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-md-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
