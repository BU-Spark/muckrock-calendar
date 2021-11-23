import './RequestCard.css';

/** Component that holds a signle request for the request listing page **/
const RequestCard = (props) => {
    const { img, title, name, desc } = props;
    return (
        <div className="RequestContainer">
            <img src={img} alt="" className="RequestImage"/>
            <div className="RequestTitle">{title}</div>
            <div className="RequestAgencyName">{name}</div>
            <div className="RequestDescription">{desc}</div>
        </div>
    )
};

export default RequestCard;