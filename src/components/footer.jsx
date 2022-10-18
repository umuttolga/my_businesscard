import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <a onClick={(e) => {
      e.preventDefault();
      window.open("https://www.facebook.com/RayleighOP/")}}>
            <img className="footer--icons" src="/facebook_icon.png" />
            </a>
            <a onClick={(e) => {
      e.preventDefault();
      window.open("https://www.instagram.com/mr.hopela/")}}>
            <img className="footer--icons" src="/instagram_icon.png" />
            </a>
            <a onClick={(e) => {
      e.preventDefault();
      window.open("https://github.com/umuttolga")}}>
            <img className="footer--icons" src="/github_icon.png" />
            </a>
        </div>
    )
}