import './RequestCard.css';

/** Component that holds a signle request for the request listing page **/
const RequestCard = (props) => {
    const { img, title, name, desc1, desc2 } = props;
    return (
        <div className="RequestContainer">
            <img src={img} alt="" className="RequestImage"/>
            <div className="RequestTitle">{title}</div>
            <div className="RequestInfoContainer">
                <div className="RequestAgencyName">{name}</div>
                <div className="RequestSummary">{desc1}</div>
                <div className="RequestSummary">{desc2}</div>
            </div>
        </div>
    )
};

export default RequestCard;