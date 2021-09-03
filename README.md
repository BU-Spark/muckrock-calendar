# muckrock-calendar
A calendar/timeline view of MuckRock requests. A sister service in coloaboration with MuckRock

## To start

Please register an account on Muckruck, and get your API KEY. Your token can be obtained on the bottom left-hand side of your [profile page](https://www.muckrock.com/accounts/profile/). When making a request, token should be placed under /frontend/muckrock.ts, the token should be included as an authentication header. 

```
headers = {'Authorization': 'Token %s' % token}
```
```
/frontend/service/muckrock.ts

export const apiConfig  = {
    "API_KEY": "YOUR API KEY HERE",
}
```


## CORS and API URLs

Because of CORS we cannot make requests from localhost(or our server) directly to the API for security reasons. To solve this issue during development(when an exception on the serer is not present) we utilize the [CRA proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to handle unknown route requests and proxy them while changing their origin. This solves the CORS issue transparently. The problem arises is that we do not know the domain under which this website will be posted so how can we write API request in the format of `/foia` if we're not sure they will share a common sub-domain! To solve this issue an environment variable called `REACT_APP_MUCKROCK_BASE_URL` is utilized to dynamically set the base URL for the API. During dev this means it will just be nothing but when we build a production version we could set it to the real base URL.

This means you'll need to create a `.env` in the format specified by the `./.envTemplate` file. 

Ask Ian if have any questions.