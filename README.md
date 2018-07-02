# Web app for crowdsourcing thematic investment data

The application was developed at the "Chair of Financial Management and Capital Markets" at TU München. It was built with the MEAN stack (MongoDB + Node.js + Express + Angular 2) and aims to improve the data gathering process
on the topic of thematic investing. 

### How to run:
To run this application locally (non-Dockerized):
1. Start the MongoDB database (from project root): `mongod --dbpath db`. The folder db must be previously created in the project root; otherwise, the --dbpath parameter can be left out and the default location will be used.
2. If this is the first time starting the database, run these commands (from /server/utilities) to insert some initial registration access codes (for new users) and stock data: `mongo localhost:27017/thematicum registrationAccessCodes.js`, `mongo localhost:27017/thematicum stocksInsert.js`
3. Install dependencies of the Node.js server (from /server): `npm install`. Run the server as: `npm start`. If needed, the server environment variables can be modified in the `.env` file, based on the [dotenv](https://www.npmjs.com/package/dotenv) package. E.g. set `ENV=local` if the services will be run locally, `ENV=docker` if the services will be run as Docker containers etc. The REST API from Express is running on `localhost:3000`. 
4. Install dependencies of the Angular app (from /angular-app): `npm install`. Run the app as: `ng serve`. The client app can be viewed on the browser on `localhost:4200`. For signing up as new user, `THEMATICUM16TUM` is a valid access code until 2020. 

To run this application with Docker Compose, run `docker-compse up` at the root of the project. Note: in `.env` file the environment must be set as `ENV=docker`.
`TODO`: MongoDB container's volume needs to be configured for persistent data on the host, but for the time being we can execute the initial data insertion on the database container as follows:
After the containers have started, run these (in /server/utilities) to copy the .js files and insert the data manually on the MongoDB container:
```
docker cp registrationAccessCodes.js thematicum_mongo-service_1:/accessCodes.js
docker cp stocksInsert.js thematicum_mongo-service_1:/stocks.js
docker exec -it thematicum_mongo-service_1 mongo localhost:27017/thematicum accessCodes.js
docker exec -it thematicum_mongo-service_1 mongo localhost:27017/thematicum stocks.js
```
Now, we can interact with the application on `localhost:4200`.

### Screenshots:

* Theme Search
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_search.png" alt="" width="75%">

* Create Theme (Tags Autocompletion)
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_tag_autocompletion.png" alt="" width="75%">

* Create Theme (Stocks Selection)
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_stock_selection.png" alt="" width="75%">

* Theme Details Overview
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_overview.png" alt="" width="75%">

* Edit Theme (Change its details)
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_edit_details.png" alt="" width="75%">

* Edit Theme (Vote on theme properties)
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_edit_properties.png" alt="" width="75%">

* Edit Theme (Vote on stock exposure)
<img src="https://github.com/evisalumani/IDP_Thematicum/raw/master/Thematicum_Screenshots/theme_edit_stock.png" alt="" width="75%">
