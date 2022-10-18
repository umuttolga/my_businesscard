import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function MailBar() {
    return (
        <div className="mailbar">
                <button onClick={() => {navigator.clipboard.writeText("mrhopela@icloud.com"), alert("Copied!")}} className="mailbar--email">
                    <img className="email--icon" src="/src/assets/email.png"/>
                    <h3>Email</h3>
                </button>
            <button className="mailbar--linkedin" onClick={(e) => {
      e.preventDefault();
      window.open("https://www.linkedin.com/in/umuttolgasarihan/")}} >
                <img className="linkedin--icon" src="/src/assets/linkedin.png"/>
                <h3 className="linkedin">LinkedIn</h3>
                </button>
        </div>
    )
}