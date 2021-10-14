import Project from "../project/Project"

/**  Component to list all projects put into the props 
*/
const ProjectListing = ({ projects }) => {
    const { results } = projects

    return (
        <div>
            {results.map(curr_project => (
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

export default ProjectListing;