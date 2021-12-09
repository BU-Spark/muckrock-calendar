import { red, yellow } from '@material-ui/core/colors';
import axios from 'axios';
import { get_headers } from '../../service/foia';
import Redsquare from  '../../images/Redsquare.png';
import Yellowsquare from '../../images/Yellowsquare.png'
import Greensquare from '../../images/Greensquare.png';
import ListingCard from '../ListingCard/ListingCard';

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

const getAgencyName = async (agency_id) => {
    console.log('test')
    const id = agency_id;

    try{
        const resp = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + 'agency/' + id, {
            headers: get_headers,
            withCredentials: true
        });
        const agency = resp.data
        
        console.log("AGENCY NAME: " + agency.name)
        return agency.name
    } catch (err) {
        console.error(err)
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
                <ListingCard
                    key = {curr_request.id}
                    title = {curr_request.title}
                    agency = {getAgencyName(curr_request.agency)}
                    status = {curr_request.status}
                    submitDate = {new Date(curr_request.datetime_submitted).toLocaleDateString("en-US")}
                    due = {new Date(curr_request.date_due).toLocaleDateString("en-US")}
                    tagList = {curr_request.tags}
                    cardStyle = 'RequestsPage'
                />
            ))}
        </div>
    )
};

export default RequestListing;