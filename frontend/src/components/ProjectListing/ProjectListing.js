import ProjectCard from "../ProjectCard/ProjectCard"

/**  SUB-VIEW
 * Component that takes a list of Project components and displays them
 * 
 *      ISSUE: Cant find tags in response jsons even though there are project tags on MuckRock main site!
*/
const ProjectListings = ({ projects }) => {

    return (
        <div>
            {projects.map(curr_project => (
                <ProjectCard
                    key = {curr_project.id}
                    num_articles = {curr_project.articles.length}
                    num_requests = {curr_project.requests.length}
                    img = {curr_project.image}
                    title = {curr_project.title}
                    summary = {curr_project.summary}
                    // tagList = {curr_project.tags}
                />
            ))}
        </div>
    )

}

export default ProjectListings;