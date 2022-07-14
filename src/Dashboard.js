import React from 'react';

import {Link} from 'react-router-dom';

import {useParams} from 'react-router-dom';

const Dashboard =()=>{
    let params= useParams();

    console.log(params.name);

    return(
        <div>
            <center>
                <h3> welome to Dashboard</h3>
                <p>Name:{params.name}</p>
                <Link to='/' className='Link'>Back to Home</Link>
            </center>
        </div>
    )
};
export default Dashboard