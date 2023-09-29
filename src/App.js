import './App.css';
import React, {Fragment, useState} from "react";
import ContactApp from "./contactList_components/contactApp";
import ContactList from "./contactList_components/contactList";
import ContactCard from "./contactList_components/contactCard";


let App=()=>{
    return(
        <Fragment>
            <ContactApp/>
        </Fragment>
    )
}
export default App;