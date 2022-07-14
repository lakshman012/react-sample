import React from 'react';

import {Link} from 'react-router-dom';

//import {useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Dashboard =()=>{
    let {search}=useLocation();
    let params= new URLSearchParams(search);
    
    console.log(search);

    //console.log(params.name);

    return(
        <div>
            <center>
                <h3> welome to Dashboard</h3>
                <p>Name:{params.get('name')}</p>
                <p>Age:{params.get('age')}</p>
                <Link to='/' className='Link'>Back to Home</Link>
            </center>
        </div>
    )
};
export default Dashboard