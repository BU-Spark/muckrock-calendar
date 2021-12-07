import './ProjectCard.css';
import Bluesquare from '../../images/Bluesquare.png';
/** Component that holds a single project for the project listing page **/

const getImage = (props) =>{
    if (props == null)
    return Bluesquare;
    else
    return props;
}
const ProjectCard = (props) => {
    // Key == project ID
    const { title, num_articles, summary, img} = props;

    return (
        <div className="ProjectContainer">
            <img src={getImage(img)} className="ProjectImage"/>                     
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