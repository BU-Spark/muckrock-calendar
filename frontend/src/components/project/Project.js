import { getFOIA } from '../../service/foia';
import axios from 'axios';
import './Project.css';

const Project = (props) => {
    // Key == project ID
    const { title, num_articles, summary, img} = props;

    const testGetRequest = async () => {

        try{
            const url = 'https://www.muckrock.com/api_v1/foia/'
            const foia = await axios.get(url)
            const res = foia.data
            const {results} = res
            console.log('hello')

            console.log(results[0])

            return results[0]

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="ProjectContainer">
            <img src={img} className="ProjectImage"/>                     
            <div className="ProjectTitle">{title}</div>
            <div className="ProjectNum">[{num_articles} Articles]</div>
            <div className="ProjectSummary">{summary}</div>
            <div className="ProjectInfoContainer">
                <div className="ProjectProgress1"/>
                <div className="ProjectProgress2"/>
                <div className="ProjectTag1"><span className="TagName">Tag</span></div>
                <div className="ProjectTag2"><span className="TagName">Tag</span></div>
            </div>
            
        </div>
    )
};

export default Project;