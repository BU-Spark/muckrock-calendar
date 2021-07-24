
import axios from 'axios';


console.log("hello world");
axios({
    url: `https://www.muckrock.com/api_v1/foia/?user=`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    }
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})