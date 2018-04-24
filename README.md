# burger
burger

click [here](https://dashboard.heroku.com/apps/burger-app1/deploy/github) to see the deployed version.

click [here](https://github.com/hmdroh/burger) to see github repo.

## Installation:
Please install :
[x] nodejs
[x] nodemon

run the following on the root of the project:
```javascript
npm i 
```
we have used _express_, _mysql_, _express-handlebars_.

run the following files on _/db/schema.sql_, and _/db/seeds.sql_ on your mysqlworkbench.

make sure to change mysql password and user on _config/connection.js_ file;

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

