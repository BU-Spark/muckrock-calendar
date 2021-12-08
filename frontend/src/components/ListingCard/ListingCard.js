
import './ListingCard.css';

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
const getStatusName = (status) => {
    if(status === "ack"){
        return 'Awaiting Acknowledgement';
    }
    else if(status === "submitted"){
        return 'Processing';
    }
    else if(status === "processed"){
        return 'Awaiting Response';
    }
    else if(status === "appealing"){
        return 'Awaiting Appeal';
    }
    else if(status === "lawsuit"){
        return 'In Litigation';
    }
    else if(status === "payment"){
        return 'Payment Required';
    }
    else if(status === "fix"){
        return 'Fix Required';
    }
    else if(status === "abandoned"){
        return 'Withdrawn';
    }
    else if(status === "rejected"){
        return 'Rejected';
    }
    else if(status === "no_docs"){
        return 'No Responsive Documents';
    }
    else if(status === "partial"){
        return 'Some Documents Recieved';
    }
    else if(status === "done"){
        return 'Complete';
    }

}

/**
 * Colors for the status tag: 
 * GREEN ==> All statuses signifying records were returned, 'partial', 'done'
 * BLUE ==> In Progress, 'ack', 'submitted', 'processed', 'appealing', 'lawsuit' 
 * ORANGE ==> All statuses that require a fix, 'payment', 'fix'
 * RED ==> 'abandoned', 'rejected', 'no_docs' 
 *  
 */
const getStatusColor = (status) => {
    if(status === "partial" || status === "done" ){
        return 'green';
    }
    else if(status === "ack" || status === "submitted" || status === "processed" || status === "appealing" || status === "lawsuit"){
        return 'blue';
    }
    else if(status === "payment" || status === "fix"){
        return 'yellow';
    }
    else if(status === "abandoned" || status === "rejected" || status === "no_docs"){
        return 'red';
    }
}

/** Component that holds a single project/request for the kanban board **/
const ListingCard = (props) => {
    // Key == project ID
    const { title, agency, status, submitDate, due, tagList} = props;
    const color = getStatusColor(status)
    const statusName = getStatusName(status)

    return (
        <div className="ListingContainer">                  
            <div className="ListingTitle">{title}</div>

            {/* Change tag color based on status*/}
            {color === 'green' 
            ?   <div className="ListingStatusTag" style={{ background:  '#57e0a7' }}>
                    {statusName}
                </div>
            :    
            color === 'blue' 
            ?   <div className="ListingStatusTag" style={{ background:  '#82c7ff' }}>
                    {statusName}
                </div>
            : 
            color === 'yellow' 
            ?   <div className="ListingStatusTag" style={{ background:  '#ffd967' }}>
                    {statusName}
                </div>
            : 
            <div className="ListingStatusTag" style={{ background:  '#ff8181' }}>
                {statusName}
            </div>
            }

            <div className="ListingSummaryContainer">
                <div className="ListingSummary">{"Filed with: " + agency}</div>
                <div className="ListingSummary"> {"Submitted: " + submitDate} </div>
                <div className="ListingSummary"> {"Due: " + due}</div>
            </div>
            <div className="ListingInfoContainer">
                {/* <div className="ListingProgress1"/>
                <div className="ListingProgress2"/> */}

                {tagList.map(tag => (
                    <div className="ListingTag">{tag}</div>
                ))}

                {/* <div className="ListingTag1">Bigger Tag</div>
                <div className="ListingTag2">Tag</div>
                <div className="ListingTag2">Tag</div> */}

            </div>
            
        </div>
    )
};

export default ListingCard;