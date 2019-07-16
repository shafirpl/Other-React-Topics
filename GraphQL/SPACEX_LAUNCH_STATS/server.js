const express = require('express');
const graphqlHttp = require('express-graphql');
const graphqlHTTP = require("express-graphql");

//schema definition
const MyGraphQLSchema = require('./schema/schema');

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    // this is the tool that we can use in our client
    // to make query to our server
    graphiql: true
  })
);

/*
* This is the javascript short circuit 
* evaluation. It is saying that when
* deployed on heroku, we use the process environment 
* port, but otherwise, use 5000
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server started on port: ${PORT}`);
});