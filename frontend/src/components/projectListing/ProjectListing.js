import Project from "../ProjectCard/Project"

/**  Component that takes a list of Project components and displays them
*/
const ProjectListings = ({ projects }) => {

    // console.log(typeof(projects))
    // console.log(projects)


    return (
        <div>
            {projects.map(curr_project => (
                <Project
                key = {curr_project.id}
                num_articles = {curr_project.articles.length}
                img = {curr_project.image}
                title = {curr_project.title}
                summary = {curr_project.summary}
                />
            ))}
        </div>
    )

}

export default ProjectListings;