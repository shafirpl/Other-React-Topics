import React, {Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export default function Launch() {
    /*
    * recall from colt steel course that usually we grab something like :something from the 
    * url usually
    * from the this.props.match.params 
    */
    let {flight_number} = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
        <Fragment>
            <Query query = {LAUNCHES_QUERY} variables={{flight_number}}></Query>
        </Fragment>
    )
}
