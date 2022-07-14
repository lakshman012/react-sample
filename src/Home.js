import React from 'react'
import {Link} from 'react-router-dom';

const Home=() =>{
    const name = "Jhone";
    //const age = 26;

    return(
        <div>
            <center>
                <h3>
                    welcome to  home page</h3>
                    <Link to = {`/dashboard?name=${name}&age=${26}`}   className='Link' >Dashboard</Link> {" "}
                    <Link to='/about' className='Link'>About</Link>
                
            </center>
        </div>
    )
};

export default Home