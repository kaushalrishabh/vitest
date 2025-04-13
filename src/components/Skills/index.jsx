import React, { Fragment, useState, useEffect } from "react";

const Skills = (props) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        },[1001])
    },[])
    return(
        <Fragment>
            <ul>
                { skills.map((skill) => (
                    <li key = {skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            {
                isLoggedIn ? (
                    <button> Start Learning </button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}> Login </button>
                )
            }
        </Fragment>
    )
}

export default Skills;