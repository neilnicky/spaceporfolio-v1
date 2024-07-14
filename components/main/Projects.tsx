import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-40"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-4 md:px-10 flex-wrap justify-center items-center">
        <ProjectCard
          src="/casecobra.png"
          title="Case Cobra"
          description="Turn your image into beautiful custom phone cover. Also after amazing customization you can place order through Stripe payment system."
          href="https://github.com/neilnicky"
        />
        <ProjectCard
          src="/brainwave.png"
          title="Brainwave Ai"
          description="Modern Next.js Landing page of a AI application."
          href="https://github.com/neilnicky"
        />
        <ProjectCard
          src="/nike.png"
          title="Nike Shoe Website"
          description="Beautiful and minimilistic Nike website that you can browse different shoes and customize the colours and size."
          href="https://github.com/neilnicky"
        />
        <ProjectCard
          src="/hoobank.png"
          title="Hoo Bank"
          description="The next generation payment method - modern kind of landing page."
          href="https://github.com/neilnicky"
        />

        <ProjectCard
          src="/gpt3.png"
          title="GPT-3 OpenAI"
          description="A brief description about the most exciting OpenAi powered GPT-3 bot."
          href="https://github.com/neilnicky"
        />
        <ProjectCard
          src="/gemini.png"
          title="Google Gemini Clone"
          description="Clone of Google Gemini that uses the authentic Gemini API to interact with users in real time."
          href="https://github.com/neilnicky"
        />
        <ProjectCard
          src="/gerich.png"
          title="Restaurant Landing Page"
          description="Landing page for a Russian restuarant."
          href="https://github.com/neilnicky"
        />
      </div>
    </div>
  );
};

export default Projects;
