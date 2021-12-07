
import './ListingCard.css';

/** Component that holds a single project/request for the kanban board **/
const ListingCard = (props) => {
    // Key == project ID
    const { title, summary, datetime, due} = props;

    return (
        <div className="ListingContainer">                  
            <div className="ListingTitle">{title}</div>
            <div className="ListingSummary">{"Filed with: " + summary}</div>
            <div className="ListingSummary"> {"Filed on: " + datetime} </div>
            <div className="ListingSummary"> {"Due on: " + due}</div>
            <div className="ListingInfoContainer">
                {/* <div className="ListingProgress1"/>
                <div className="ListingProgress2"/> */}
                <div className="ListingTag1">Bigger Tag</div>
                <div className="ListingTag2">Tag</div>
                <div className="ListingTag2">Tag</div>

            </div>
            
        </div>
    )
};

export default ListingCard;