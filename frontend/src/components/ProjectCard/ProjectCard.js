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
    const { title, num_articles, num_requests, summary, img} = props;

    return (
        <div className="ProjectContainer">
            <img src={getImage(img)} className="ProjectImage"/>   
            <div className="ProjectContentContainer">
                <div className="ProjectTitle">{title}</div>
                <div className="ProjectSummary">{summary}</div>
                <div className="ProjectInfoTag">{num_articles} Articles</div>
                <div className="ProjectInfoTag">{num_requests} Requests</div>


            </div>                  

            
        </div>
    )
};

export default ProjectCard;