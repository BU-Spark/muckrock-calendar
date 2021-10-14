import Project from "../project/Project"

const ProjectListing = ({ projects }) => {
    const { results } = projects

    return (
        <div>
            {results.map(curr_project => (
                <Project
                key = {curr_project.id}
                id = {curr_project.id}
                img = {curr_project.image}
                title = {curr_project.title}
                summary = {curr_project.summary}
                />
            ))}
        </div>
    )

}

export default ProjectListing;