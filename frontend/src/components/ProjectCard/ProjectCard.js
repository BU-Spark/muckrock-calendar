import './ProjectCard.css';
/** Component that holds a single project for the project listing page **/
const ProjectCard = (props) => {
    // Key == project ID
    const { title, num_articles, summary, img} = props;

    return (
        <div className="ProjectContainer">
            <img src={img} alt="" className="ProjectImage"/>                     
            <div className="ProjectTitle">{title}</div>
            <div className="ProjectNum">[{num_articles} Articles]</div>
            <div className="ProjectSummary">{summary}</div>
            <div className="ProjectInfoContainer">
                <div className="ProjectProgress1"/>
                <div className="ProjectProgress2"/>
                <div className="ProjectTag1"><span className="TagName">Tag</span></div>
                <div className="ProjectTag2"><span className="TagName">Tag</span></div>
            </div>
            
        </div>
    )
};

export default ProjectCard;