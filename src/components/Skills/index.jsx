import React, { Fragment } from "react";

const Skills = (props) => {
    const { skills } = props;
    return(
        <Fragment>
            <ul>
                { skills.map((skill) => (
                    <li key = {skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Skills;