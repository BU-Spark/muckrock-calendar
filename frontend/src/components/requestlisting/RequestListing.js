import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import RequestCard from '../../components/request/Request';
import { requestTestData } from './requestTestData';

const RequestListing = () => {
    const { results } = requestTestData

    return (
        <div className="ProjContainer1">
            {results.map(curr_request => (
                <RequestCard
                img = {Blue}
                title = {curr_request.title}
                name = {curr_request.name}
                //What is desc?
                desc = {curr_request.date_due}
                />
            ))}
        </div>
    )
};

export default RequestListing;