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

# Repo organization

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