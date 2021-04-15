import axios from 'axios';
import { apiConfig } from '../../muckrock';

/**
 * This file provides all the service functions
 */

const headers = {'Authorization': 'Token ' + apiConfig};

const url = "https://www.muckrock.com/api_v1";

export const getFOIA = () => {
    axios.get(url +'/foia');
}
