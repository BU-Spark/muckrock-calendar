# muckrock-calendar

A calendar/timeline view of MuckRock requests. A sister service in collaboration with MuckRock

## To run locally

Clone the repository and change into the dev branch (this is the most updated branch while we develop). Open in your preferred IDE, and move into the 'frontend' folder.

In terminal:

```
cd frontend
```

Then, you must download all dependencies.

In terminal:

```
npm install
```

Finally, to run the application on localhost.

In terminal:

```
npm start
```

This should automatically open the application on your browser at localhost:3000.

## Repo organization

    .
    ├── github
    ├── frontend                # Contains all code for the frontend
        ├── public
        ├── src                 # Contains source files
            ├── components      # All React components
            ├── images
            ├── pages           # All pages of the webapp
            ├── service         # API calls
            ├── App             # Main file containing configuration for site
            └── testData        # Contains test data for some hardcoded pages
        └── package             # Contains dependencies
    ├── COLLABORATORS           # GitHub accounts of users contributing
    ├── LICENSE
    └── README.md

## Authentication header

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

Because of CORS we cannot make third party requests (ie from localhost or our server) directly to the API for security reasons. To solve this issue during development we utilize the [CRA proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to handle unknown route requests and proxy them while changing their origin. This solves the CORS issue while on development. To do this add `"proxy": "INSERT MUCKROCK API URL HERE"` to the package.json inside of the frontend folder.

The problem arises is that we do not know the domain under which this website will be posted so how can we write API request in the format of `/foia` if we're not sure they will share a common sub-domain!

To solve this issue an environment variable called `REACT_APP_MUCKROCK_BASE_URL` is utilized to dynamically set the base URL for the API. During dev we set this to nothing (when you want to test locally on your computer), but on production (we are using GitHub pages for now) we set this to the real base URL.

This means you'll need to create a `.env` in the format specified by the `./.envTemplate` file.

Ask Ian if have any questions.
