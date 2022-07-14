// import React,{useState} from 'react';
// import Test from'./Test';
// const App = () => {
//   const [data,setData]= useState({
// name1: 'neo',   
// age2:252
//   } );
//   const {name1,age2}= data;

    
//     return(
//       <div>
//         <center>
//           <Test name={ name1} age = {age2}/>
//         </center>
//       </div>
//     )
// }





// import React from 'react'
// const App = ()=>{
// rturn(
//   <div>
//     <center>
//       <button onClick={() =>alert('hello')}> click me</button>
//     </center>
//   </div>
// )
// }
// export default App



// import  React ,{ useState}from'react'
// const App = () =>{
//   const[name,setName]=useState(' lakshman')
//   return(
//     <div>
//       <center>
//          Name:{name}<br/>
//          <input type= "text" name='"name' onChange={(e)=>setName(e.target.value)}/>
//       </center>
//     </div>
//   )
// }
// export default App




// import React, { useState } from 'react'
// const App =() =>{
//   const[data,setData]=useState({
//     email:'',
//     password:''
//   }

//   )
//   const changeHandler = e =>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitHandler=e=>{
//     e.preventDefault();
//     console.log(data);
//   }
//   return(
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <label> E -mail</label><br/>
//           <input type="text" name="email"onChange={changeHandler}/><br/>

//           <label> password : </label><br/>
//           <input type ="password" name="password" onChange={changeHandler}/><br/>
//           <input type="submit" value="login"/>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App;



// import React, { useState} from 'react'
// const App = ()=>{
//   const[data ,setData]=useState({

//   email: '',
//   password: ''

//   }

//   )
//   const  changeHandler=e=>{
//     setData({...data,[e.target.name]:e.target.value})

//   }
//   const submitHandler=e=>{
//         e.preventDefault();
//         if(data.password.length < 5){
//           alert('provide password length> 5')
          
//         }
      
//         else{
//          console.log(data);
//        }
//   }
//   return(

//     <div>
//           <center>
//            <form onSubmit={submitHandler}>
//                <label> E -mail</label><br/>
//                <input type="text" name="email"onChange={changeHandler}/><br/>
    
//               <label> password : </label><br/>
//             <input type ="password" name="password" onChange={changeHandler}/><br/>
//              <input type="submit" value="login"/>
//             </form>
//           </center>
//       </div>
//       )
//   }
  
    
  
//      export default App
// import React, { useState} from 'react'
//  const App = ()=>{
//   const[data ,setData]=useState({
//     email:'',
//         password:''
//       }
    
//       )
//       const  changeHandler=e=>{
//             setData({...data,[e.target.name]:e.target.value})
        
//            }
//          const submitHandler=e=>{
//               e.preventDefault();
//                if(data.password.length < 5){
//                  alert('provide password length> 5')
                  
//                }
//                else{
//                         console.log(data);
//                       }
//                  }
//                   return(
                
//                      <div>
//                        <center>
//                           <form onSubmit={submitHandler}>
//                               <label style={{'color' :'red','fontFamily':'Tahcma'}}> E -mail</label><br/>
//                               <input type="text" name="email"onChange={changeHandler}/><br/>
                    
//                               <label> password : </label><br/>
//                              <input type ="password" name="password" onChange={changeHandler}/><br/>
//                               <input type="submit" value="login"/>
//                              </form>
//                           </center>
//                       </div>
//                       )
//                   }





    


      


//   export default App


// import React from 'react';
//import { BrowserRouter, Route ,Routers} from 'react-router-dom'

// import  {BrowserRouter,Routes, Route } from 'react-router-dom';

// import About from './About';
// import Dashboard from './Dashboard';
// import Home from './Home'

// const App =() =>{
//   return(
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element= {<Home/>}/>
//         <Route path="/dashboard/:name" element={<Dashboard/>}/>
//         <Route path='/about' element={<About/>}/>

        
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App





import React from 'react';
//import { BrowserRouter, Route ,Routers} from 'react-router-dom'

 import  {BrowserRouter,Routes, Route } from 'react-router-dom';

import About from './About';
 import Dashboard from './Dashboard';
import Home from './Home'
const App =() =>{
    return(
      <div>
        <BrowserRouter>
       <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/dashboard'element={<Dashboard/>}/>
         <Route path='/about' element={<About/>}/>
  
          
        </Routes>
        </BrowserRouter>
      </div>
    )
   }
   export default App

