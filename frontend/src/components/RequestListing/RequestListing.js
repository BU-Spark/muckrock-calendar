import { red, yellow } from '@material-ui/core/colors';
import RequestCard from '../RequestCard/RequestCard';
import Redsquare from  '../../images/Redsquare.png';
import Yellowsquare from '../../images/Yellowsquare.png'
import Greensquare from '../../images/Greensquare.png';

/**
 * Colors for the status tag: 
 * GREEN ==> All statuses signifying records were returned, 'partial', 'done'
 * YELLOW ==> In Progress, 'ack', 'submitted', 'processed', 'appealing', 'lawsuit' 
 * ORANGE ==> All statuses that require a fix, 'payment', 'fix'
 * RED ==> 'abandoned', 'rejected', 'no_docs' 
 *  
 */
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


/**
 * --- STATUSES ---
 * 
 * In Progress:
 *  'ack' => Request was sent & is Awaiting Acknowledgement
 *  'submitted' => Processing (MuckRock doing stuff on their end)
 *  'processed' => Processed & Awaiting Response
 *  'appealing' => FOIA request Awaiting Appeal
 *  'lawsuit' => In Litigation
 *  
 * Follow Up:
 *  'payment' => Payment Required
 *  'fix' => Fix Required
 *  
 * Complete:
 *  'partial' => Partially Completed (Some responsive records released with more coming)
 *  'done' => Complete (Responsive records released)
 *  'abandoned' => Withdrawn 
 *  'rejected' => Rejected (Agency claims the records requested are exempt & requests unprocessable)
 *  'no_docs' => No Responsive Documents (Agency claimed to find no records)
 */

/** Component that displays all requests for an individual user **/
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