import React from 'react';
// import classNames from 'classnames';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

export default function LaunchItem(props) {
    console.log(props);
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className = "col-md-9">
                    {/* 
                    * so what it is basically saying that
                    * trigger bootstrap text success class if 
                    * props.launch_success true, and trigger
                    * bootstrap text-danger if that is false
                    * WE could technically use something like
                    * className = {props.launch.launch_success? 'text-success': 'text-danger'}
                    */}
                    {/* <h4>Mission: <span className={classNames({
                        'text-success': props.launch.launch_success,
                        'text-danger': !props.launch.launch_success
                    })}>{props.launch.mission_name}</span> </h4> */}
                    <h4>Mission: <span className={props.launch.launch_success?'text-success':'text-danger'}>
                    {props.launch.mission_name}
                    </span> </h4>
                    {/*
                    * Moment allows us to nicely format date
                    * We pass in the format how we want to format the date
                    */}
                    <p>Date: <Moment format="YYYY-MM-DD HH:mm">{props.launch.launch_date_local}</Moment></p>
                    
                </div>

                <div className = "col-md-3">
                    <Link exact to={`/launch/${props.launch.flight_number}`} className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}
