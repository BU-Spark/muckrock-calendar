import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import RequestCard from '../RequestCard/RequestCard';
/** Component that displays all requests for an individual user **/
const RequestListing = ({ requests }) => {
 
    return (
        <div>
            {requests.map(curr_request => (
                <RequestCard
                key = {curr_request.id}
                img = {curr_request.image}
                title = {curr_request.title}
                summary = {curr_request.summary}
                />
            ))}
        </div>
    )
};

export default RequestListing;