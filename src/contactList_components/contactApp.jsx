import React, {Fragment, useState} from "react";
import ContactList from "./contactList";
import ContactCard from "./contactCard";

let ContactApp =()=>{
    let[state,setState]=useState({
        selectedContact :''
    });
    let receiveContact =(contact)=>{
        setState((state)=>({
            selectedContact: contact
        }))
    }
    let {selectedContact} =state;
    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row shadow-lg ">
                                <div className="col">
                                    <h1 className="text-success fw-bold">Contact App</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis cumque, eveniet iusto laudantium molestias nemo, odio quaerat quam, reprehenderit sint tempora veritatis? Accusantium consequuntur eius eos modi soluta suscipit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList receive={receiveContact}/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard send={selectedContact}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ContactApp;