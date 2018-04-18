# Web app for crowdsourcing thematic investment data

The application was developed at the "Chair of Financial Management and Capital Markets" at TU München. It was built with the MEAN stack (MongoDB + Node.js + Express + Angular 2) and aims to improve the data gathering process
on the topic of thematic investing. 

### How to run:
1. Install dependencies: `npm install`
2. Create a `.env` file at the project's root to hold the environment variables, based on the [dotenv](https://www.npmjs.com/package/dotenv) package. 

	Working example:
	```
	ENV=development
	LOCAL_HOST=localhost
	LOCAL_MONGODB_PORT=27017
	LOCAL_MONGODB_DBNAME=thematicum
	JWT_SECRET=randomvalue
	```
3. Run the following commands in separate terminals to start the database, web server and client app: `mongod` (or by specifying a custom path for the data, e.g. `mongod --dbpath db`), `npm start`, `npm run build`.
4. View the application on the default port, at localhost:3000

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
