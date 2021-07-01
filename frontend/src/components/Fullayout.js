import React from "react";
import useStyles from "../assets/styles";

const FullLayout = ({ children }) => {
    const classes = useStyles.full();
    return(
        <div
            className={classes.content}
        >
            {children}
        </div>
    )
}
export default FullLayout;