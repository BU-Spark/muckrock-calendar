import { red, yellow } from '@material-ui/core/colors';
import RequestCard from '../RequestCard/RequestCard';
import Redsquare from  '../../images/Redsquare.png';
import Yellowsquare from '../../images/Yellowsquare.png'
import Greensquare from '../../images/Greensquare.png';

/** Component that displays all requests for an individual user **/

const getColor = (props) =>{
    const status = props;
    if(status === "partial" || status === "done" || status === "abandoned" || status === "rejected" || status === "no_docs"){
        return Greensquare;
    }
    else if(status === "payment" || status === "fix"){
        return Yellowsquare;
    }
    else {
        return Redsquare;
    }
}
const RequestListing = ({ requests }) => {
 
    return (
        <div>
            {requests.map(curr_request => (
                <RequestCard
                key = {curr_request.id}
                img = {getColor(curr_request.status)}
                title = {curr_request.title}
                name = "Filed with: undefined"
                desc1 = {"Filed on: " + curr_request.datetime_submitted}
                desc2 = {"Due on: " + curr_request.date_due}
                />
            ))}
        </div>
    )
};

export default RequestListing;