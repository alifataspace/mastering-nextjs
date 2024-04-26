function Projects(){
 const projects = [
  {
   name: 'Todo App'
  }
 ]
 
 return (
  <div>
   <h1>Projects Practice</h1>
   <ul>
    {projects.map((p => <li>{p.name}</li>))}
   </ul>
  </div>
 )
}

export default Projects;