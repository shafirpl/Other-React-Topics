import React from 'react'

/*
* bg-success means background success, it is similar to btn-success and makes the background
* green. Same for bg-danger, makes the background red
* px-3 means padding left and right 3 pixels, mr means margin-right
* They all are bootstrap classes
*/

export default function MissionKey() {
    return (
        <div className="my-3">
           <p>
                <span className="px-3 mr-2 bg-success"></span> = Success
           </p>

           <p>
                <span className="px-3 mr-2 bg-danger"></span> = Fail
           </p>
        </div>
    )
}
