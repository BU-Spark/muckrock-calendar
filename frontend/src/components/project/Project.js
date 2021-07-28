import './Project.css';

const Project = (props) => {
    const { title, num, name, desc} = props;
    return (
        <div className="ProjectContainer">
            <div className="ProjectImage"/>
            <div className="ProjectTitle">{title}</div>
            <div className="ProjectNum">{num}</div>
            <div className="ProjectAgencyName">{name}</div>
            <div className="ProjectDescription">{desc}</div>
            <div className="ProjectInfoContainer">
                <div className="ProjectProgress1"/>
                <div className="ProjectProgress2"/>
                <div className="ProjectTag1"><span className="TagName">Tag</span></div>
                <div className="ProjectTag2"><span className="TagName">Tag</span></div>
            </div>
            
        </div>
    )
};

export default Project;