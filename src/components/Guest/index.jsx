import React from "react";

const Guest = ({ name = '' }) => {
    return(
        <h2>
            {`Hello ${name ? name : "Guest"}`}
        </h2>
    )
}

export default Guest;