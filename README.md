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

You will need this for user authentication/login.

## CORS and API URLs (Bypassing CORS on local machine)

Because of CORS we cannot make third party requests (ie from localhost or our server) directly to the API for security reasons. To solve this issue during development we utilize the [CRA proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to handle unknown route requests and proxy them while changing their origin. This solves the CORS issue while on development. To do this we added `"proxy": "https://www.muckrock.com/api_v1"` to the package.json inside of the frontend folder.

The problem arises is that we do not know the domain under which this website will be posted so how can we write API request in the format of `/foia` if we're not sure they will share a common sub-domain!

To solve this issue an environment variable called `REACT_APP_MUCKROCK_BASE_URL` is utilized to dynamically set the base URL for the API. During dev we set this to nothing (when you want to test locally on your computer), but on production (ie when you compile a build and push it to gh-pages branch) we set this to the real base URL (https://www.muckrock.com/api_v1).

This means you'll need to create a `.env` in the format specified by the `./.envTemplate` file.

Summary:

- Add `"proxy"` option to package.json (should already be there)
- Add `REACT_APP_MUCKROCK_BASE_URL` to .env file and leave empty during local dev

Ask Ian if have any questions.

## Deploying to GitHub Pages

We are using GitHub Pages.
Current URL: https://bu-spark.github.io/se-muckrock-calendar/#/

You must push a build folder to gh-pages branch and the website should automatically update.

In package.json in side frontend folder you should have the scripts:

```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Running 'npm run deploy' will automatically run predeploy beforehand which will compile a build.
In order to publish, gh-pages will ask for your github credentials.
You must also make a PAT (Personal Access Token) on github and use that as your password to publish.

NOTICE: Make sure you have `REACT_APP_MUCKROCK_BASE_URL=https://www.muckrock.com/api_v1` in .env before you
publish since CRA proxy will no longer function here. This is done to make sure requests are sent to correct url,
as the muckrock api url is pulled from `REACT_APP_MUCKROCK_BASE_URL` in .env file.

With the proxy deactivated, you will run into an issue with CORS in production.
We can temporarily bypass this by disabling chrome web security as CORS is enforced by the browser.
Look at tutorials online how to do this: https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome.
