import { projectData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { useEffect, useState } from "react";


function Works() {
  const [item,setItem]=useState({name:'Machine Learning'});
  const [projects, setProjects]=useState([]);
  const [active, setActive]=useState(0);

  useEffect(()=>{
    const newProjects=projectData.filter((project)=>{
      return project.category == item.name;
    }
    );
    setProjects(newProjects);
    
  },[item]);

  const handleClick=(e,index)=>{
    setItem({name: e.target.textContent});
    setActive(index);
  }
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item,index) =>{
          return (
            <span onClick={(e)=>{handleClick(e,index);}} className={`${active === index? 'active-work': ""} work__item`} key={index}>
              {item.name}
            </span>
          );
        } )}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Works;