# burger
This project shows the use of express, express-handlebar, mysql and using routs.

Click [here](https://burger-app1.herokuapp.com/) to see the deployed version.

Click [here](https://github.com/hmdroh/burger) to see github repo.

## Installation:
Please install :
__nodejs, nodemon__

Run the following on the root of the project:
```javascript
npm i 
```
We have used _express_, _mysql_, _express-handlebars_.

Run the following files on _/db/schema.sql_, and _/db/seeds.sql_ on your mysqlworkbench.

Make sure to change mysql password and user on _config/connection.js_ file;

```javascript
nodemon server.js
```

#### Express Routs:
I have setup the following routs:
```javascript
router.get("/" // show index.html from handlebar
router.get("/api" //show all of the entries as json
router.post("/api/id/:id" // for updating "devour" column based on id
router.post("/api/save/:save" // for creating new item.
```

