import { getFOIA } from '../../service/foia';
import axios from 'axios';
import './ListingCard.css';

const ListingCard = (props) => {
    // Key == project ID
    const { title, summary} = props;

    return (
        <div className="ListingContainer">                  
            <div className="ListingTitle">{title}</div>
            <div className="ListingSummary">{summary}</div>
            <div className="ListingInfoContainer">
                <div className="ListingProgress1"/>
                <div className="ListingProgress2"/>
                <div className="ListingTag1"><span className="TagName">Tag</span></div>
                <div className="ListingTag2"><span className="TagName">Tag</span></div>
            </div>
            
        </div>
    )
};

export default ListingCard;