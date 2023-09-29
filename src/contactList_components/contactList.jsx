import React, {Fragment, useState} from "react";
import contactData from "../contactData";

let ContactList =(props)=>{
    let [state,setState]=useState({
        contacts : contactData.getContactList()
    })
    let {contacts} =state;

    let selectedContact=(contact)=>{
        props.receive(contact);
    }
    return(
        <Fragment>
            <table className="table table-striped table-hover text-center shadow-lg">
                <thead className="bg-dark text-white">
                    <tr >
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody className="text-dark">
                    {
                       contacts.length > 0 && contacts.map(contact =>{
                           return(
                               <tr key={contact.id} onClick={()=> selectedContact(contact)}>
                                   <td>{contact.id}</td>
                                   <td>{contact.name}</td>
                                   <td>{contact.email}</td>
                                   <td>{contact.address.city}</td>
                                   <td>{contact.phone}</td>
                               </tr>
                           )
                        })
                    }
                </tbody>
            </table>
        </Fragment>
    )
}
export default ContactList;
