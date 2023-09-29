import React, {Fragment} from "react";

let ContactCard =(props)=>{
    return(
        <Fragment>
           <div className="row">
               <div className="col">
                   <div className="card shadow-lg sticky-top ">
                       <img src={props.send.img} alt="" className="img-fluid " id="profile-pic"/>
                   </div>
                   <div className="card-body fw-bold">
                       <ul className="list-group">
                           <li className="list-group-item">Name :
                               {props.send.name}
                           </li>
                           <li className="list-group-item ">
                               phone :
                                   {props.send.phone}
                           </li>
                           <li className="list-group-item">Company :
                               {props.send.company.name}
                           </li>
                           <li className="list-group-item">website :
                               {props.send.website}
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
        </Fragment>
    )
}
export default ContactCard;