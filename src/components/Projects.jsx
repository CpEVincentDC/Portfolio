import React from "react";
import ProjectItem from "./ProjectItem";
import barbershopImg from "../assets/Barbershop.png";
import odinRecipeImg from "../assets/odin recipe.png";
import recipeImg from "../assets/recipe.png";
import templateImg from "../assets/template.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa placeat
        incidunt at maxime esse, nobis, obcaecati quae recusandae, expedita odit
        id magnam debitis nesciunt! Eos repellendus labore quasi iure. Ad.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 text-1xl">
        <ProjectItem
          img={barbershopImg}
          title="Barbershop"
          description="html/css/javascript"
        />
        <ProjectItem
          img={odinRecipeImg}
          title="Odin Recipe"
          description="html"
        />
        <ProjectItem img={recipeImg} title="Recipe" description="html" />
        <ProjectItem
          img={templateImg}
          title="Template"
          description="html/css"
        />
      </div>
    </div>
  );
};

export default Projects;
