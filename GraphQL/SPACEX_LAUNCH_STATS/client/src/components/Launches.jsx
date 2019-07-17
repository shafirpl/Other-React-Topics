import React, { Component, Fragment } from 'react';
import MissionKey from './MissionKey.jsx';

//gql is the one that is used to make the query
import gql from 'graphql-tag';

import LaunchItem from './LaunchItem.jsx';

import {Query} from 'react-apollo'

/*
* This is where we are making the query
* it is pretty similar to going to graphiql, the graphical user interface for graphql and
* typing out stuff. We just need to add gql `` and do the query inside the backticks
* Then in order to show/use it, we have to pass it into the query component as query props
*/
const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3"> Launches </h1>
                <MissionKey />
                <Query query = {LAUNCHES_QUERY}>
                    {
                        /*
                        * loading is a boolean, it will be true when we will be fetching data,
                        * and then it will be false when the data is finished fetching
                        * 
                        * We will use loading to put a spinner or something
                        */
                        ({loading, error, data}) => {
                            if(loading) return (
                                <div class="fa-3x">
                                    <span>Loading <i class="fas fa-spinner fa-spin"></i> </span> 
                                </div>
                            )
                            if (error) console.log(error)

                            return <Fragment>
                                {
                                    data.launches.map(launch => (
                                        <LaunchItem 
                                            key={launch.flight_number}
                                            launch = {launch}></LaunchItem>
                                    ))
                                }
                            </Fragment>
                             
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launches
