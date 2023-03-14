import React from "react";

var current_year = new Date();

function Footer() {
    return <footer>
        <p>Mehbub Rohit Copyright ⓒ {current_year.getFullYear()} </p>
    </footer>
}

export default Footer;