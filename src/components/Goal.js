import React from "react";

import "../stylesheets/goal.css";

const Goal = ({ goal }) => {

    const { name, desc, aos } = goal;

    return (
        <div
            className="goal"
            data-aos={ aos }
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true">

            <h2
                className="goal-name">
                { name }
            </h2>

            <p
                className="goal-desc">
                { desc }
            </p>

        </div>
    )
}

export default Goal;
