import ListingCard from "../ListingCard/ListingCard"

/** Component that takes a list of Project components and displays them **/
const DashboardListing = ({ projects }) => {
    return (
        <div>
            {projects.map(curr_project => (
                <ListingCard
                key = {curr_project.id}
                title = {curr_project.title}
                summary = {curr_project.summary}
                />
            ))}
        </div>
    )
}

export default DashboardListing;