import React from "react";
import {NavLink} from "react-router-dom";
import d from "./dialogs.module.css";

const DialogItem = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};
const Message = (props) => {
    return <div className={d.message}>{props.msg}</div>;
};
let dialogsData = [
    {
        name: 'A',
        id: 1
    }, {
        name: 'b',
        id: 2
    }, {
        name: 'c',
        id: 3
    }, {
        name: 'd',
        id: 4
    }
]
let messagesData = [
    {
        message: '1',
        id: 1
    }, {
        message: '2',
        id: 2
    }, {
        message: '3',
        id: 2
    }, {
        message: '4',
        id: 2
    }
]
const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={d.messages}>
                <Message msg={messagesData[0].messages}/>
                <Message msg={messagesData[1].messages}/>
                <Message msg={messagesData[2].messages}/>
                <Message msg={messagesData[3].messages}/>
            </div>
        </div>
    );
};

export default Dialogs;
