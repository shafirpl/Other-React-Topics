const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require("graphql");

/*
 * We will have two object types
 * the launch and the rocket object
 * they will be different types of
 * the graphql object type
 */

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString},
    launch_success: { type: GraphQLBoolean },
    flight_number: { type: RocketType }
  })
});

// Rocket type is a data of type itself
