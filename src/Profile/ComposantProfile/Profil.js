import React from "react";
import { useState } from "react";
function Profile (props){
  const [ check , setCheck ] = useState(false)

  function ToggleFuncComp(){

    }
    
    return(
        
              <div className="Comment">
               
                <button onClick={()=> setCheck(!check )} >{check ? "login " : "logout"}</button>

            {check ? <><div className="UserInfo">
                <img className="Avatar"
                 src="/logo192.png"  alt=""
                 />
                  <div className="UserInfo-Fullname">
                    {props.Fullname}
                  </div>
                </div>
                <div className="Comment-bio">
                  {props.bio}
                 
                </div> </> : "no profile"
                 }
                 
              </div>
            
    );

      
} export default Profile