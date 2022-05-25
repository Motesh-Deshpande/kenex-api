# kenex-api

clone the code

run => npm i

create postgres db in local with port 5432 (default port) host the db (run it)

run => npx knex migrate:latest   or   knex migrate:latest.  // to create tables

run => npx knex seed:run   or   knex seed:run.              //to feed data into tables

run node index.js  or  nodemon index.js

user following get apis to fetch data

http://localhost:3000/all-veg-restaurants

http://localhost:3000/all-low-cost-veg-restaurants

http://localhost:3000/all-low-cost-french-restaurants

http://localhost:3000/all-high-low-cost-french-italian-restaurants

http://localhost:3000/all-high-low-cost-french-cum-italian-restaurants

