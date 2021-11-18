import './RequestCard.css';

const RequestCard = (props) => {
    const { img, title, name, desc } = props;
    return (
        <div className="RequestContainer">
            <img src={img} className="RequestImage"/>
            <div className="RequestTitle">{title}</div>
            <div className="RequestAgencyName">{name}</div>
            <div className="RequestDescription">{desc}</div>
        </div>
    )
};

export default RequestCard;